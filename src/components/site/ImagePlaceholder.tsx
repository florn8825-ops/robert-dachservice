import { cn } from "@/lib/utils";

const ratios = {
  wide: "aspect-[21/9]",
  photo: "aspect-[4/3]",
  square: "aspect-square",
};

export function ImagePlaceholder({
  label,
  ratio = "photo",
  className,
}: {
  label: string;
  ratio?: keyof typeof ratios;
  className?: string | undefined;
}) {
  return (
    <div
      role="img"
      aria-label={`Platzhalter: ${label}`}
      className={cn(
        "relative flex w-full items-center justify-center overflow-hidden border border-navy/15 bg-sand/60",
        ratios[ratio],
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, transparent 0 14px, color-mix(in oklab, var(--navy) 12%, transparent) 14px 15px)",
        }}
      />
      <span className="relative px-4 text-center text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-navy/60">
        {label}
      </span>
    </div>
  );
}
