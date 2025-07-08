import { cn } from "@/lib/utils";

export function AuthenticationVisual({ className }: { className?: string }) {
  return (
    <figure className={cn("group absolute inset-0 overflow-hidden", className)}>
      <div className="flex gap-2 justify-center absolute bottom-4 w-full">
        <div className=" left-0 flex flex-col gap-2">
          <div className="px-4 py-6 text-sm text-muted-foreground font-medium tracking-wider border rounded-xl bg-background/5">
            Lorenza167819@example.com
          </div>
          <div className="blur-sm group-hover:blur-none group-hover:bg-foreground/5 px-4 py-6 text-sm text-muted-foreground font-medium tracking-wider border rounded-xl bg-background/5">
            ****************************
          </div>
          <div className="px-4 py-6 text-sm text-muted-foreground font-medium tracking-wider border rounded-xl bg-background/5">
            @coolLorenzaisbenefitedfrom
          </div>
        </div>
        <div className="left-0 flex flex-col gap-2">
          <div className="px-4 py-6 text-sm text-muted-foreground font-medium tracking-wider border rounded-xl bg-background/5">
            Lorenza167819@example.com
          </div>
          <div className="blur-sm group-hover:blur-none group-hover:bg-foreground/5 px-4 py-6 text-sm text-muted-foreground font-medium tracking-wider border rounded-xl bg-background/5">
            *************************
          </div>
          <div className="px-4 py-6 text-sm text-muted-foreground font-medium tracking-wider border rounded-xl bg-background/5">
            @coolLorenzaisbenefitedfrom
          </div>
        </div>
      </div>
    </figure>
  );
}
