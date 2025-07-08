import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckIcon, DiscIcon, LockIcon, NetworkIcon } from "lucide-react";
import Link from "next/link";
import { FunctionsVisual } from "./functions-visual";
import { StorageVisual } from "./storage-visual";
import { AuthenticationVisual } from "./authentication-visual";

const products = [
  {
    Icon: DiscIcon,
    title: "Storage",
    subtitle: (
      <>
        <strong className="text-foreground">Store, organize, and serve</strong>
        <br className="hidden sm:inline-block xl:hidden 2xl:inline-block" />{" "}
        large files, from videos to images.
      </>
    ),
    Visual: StorageVisual,
  },
  {
    Icon: NetworkIcon,
    title: "Edge Functions",
    subtitle: (
      <>
        Easily write custom code
        <br className="hidden sm:inline-block" />{" "}
        <strong className="text-foreground">
          without deploying or scaling servers.
        </strong>
      </>
    ),
    Visual: FunctionsVisual,
  },
  {
    Icon: LockIcon,
    title: "Authentication",
    subtitle: (
      <>
        <strong className="text-foreground">
          Add user sign ups and logins
        </strong>
        ,
        <br className="hidden lg:inline-block" /> securing your data with Row
        Level Security.
      </>
    ),
    Visual: AuthenticationVisual,
  },
  {
    Icon: LockIcon,
    title: "Functions Edge",
    subtitle: (
      <>
        every project is <strong>a full postgres database</strong>, the world's
        most trusted relational database.
      </>
    ),
    highlight: (
      <ul className="font-semibold">
        <li className="flex gap-1 items-center">
          <CheckIcon className="inline h-4 w-4" /> 100% portable
        </li>
        <li className="flex gap-1 items-center">
          <CheckIcon className="inline h-4 w-4" /> Built in Auth with RLS
        </li>
        <li className="flex gap-1 items-center">
          <CheckIcon className="inline h-4 w-4" /> Easy to extend
        </li>
      </ul>
    ),
    Visual: FunctionsVisual,
  },
  {
    Icon: LockIcon,
    title: "Realtime",
    subtitle: (
      <>
        every project is <strong>a full postgres database</strong>, the world's
        most trusted relational database.
      </>
    ),
    highlight: (
      <ul className="font-semibold">
        <li className="flex gap-1 items-center">
          <CheckIcon className="inline h-4 w-4" /> 100% portable
        </li>
        <li className="flex gap-1 items-center">
          <CheckIcon className="inline h-4 w-4" /> Built in Auth with RLS
        </li>
        <li className="flex gap-1 items-center">
          <CheckIcon className="inline h-4 w-4" /> Easy to extend
        </li>
      </ul>
    ),
    Visual: FunctionsVisual,
  },
  {
    Icon: LockIcon,
    title: "Vector",
    subtitle: (
      <>
        every project is <strong>a full postgres database</strong>, the world's
        most trusted relational database.
      </>
    ),
    highlight: (
      <ul className="font-semibold">
        <li className="flex gap-1 items-center">
          <CheckIcon className="inline h-4 w-4" /> 100% portable
        </li>
        <li className="flex gap-1 items-center">
          <CheckIcon className="inline h-4 w-4" /> Built in Auth with RLS
        </li>
        <li className="flex gap-1 items-center">
          <CheckIcon className="inline h-4 w-4" /> Easy to extend
        </li>
      </ul>
    ),
    Visual: FunctionsVisual,
  },
  {
    Icon: LockIcon,
    title: "Data APIs",
    subtitle: (
      <>
        every project is <strong>a full postgres database</strong>, the world's
        most trusted relational database.
      </>
    ),
    highlight: (
      <ul className="font-semibold">
        <li className="flex gap-1 items-center">
          <CheckIcon className="inline h-4 w-4" /> 100% portable
        </li>
        <li className="flex gap-1 items-center">
          <CheckIcon className="inline h-4 w-4" /> Built in Auth with RLS
        </li>
        <li className="flex gap-1 items-center">
          <CheckIcon className="inline h-4 w-4" /> Easy to extend
        </li>
      </ul>
    ),
    Visual: FunctionsVisual,
  },
];

export function ProductSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-18 lg:py-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-4">
        {/* card item */}
        {products.map((product, index) => (
          <Link
            key={index}
            className="sm:h-[400px] col-span-6 xl:col-span-3 group"
            href="#"
          >
            <Card className="h-full relative">
              <CardHeader>
                <CardTitle>
                  <h2 className="flex gap-2 items-center sm:justify-center">
                    <product.Icon size={20} /> {product.title}
                  </h2>
                </CardTitle>
                <CardDescription className="text-sm"></CardDescription>
              </CardHeader>
              <CardContent className="text-sm h-full flex flex-col justify-between -mt-4">
                <p className="text-sm font-medium text-muted-foreground sm:text-center">
                  {product.subtitle}
                </p>
                {product.highlight}
              </CardContent>
              {/* <StorageVisual /> */}
              <product.Visual className="hidden sm:block" />
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
