import { siteContent } from "@/data/siteContent";

type BrandWordmarkTone = "default" | "hero" | "footer";

type BrandWordmarkProps = {
  className?: string;
  tone?: BrandWordmarkTone;
};

const toneClassNames: Record<BrandWordmarkTone, string> = {
  default: "text-xl sm:text-[1.35rem]",
  hero: "text-2xl sm:text-3xl",
  footer: "text-xl",
};

export function BrandWordmark({ className = "", tone = "default" }: BrandWordmarkProps) {
  const silverPart = siteContent.brandName.slice(0, 2);
  const goldPart = siteContent.brandName.slice(2);

  return (
    <span className={`brand-wordmark ${toneClassNames[tone]} ${className}`} aria-label={siteContent.brandName}>
      <span className="brand-wordmark-silver">{silverPart}</span>
      <span className="brand-wordmark-gold">{goldPart}</span>
    </span>
  );
}
