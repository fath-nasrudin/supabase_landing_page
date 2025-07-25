import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Logos } from "./logos";
import { ThemeToggle } from "@/components/theme-toggle";
import { ProductSection } from "@/components/products/products-section";
import { Footer } from "@/components/footer/footer";

export default function Home() {
  return (
    <div className="">
      <header className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  py-4 font-semibold flex gap-8 items-center">
          <div>Supabase</div>
          <nav className="hidden md:block">
            <ul className="flex gap-4 text-sm">
              <li>Product</li>
              <li>Developers</li>
              <li>Solutions</li>
              <li>Pricing</li>
              <li>Docs</li>
              <li>Blog</li>
            </ul>
          </nav>
          <div className="ml-auto flex gap-4 items-center">
            <Button
              className="hidden sm:inline-flex"
              size="sm"
              variant="outline"
              asChild
            >
              <Link href="#">Sign in</Link>
            </Button>
            <Button className="hidden sm:inline-flex" size="sm" asChild>
              <Link href="#">Start your project</Link>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </header>
      <section className="py-16 sm:py-18 lg:py-24 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col gap-8">
        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-semibold">
          <span>Build in a weekend</span>
          <span className="block text-brand">Scale to millions</span>
        </h1>
        <p className="font-semibold">
          Supabase is the Postgres development platform. Start your project with
          a Postgres database, Authentication, instant APIs, Edge Functions,
          Realtime subscriptions, Storage, and Vector embeddings.
        </p>

        <div className="space-x-4">
          <Button asChild>
            <Link href="#">Start your project</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="#">Request a demo</Link>
          </Button>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Logos />
      </div>
      <ProductSection />
      <Footer className="border-t" />
    </div>
  );
}
