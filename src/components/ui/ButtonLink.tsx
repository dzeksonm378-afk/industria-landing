import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
};

const variantClassNames: Record<ButtonVariant, string> = {
  primary:
    "border border-gold-soft/70 bg-gold-soft text-ink shadow-gold-soft hover:border-gold hover:bg-gold hover:shadow-premium focus-visible:outline-gold-soft",
  secondary:
    "border border-gold/55 bg-gold/10 text-mist hover:border-gold-soft hover:bg-gold/20 hover:text-white",
  ghost:
    "border border-silver/10 bg-card-soft/70 text-steel hover:border-gold/45 hover:bg-gold/10 hover:text-mist",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-11 max-w-full items-center justify-center rounded-md px-5 py-3 text-center text-sm font-semibold leading-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] transition duration-200 ${variantClassNames[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
