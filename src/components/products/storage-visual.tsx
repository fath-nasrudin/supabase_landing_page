import { cn } from "@/lib/utils";
import { FileIcon, ImageIcon, VideoIcon } from "lucide-react";

export function StorageVisual({ className }: { className?: string }) {
  const cols = [ImageIcon, FileIcon, VideoIcon];

  return (
    <figure className={cn("group absolute inset-0 overflow-hidden", className)}>
      <div className="absolute p-4 bottom-0 left-0 animate-marquee paused motion-safe:group-hover:running">
        <div className="flex flex-col gap-2">
          {cols.map((icon, idx2) => (
            <div key={idx2} className="flex gap-2">
              {Array.from({ length: 30 }).map((_, idx3) => {
                const Icon = icon;
                return (
                  <div
                    key={idx3}
                    className="p-4 border hover:border-foreground/50 bg-foreground/5 hover:bg-foreground/10 rounded-md "
                  >
                    <Icon className="text-muted-foreground" />
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </figure>
  );
}
