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

export type EstimateResult = {
  minPrice: number;
  maxPrice: number;
  baseRate: number;
  marketAverageRate: number;
  discountPercent: number;
  objectType: EstimateObjectType;
  complexity: EstimateComplexity;
  access: EstimateAccessDifficulty;
  needsManualReview: boolean;
  reasons: string[];
};

const DISCOUNT_PERCENT = 10;

const MARKET_PRICING = {
  apartment: {
    label: "Демонтажные работы в квартире",
    marketAverageRatePerM2: 1150,
    discountedRatePerM2: 1050,
  },
  commercial: {
    label: "Коммерческое помещение",
    marketAverageRatePerM2: 1450,
    discountedRatePerM2: 1300,
  },
  private_house: {
    label: "Частный дом / строение",
    marketAverageRatePerM2: 1500,
    discountedRatePerM2: 1350,
  },
  industrial: {
    label: "Здание / промышленный объект",
    marketAverageRatePerM2: 1800,
    discountedRatePerM2: 1600,
  },
} as const;

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
      discountedRatePerM2: MARKET_PRICING.commercial.discountedRatePerM2,
    };
  }

  return MARKET_PRICING[objectType];
}

function roundToThousands(value: number, minimumPrice: number) {
  return Math.max(minimumPrice, Math.round(value / 1000) * 1000);
}

export function calculateEstimate(input: EstimateInput): EstimateResult {
  const reasons: string[] = [];
  let needsManualReview = input.objectType === "unknown";
  const complexity = input.aiComplexity ?? "unknown";
  const pricing = getPricingConfig(input.objectType);
  const minimumPrice = minimumOrderPrice[input.objectType];

  const baseByArea = input.area * pricing.discountedRatePerM2;
  const total =
    baseByArea *
    complexityMultipliers[complexity] *
    accessMultipliers[input.accessDifficulty] *
    wasteRemovalMultipliers[input.wasteRemoval] *
    urgencyMultipliers[input.urgency];

  reasons.push("Базовая ставка взята как средняя рыночная цена −10%.");
  reasons.push(`Тип объекта: ${pricing.label}.`);
  reasons.push(`Площадь: ${input.area} м².`);
  reasons.push(`Сложность: ${complexityLabels[complexity]}, применён коэффициент ${complexityMultipliers[complexity]}.`);
  reasons.push(`Доступ: ${accessLabels[input.accessDifficulty]}, применён коэффициент ${accessMultipliers[input.accessDifficulty]}.`);

  if (input.objectType === "unknown") {
    reasons.push("Тип объекта не выбран, поэтому нужна ручная проверка специалистом.");
  }

  if (input.wasteRemoval === "yes") {
    reasons.push("Учитывается вывоз строительного мусора.");
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

  reasons.push("Расчёт предварительный, финальная смета после осмотра специалистом.");

  return {
    minPrice: roundToThousands(total * 0.85, minimumPrice),
    maxPrice: roundToThousands(total * 1.25, minimumPrice),
    baseRate: pricing.discountedRatePerM2,
    marketAverageRate: pricing.marketAverageRatePerM2,
    discountPercent: DISCOUNT_PERCENT,
    objectType: input.objectType,
    complexity,
    access: input.accessDifficulty,
    needsManualReview,
    reasons,
  };
}
