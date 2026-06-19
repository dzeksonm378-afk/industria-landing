import Image from "next/image";
import { getBrandLogoMarkPath } from "@/lib/brandLogo";

type BrandLogoMarkProps = {
  className?: string;
  priority?: boolean;
  imageSrc?: string | null;
  variant?: "default" | "headerFullBlack";
};

export function BrandLogoMark({
  className = "",
  priority = false,
  imageSrc,
  variant = "default",
}: BrandLogoMarkProps) {
  const logoMarkPath = imageSrc ?? getBrandLogoMarkPath();
  const isHeaderFullBlack = variant === "headerFullBlack";
  const shellClassName = isHeaderFullBlack
    ? "flex shrink-0 items-center justify-center overflow-hidden rounded-md border border-gold/20 bg-[#000] shadow-[0_10px_26px_rgba(0,0,0,0.28)]"
    : "brand-mark-shell flex shrink-0 items-center justify-center overflow-hidden rounded-md border border-gold/35 bg-card-soft shadow-[inset_0_1px_0_rgba(255,255,255,0.14)]";
  const imageClassName = isHeaderFullBlack
    ? "h-full w-full bg-[#000] object-cover object-center"
    : "h-full w-full object-contain";

  return (
    <span
      className={`${shellClassName} ${className}`}
      aria-hidden="true"
    >
      {logoMarkPath ? (
        <Image
          src={logoMarkPath}
          alt=""
          width={96}
          height={96}
          priority={priority}
          className={imageClassName}
        />
      ) : (
        <span className="brand-mark-fallback" />
      )}
    </span>
  );
}
