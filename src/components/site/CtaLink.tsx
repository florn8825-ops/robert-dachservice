import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { business } from "@/content/site";

type Variant = "primary" | "ghost" | "onDark";

const base =
  "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-200 font-[family-name:var(--font-display)]";

const variants: Record<Variant, string> = {
  primary: "bg-copper text-copper-foreground hover:bg-copper-deep",
  ghost: "border border-navy/25 text-navy hover:bg-navy hover:text-navy-foreground",
  onDark:
    "border border-navy-foreground/30 text-navy-foreground hover:bg-navy-foreground hover:text-navy",
};

export function CtaLink({
  to,
  variant = "primary",
  children,
  className,
}: {
  to: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link to={to as never} className={cn(base, variants[variant], className)}>
      {children}
    </Link>
  );
}

export function CallLink({
  variant = "ghost",
  children,
  className,
}: {
  variant?: Variant;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={business.phonePrimaryHref}
      className={cn(base, variants[variant], className)}
      aria-label={`Jetzt anrufen: ${business.phonePrimary}`}
    >
      {children ?? "Jetzt anrufen"}
    </a>
  );
}
