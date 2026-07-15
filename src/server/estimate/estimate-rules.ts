export type EstimateObjectType =
  | "apartment"
  | "commercial"
  | "private_house"
  | "industrial"
  | "unknown";

export type EstimateComplexity = "low" | "medium" | "high" | "unknown";
export type EstimateAccessDifficulty = "low" | "medium" | "high" | "unknown";

export type EstimateInput = {
  objectType: EstimateObjectType;
  area: number;
  wasteRemoval: "yes" | "no" | "unknown";
  urgency: "standard" | "urgent" | "unknown";
  accessDifficulty: EstimateAccessDifficulty;
  aiComplexity?: EstimateComplexity;
  aiConfidence?: number;
};

export type EstimateBreakdownItem = {
  key: "preparation" | "demolition" | "waste" | "finishing";
  label: string;
  percent: number;
  minPrice: number;
  maxPrice: number;
};

export type EstimateResult = {
  minPrice: number;
  maxPrice: number;
  marketAverageRate: number;
  companyRate: number;
  markupPercent: number;
  objectType: EstimateObjectType;
  complexity: EstimateComplexity;
  access: EstimateAccessDifficulty;
  needsManualReview: boolean;
  reasons: string[];
  breakdown: EstimateBreakdownItem[];
};

const MARKET_MARKUP_PERCENT = 10;

const MARKET_PRICING = {
  apartment: {
    label: "Демонтажные работы в квартире",
    marketAverageRatePerM2: 1150,
  },
  commercial: {
    label: "Коммерческое помещение",
    marketAverageRatePerM2: 1450,
  },
  private_house: {
    label: "Частный дом / строение",
    marketAverageRatePerM2: 1500,
  },
  industrial: {
    label: "Здание / промышленный объект",
    marketAverageRatePerM2: 1800,
  },
} as const;

const breakdownWithWaste: Array<Omit<EstimateBreakdownItem, "minPrice" | "maxPrice">> = [
  { key: "preparation", label: "Подготовительные и организационные работы", percent: 10 },
  { key: "demolition", label: "Основной демонтаж конструкций", percent: 55 },
  { key: "waste", label: "Погрузка и вывоз строительного мусора", percent: 25 },
  { key: "finishing", label: "Завершение работ и уборка территории", percent: 10 },
];

const breakdownWithoutWaste: Array<Omit<EstimateBreakdownItem, "minPrice" | "maxPrice">> = [
  { key: "preparation", label: "Подготовительные и организационные работы", percent: 12 },
  { key: "demolition", label: "Основной демонтаж конструкций", percent: 73 },
  { key: "finishing", label: "Завершение работ и уборка территории", percent: 15 },
];

const minimumOrderPrice: Record<EstimateObjectType, number> = {
  apartment: 15000,
  commercial: 15000,
  private_house: 45000,
  industrial: 80000,
  unknown: 15000,
};

const complexityMultipliers: Record<EstimateComplexity, number> = {
  low: 1,
  medium: 1.15,
  high: 1.35,
  unknown: 1,
};

const accessMultipliers: Record<EstimateAccessDifficulty, number> = {
  low: 1,
  medium: 1.1,
  high: 1.25,
  unknown: 1,
};

const wasteRemovalMultipliers: Record<EstimateInput["wasteRemoval"], number> = {
  yes: 1.25,
  no: 1,
  unknown: 1,
};

const urgencyMultipliers: Record<EstimateInput["urgency"], number> = {
  standard: 1,
  urgent: 1.2,
  unknown: 1,
};

const complexityLabels: Record<EstimateComplexity, string> = {
  low: "низкая",
  medium: "средняя",
  high: "высокая",
  unknown: "не определена",
};

const accessLabels: Record<EstimateAccessDifficulty, string> = {
  low: "простой",
  medium: "средний",
  high: "сложный",
  unknown: "не уточнён",
};

function getPricingConfig(objectType: EstimateObjectType) {
  if (objectType === "unknown") {
    return {
      label: "Тип объекта не указан",
      marketAverageRatePerM2: MARKET_PRICING.commercial.marketAverageRatePerM2,
    };
  }

  return MARKET_PRICING[objectType];
}

function getCompanyRatePerM2(marketAverageRatePerM2: number) {
  return Math.round(marketAverageRatePerM2 * (1 + MARKET_MARKUP_PERCENT / 100));
}

function roundMoneyToThousands(value: number) {
  return Math.round(value / 1000) * 1000;
}

function roundFinalPrice(value: number, minimumPrice: number) {
  return Math.max(minimumPrice, Math.round(value / 1000) * 1000);
}

function calculateBreakdown(minPrice: number, maxPrice: number, wasteRemoval: EstimateInput["wasteRemoval"]) {
  const source = wasteRemoval === "yes" ? breakdownWithWaste : breakdownWithoutWaste;
  let minPriceSum = 0;
  let maxPriceSum = 0;

  return source.map((item, index): EstimateBreakdownItem => {
    const isLastItem = index === source.length - 1;
    const itemMinPrice = isLastItem ? Math.max(0, minPrice - minPriceSum) : roundMoneyToThousands(minPrice * item.percent / 100);
    const itemMaxPrice = isLastItem ? Math.max(0, maxPrice - maxPriceSum) : roundMoneyToThousands(maxPrice * item.percent / 100);

    minPriceSum += itemMinPrice;
    maxPriceSum += itemMaxPrice;

    return {
      ...item,
      minPrice: itemMinPrice,
      maxPrice: itemMaxPrice,
    };
  });
}

export function calculateEstimate(input: EstimateInput): EstimateResult {
  const reasons: string[] = [];
  let needsManualReview = input.objectType === "unknown";
  const complexity = input.aiComplexity ?? "unknown";
  const pricing = getPricingConfig(input.objectType);
  const minimumPrice = minimumOrderPrice[input.objectType];
  const companyRatePerM2 = getCompanyRatePerM2(pricing.marketAverageRatePerM2);

  const baseByArea = input.area * companyRatePerM2;
  const total =
    baseByArea *
    complexityMultipliers[complexity] *
    accessMultipliers[input.accessDifficulty] *
    wasteRemovalMultipliers[input.wasteRemoval] *
    urgencyMultipliers[input.urgency];
  const minPrice = roundFinalPrice(total * 0.85, minimumPrice);
  const maxPrice = roundFinalPrice(total * 1.25, minimumPrice);

  reasons.push("Базовая ставка рассчитана как средняя рыночная цена +10%.");
  reasons.push("Наценка учитывает организацию работ и привлечение субподрядных организаций.");
  reasons.push(`Тип объекта: ${pricing.label}.`);
  reasons.push(`Площадь: ${input.area} м².`);
  reasons.push(`Сложность: ${complexityLabels[complexity]}, применён коэффициент ${complexityMultipliers[complexity]}.`);
  reasons.push(`Доступ: ${accessLabels[input.accessDifficulty]}, применён коэффициент ${accessMultipliers[input.accessDifficulty]}.`);

  if (input.objectType === "unknown") {
    reasons.push("Тип объекта не выбран, поэтому нужна ручная проверка специалистом.");
  }

  if (input.wasteRemoval === "yes") {
    reasons.push("Учитывается погрузка и вывоз строительного мусора.");
  } else if (input.wasteRemoval === "unknown") {
    reasons.push("Вывоз мусора не уточнен, финальная смета может измениться.");
  }

  if (input.urgency === "urgent") {
    reasons.push("Учтена срочность работ, применён коэффициент 1.2.");
  } else if (input.urgency === "unknown") {
    reasons.push("Срочность не уточнена, сроки нужно подтвердить вручную.");
  }

  if (input.accessDifficulty === "unknown") {
    reasons.push("Доступ к объекту не уточнен, специалист проверит условия отдельно.");
  }

  if (input.objectType === "industrial" && complexity === "high") {
    needsManualReview = true;
    reasons.push("Промышленный объект с высокой сложностью требует ручной проверки специалистом.");
  }

  if (typeof input.aiConfidence === "number" && input.aiConfidence < 0.55) {
    needsManualReview = true;
    reasons.push("Уверенность AI ниже 55%, требуется ручная проверка.");
  }

  reasons.push("Расчёт предварительный, финальная смета определяется после осмотра.");

  return {
    minPrice,
    maxPrice,
    marketAverageRate: pricing.marketAverageRatePerM2,
    companyRate: companyRatePerM2,
    markupPercent: MARKET_MARKUP_PERCENT,
    objectType: input.objectType,
    complexity,
    access: input.accessDifficulty,
    needsManualReview,
    reasons,
    breakdown: calculateBreakdown(minPrice, maxPrice, input.wasteRemoval),
  };
}
