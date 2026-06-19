import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, description, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-32 px-4 py-16 sm:px-6 lg:px-8 lg:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl">
        {(eyebrow || title || description) && (
          <div className="mb-10 max-w-3xl">
            {eyebrow && (
              <p className="mb-3 inline-flex rounded-sm border border-gold/20 bg-gold/10 px-3 py-1 text-sm font-semibold uppercase text-gold-soft">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-3xl font-semibold leading-tight text-mist sm:text-4xl">{title}</h2>
            )}
            {description && <p className="mt-4 text-base leading-7 text-silver/75">{description}</p>}
            <div className="gold-divider mt-6 max-w-sm" />
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
