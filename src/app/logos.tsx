const brands = [
  {
    name: "1password",
    alt: "1password",
    image: "/images/logos/publicity/1password.svg",
  },
  {
    name: "betashares",
    alt: "betashares",
    image: "/images/logos/publicity/betashares.svg",
  },
  {
    name: "chatbase",
    alt: "chatbase",
    image: "/images/logos/publicity/chatbase.svg",
  },
  {
    name: "github",
    alt: "github",
    image: "/images/logos/publicity/github.svg",
  },
  {
    name: "goodtape",
    alt: "goodtape",
    image: "/images/logos/publicity/goodtape.svg",
  },
  {
    name: "gopuff",
    alt: "gopuff",
    image: "/images/logos/publicity/gopuff.svg",
  },
];

export function Logos() {
  return (
    <div className="max-w-4xl">
      <div className="relative whitespace-nowrap overflow-hidden">
        <div className="flex gap-4 w-max animate-[marquee_90000ms_linear_infinite] will-change-transform">
          {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
            <img
              key={`${i}`}
              src={brand.image}
              alt={brand.alt}
              className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
          ))}
        </div>
        {/* left side blur */}
        <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-background to-transparent pointer-events-none z-10"></div>

        {/* right side blur */}
        <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-background to-transparent pointer-events-none z-10"></div>
      </div>
      {/* heading */}
      <p className="w-full text-center text-sm font-medium text-foreground mt-6">
        Trusted by fast-growing companies worldwide
      </p>
    </div>
  );
}
