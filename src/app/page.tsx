import Image from "next/image";

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
            <button className="text-xs px-2 py-1 border rounded-sm">
              Sign in
            </button>
            <button className="text-xs px-2 py-1 border rounded-sm bg-teal-300 border-teal-400 hover:border-teal-500">
              Start your project
            </button>
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
          <button className="px-2 py-1 rounded-sm bg-brand-400 dark:bg-brand-500 border border-brand/75 hover:border-brand/100">
            Start your project
          </button>
          <button className="px-2 py-1 border rounded-sm">
            Request a demo
          </button>
        </div>
      </section>
    </div>
  );
}
