import { cn } from "@/lib/utils";
import { BoxesIcon } from "lucide-react";

interface Props {
  className?: string;
}
export function DatabaseVisual({ className }: Props) {
  return (
    <figure className={cn("group absolute inset-0 hidden sm:block", className)}>
      <div className="absolute inset-0 px-24 items-center justify-end hidden sm:flex">
        <BoxesIcon
          className="size-32 group-hover:animate-pulse"
          strokeWidth={1}
        />
      </div>
    </figure>
  );
}
