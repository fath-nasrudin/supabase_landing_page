import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Logos } from "./logos";

export default function Home() {
  return (
    <div>
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
          <div className="ml-auto flex gap-4">
            <Button size="sm" variant="outline" asChild>
              <Link href="#">Sign in</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="#">Start your project</Link>
            </Button>
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
        <Logos />
      </section>
    </div>
  );
}
