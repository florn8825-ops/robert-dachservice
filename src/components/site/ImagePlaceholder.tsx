import { cn } from "@/lib/utils";

const ratios = {
  wide: "aspect-[21/9]",
  photo: "aspect-[4/3]",
  square: "aspect-square",
};

export function ImagePlaceholder({
  label,
  ratio = "photo",
  tone = "light",
  className,
}: {
  label: string;
  ratio?: keyof typeof ratios;
  tone?: "light" | "dark";
  className?: string | undefined;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "relative w-full overflow-hidden border border-navy/15",
        ratios[ratio],
        className,
      )}
    >
      <img
        src="/Professionelles%20Dachdecker-Foto.jpeg"
        alt={label}
        className="h-full w-full object-cover"
      />
    </div>
  );
}
