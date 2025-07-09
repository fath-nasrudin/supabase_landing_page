import { cn } from "@/lib/utils";

export function AuthenticationVisual({ className }: { className?: string }) {
  const strings = [
    { string: "Lorenza167819@example.com" },
    { string: "****************************", isBlur: true },
    { string: "@coolLorenzaisbenefitedfrom", hideOnSm: true },
  ];
  return (
    <figure className={cn("group absolute inset-0 overflow-hidden", className)}>
      <div className="flex gap-2 justify-center absolute bottom-4 w-full">
        {Array.from({ length: 2 }).map((_, idx) => (
          <div key={idx} className="left-0 flex flex-col gap-2 w-[200%]">
            {/* box */}
            {strings.map((data, dataIdx) => (
              <div
                key={dataIdx}
                className={cn(
                  "p-6 text-sm text-muted-foreground font-medium tracking-wider border rounded-xl bg-background/5",
                  data.isBlur &&
                    "blur-sm group-hover:blur-none group-hover:bg-foreground/5",
                  "sm:text-2xl sm:p-12 xl:p-6 xl:text-sm",
                  data.hideOnSm && "sm:hidden xl:block"
                )}
              >
                {data.string}
              </div>
            ))}
          </div>
        ))}
      </div>
    </figure>
  );
}
