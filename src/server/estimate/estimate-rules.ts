export type EstimateObjectType =
  | "apartment"
  | "commercial"
  | "private_house"
  | "industrial"
  | "unknown";

export type EstimateInput = {
  objectType: EstimateObjectType;
  area: number;
  wasteRemoval: "yes" | "no" | "unknown";
  urgency: "standard" | "urgent" | "unknown";
  accessDifficulty: "low" | "medium" | "high" | "unknown";
  aiComplexity?: "low" | "medium" | "high" | "unknown";
  aiConfidence?: number;
};

export type EstimateResult = {
  minPrice: number;
  maxPrice: number;
  needsManualReview: boolean;
  reasons: string[];
};

const MINIMUM_PRICE = 15000;

const objectTypeRates: Record<EstimateObjectType, number> = {
  apartment: 1200,
  commercial: 1600,
  private_house: 2200,
  industrial: 3000,
  unknown: 1600,
};

const objectTypeLabels: Record<EstimateObjectType, string> = {
  apartment: "квартира / помещение",
  commercial: "коммерческое помещение",
  private_house: "частный дом / строение",
  industrial: "промышленный объект",
  unknown: "тип объекта не указан",
};

function roundToThousands(value: number) {
  return Math.max(MINIMUM_PRICE, Math.round(value / 1000) * 1000);
}

export function calculateEstimate(input: EstimateInput): EstimateResult {
  const reasons: string[] = [];
  let needsManualReview = input.objectType === "unknown";

  let basePrice = Math.max(MINIMUM_PRICE, input.area * objectTypeRates[input.objectType]);
  reasons.push(`База: ${objectTypeLabels[input.objectType]}, ${input.area} м2.`);

  if (input.objectType === "unknown") {
    reasons.push("Тип объекта не выбран, поэтому нужна ручная проверка специалистом.");
  }

  if (input.wasteRemoval === "yes") {
    basePrice *= 1.25;
    reasons.push("Учтен вывоз строительного мусора: +25%.");
  } else if (input.wasteRemoval === "unknown") {
    reasons.push("Вывоз мусора не уточнен, финальная смета может измениться.");
  }

  if (input.urgency === "urgent") {
    basePrice *= 1.2;
    reasons.push("Учтена срочность работ: +20%.");
  } else if (input.urgency === "unknown") {
    reasons.push("Срочность не уточнена, сроки нужно подтвердить вручную.");
  }

  if (input.accessDifficulty === "medium") {
    basePrice *= 1.1;
    reasons.push("Учтен средний доступ к объекту: +10%.");
  }

  if (input.accessDifficulty === "high") {
    basePrice *= 1.25;
    reasons.push("Учтен сложный доступ к объекту: +25%.");
  }

  if (input.accessDifficulty === "unknown") {
    reasons.push("Доступ к объекту не уточнен, специалист проверит условия отдельно.");
  }

  if (input.aiComplexity === "medium") {
    basePrice *= 1.1;
    reasons.push("Учтена средняя сложность демонтажа: +10%.");
  }

  if (input.aiComplexity === "high") {
    basePrice *= 1.25;
    reasons.push("Учтена высокая сложность демонтажа: +25%.");
  }

  if (typeof input.aiConfidence === "number" && input.aiConfidence < 0.55) {
    needsManualReview = true;
    reasons.push("Уверенность AI ниже 55%, требуется ручная проверка.");
  }

  return {
    minPrice: roundToThousands(basePrice * 0.85),
    maxPrice: roundToThousands(basePrice * 1.25),
    needsManualReview,
    reasons,
  };
}
