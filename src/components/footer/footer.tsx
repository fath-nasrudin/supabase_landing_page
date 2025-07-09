import { cn } from "@/lib/utils";
import { ThemeToggle } from "../theme-toggle";

interface Props {
  className?: string;
}

export function Footer({ className }: Props) {
  const footerData = [
    {
      title: "Product",
      links: [
        { href: "#", label: "Privacy Policy" },
        { href: "#", label: "Terms of Service" },
        { href: "#", label: "Security" },
        { href: "#", label: "Status" },
        { href: "#", label: "Support" },
        { href: "#", label: "Documentation" },
        { href: "#", label: "API Reference" },
        { href: "#", label: "CLI" },
        { href: "#", label: "GitHub" },
        { href: "#", label: "Discord" },
        { href: "#", label: "Stack Overflow" },
        { href: "#", label: "Community" },
      ],
    },
    {
      title: "Developers",
      links: [
        { href: "#", label: "Documentation" },
        { href: "#", label: "API Reference" },
        { href: "#", label: "CLI" },
        { href: "#", label: "GitHub" },
        { href: "#", label: "Discord" },
        { href: "#", label: "Stack Overflow" },
        { href: "#", label: "Community" },
        { href: "#", label: "Blog" },
        { href: "#", label: "Changelog" },
        { href: "#", label: "Roadmap" },
        { href: "#", label: "FAQ" },
        { href: "#", label: "Tutorials" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { href: "#", label: "Use Cases" },
        { href: "#", label: "Case Studies" },
        { href: "#", label: "Partners" },
        { href: "#", label: "Integrations" },
        { href: "#", label: "Support" },
        { href: "#", label: "Status" },
        { href: "#", label: "Security" },
        { href: "#", label: "Compliance" },
        { href: "#", label: "Trust Center" },
      ],
    },
    {
      title: "Pricing",
      links: [
        { href: "#", label: "Pricing Plans" },
        { href: "#", label: "Free Tier" },
        { href: "#", label: "Enterprise" },
        { href: "#", label: "Billing" },
        { href: "#", label: "Contact Sales" },
        { href: "#", label: "Request a Quote" },
        { href: "#", label: "Nonprofits" },
        { href: "#", label: "Education" },
        { href: "#", label: "Open Source" },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "#", label: "About Us" },
        { href: "#", label: "Careers" },
        { href: "#", label: "Contact Us" },
        { href: "#", label: "Press" },
        { href: "#", label: "Investors" },
        { href: "#", label: "Newsroom" },
        { href: "#", label: "Events" },
        { href: "#", label: "Blog" },
      ],
    },
  ];
  return (
    <footer className={cn("", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 sm:px-16">
          {footerData.map(({ title, links }, index) => (
            <div key={index}>
              <h3 className="font-semibold text-sm">{title}</h3>
              <ul>
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground font-medium"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-between text-sm font-semibold border-t pt-8">
          <p className="text-muted-foreground ">© Supabase Inc</p>
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
}
