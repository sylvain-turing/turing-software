import { ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  label: string;
  width?: string | number;
  height?: string | number;
  className?: string;
}

export function ImagePlaceholder({
  label,
  width,
  height,
  className = "",
}: ImagePlaceholderProps) {
  const style = {
    width: width ? (typeof width === "number" ? `${width}px` : width) : "100%",
    height: height ? (typeof height === "number" ? `${height}px` : height) : "auto",
    minHeight: height ? undefined : "250px",
  };

  return (
    <div
      className={`flex flex-col items-center justify-center bg-muted border-2 border-dashed border-muted-foreground/30 rounded-xl p-8 ${className}`}
      style={style}
    >
      <ImageIcon className="h-16 w-16 text-muted-foreground/40 mb-4" />
      <p className="text-sm text-muted-foreground text-center font-medium">
        {label}
      </p>
    </div>
  );
}
