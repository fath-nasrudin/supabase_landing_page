import { cn } from "@/lib/utils";
import Image from "next/image";

export function FunctionsVisual({ className }: { className?: string }) {
  return (
    <figure className={cn("absolute inset-0", className)}>
      <Image
        src="/images/index/products/edge-functions-light.svg"
        alt="Supabase Edge Functions globe"
        fill
        className="object-cover
        dark:hidden
        "
      />
      <Image
        src="/images/index/products/edge-functions-dark.svg"
        alt="Supabase Edge Functions globe"
        fill
        className="object-cover
        hidden dark:block"
      />
      <div
        className="absolute inset-0 top-[48%] text-center
      px-6 py-1 bg-background border rounded-4xl h-min w-min mx-auto"
      >
        <span className="whitespace-nowrap">
          <span className="mr-2 text-xs text-foreground/90 font-semibold">
            $
          </span>
          <span className="text-xs text-foreground/90">supabase </span>
          <span className="text-xs text-brand">functions serve</span>
        </span>
      </div>
    </figure>
  );
}
