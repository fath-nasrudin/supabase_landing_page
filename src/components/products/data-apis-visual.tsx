import { cn } from "@/lib/utils";
import Image from "next/image";

interface Props {
  className?: string;
}

export function DataAPIsVisual({ className }: Props) {
  return (
    <figure className={cn("group absolute inset-0 overflow-hidden", className)}>
      <div className=" absolute inset-0 flex motion-safe:group-hover:running paused animate-[marquee-reverse_20000ms_linear_infinite]">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="aspect-[330/430]">
            <Image
              src="/images/index/products/data-apis-lines-dark.svg"
              width={330}
              height={430}
              alt="Supabase restful DataAPIs"
              className="hidden dark:block"
            />
            <Image
              src="/images/index/products/data-apis-lines-light.svg"
              width={330}
              height={430}
              alt="Supabase restful DataAPIs"
              className="dark:hidden"
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex sm:justify-center xl:justify-start">
        <div className="aspect-[330/430]">
          <Image
            src="/images/index/products/data-apis-dark.svg"
            alt="Supabase restful DataAPIs"
            width={330}
            height={430}
            className="hidden dark:block"
          />
          <Image
            src="/images/index/products/data-apis-light.svg"
            alt="Supabase restful DataAPIs"
            width={330}
            height={430}
            className="dark:hidden"
          />
        </div>
      </div>
    </figure>
  );
}
