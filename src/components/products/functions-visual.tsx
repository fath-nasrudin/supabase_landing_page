"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";

export function FunctionsVisual({ className }: { className?: string }) {
  const typerRef = useRef<HTMLSpanElement>(null);
  const [typed, setTyped] = useState<Typed | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const firstString = "deploy";
  const strings = [firstString, "serve"];

  function triggerAnimation() {
    if (isPlaying) return;

    typed?.destroy();
    setTyped(
      new Typed(typerRef.current, {
        strings: strings,
        typeSpeed: 50,
        backSpeed: 40,
        backDelay: 100,
        showCursor: false,
        fadeOutDelay: 100,
        onBegin: () => setIsPlaying(true),
        onComplete: () => setIsPlaying(false),
      })
    );
    typed?.reset();
    typed?.start();
  }

  let hoverTimeoutRef: any;

  const handleMouseEnter = () => {
    // Delay the animation to trigger animation only if hover is intentional
    hoverTimeoutRef = setTimeout(() => {
      triggerAnimation();
    }, 200);
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeoutRef);
  };

  useEffect(() => {
    return () => {
      typed?.destroy();
      hoverTimeoutRef && clearTimeout(hoverTimeoutRef);
    };
  }, []);

  return (
    <figure
      className={cn("absolute inset-0", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
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
      <div className="absolute inset-0 top-[48%] text-center px-4 py-1 bg-background border rounded-4xl h-min mx-auto flex items-center w-full max-w-[200px]">
        <span className="whitespace-nowrap">
          <span className="mr-2 text-xs text-foreground/90 font-semibold">
            $
          </span>
          <span className="text-xs text-foreground/90">supabase </span>
          <span className="text-xs text-brand mr-6">
            functions <span ref={typerRef}>{firstString}</span>
          </span>
        </span>
      </div>
    </figure>
  );
}
