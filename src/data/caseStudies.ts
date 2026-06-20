export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  coverImage: string;
  images: string[];
  tags: string[];
  workScope: string[];
  resultText: string;
};

const buildingDemolitionImages = Array.from(
  { length: 8 },
  (_, index) => `/images/cases/object-01-building-demolition/${String(index + 1).padStart(2, "0")}.jpg`,
);

const industrialHeightImages = Array.from(
  { length: 6 },
  (_, index) => `/images/cases/object-02-industrial-height/${String(index + 1).padStart(2, "0")}.jpg`,
);

const privateHousesImages = Array.from(
  { length: 8 },
  (_, index) => `/images/cases/object-03-private-houses/${String(index + 1).padStart(2, "0")}.jpg`,
);

export const caseStudies: CaseStudy[] = [
  {
    slug: "building-demolition",
    title: "Комплексный демонтаж здания",
    category: "Здание",
    shortDescription: "Демонтаж здания с применением спецтехники, погрузкой и подготовкой зоны работ.",
    fullDescription:
      "На объекте выполнялся поэтапный разбор фасадной части и конструкций здания, работа спецтехники, погрузка и расчистка территории для дальнейшего этапа.",
    coverImage: buildingDemolitionImages[0],
    images: buildingDemolitionImages,
    tags: ["здание", "спецтехника", "разбор", "расчистка"],
    workScope: [
      "разбор фасадной части",
      "демонтаж конструкций",
      "работа спецтехники",
      "погрузка и расчистка территории",
    ],
    resultText: "Территория подготовлена к следующему этапу работ.",
  },
  {
    slug: "industrial-height-demolition",
    title: "Высотные и промышленные демонтажные работы",
    category: "Промышленный объект",
    shortDescription: "Демонтаж бетонных и промышленных конструкций с применением высотного доступа.",
    fullDescription:
      "Работы выполнялись на высоте: демонтаж конструкций, подготовка поверхности и безопасная организация доступа к сложным участкам объекта.",
    coverImage: industrialHeightImages[0],
    images: industrialHeightImages,
    tags: ["высота", "бетон", "промышленный", "доступ"],
    workScope: [
      "высотный доступ",
      "демонтаж бетонных конструкций",
      "работа на сложных участках",
      "подготовка объекта",
    ],
    resultText: "Сложный участок объекта подготовлен к дальнейшим работам.",
  },
  {
    slug: "private-houses-demolition",
    title: "Демонтаж частных домов и строений",
    category: "Частные строения",
    shortDescription: "Разбор частных домов, вывоз мусора и расчистка участка.",
    fullDescription:
      "На объекте выполнялся демонтаж частных строений, работа техники, разбор кирпичных, деревянных и смешанных конструкций, а также освобождение территории от строительного мусора.",
    coverImage: privateHousesImages[0],
    images: privateHousesImages,
    tags: ["дом", "посёлок", "участок", "расчистка"],
    workScope: [
      "демонтаж частных строений",
      "разбор кирпичных и деревянных конструкций",
      "расчистка участка",
      "подготовка территории",
    ],
    resultText: "Участок освобождён от строений и подготовлен к дальнейшему использованию.",
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}
