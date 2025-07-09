import {
  CardWithHover,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BoxIcon,
  CheckIcon,
  DatabaseIcon,
  DiscIcon,
  LockIcon,
  NetworkIcon,
} from "lucide-react";
import Link from "next/link";
import { FunctionsVisual } from "./functions-visual";
import { StorageVisual } from "./storage-visual";
import { AuthenticationVisual } from "./authentication-visual";
import { DataAPIsVisual } from "./data-apis-visual";
import { cn } from "@/lib/utils";
import { DatabaseVisual } from "./database-visual";

const products = [
  {
    Icon: DatabaseIcon,
    title: "Database",
    subtitle: (
      <>
        Instant ready-to-use{" "}
        <strong className="text-foreground">Restful APIs</strong>.
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
    twice: true,
    Visual: DatabaseVisual,
  },
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
    Icon: BoxIcon,
    title: "Data APIs",
    subtitle: (
      <>
        every project is <strong>a full postgres database</strong>, the
        world&apos;s most trusted relational database.
      </>
    ),

    Visual: DataAPIsVisual,
  },
  {
    Icon: LockIcon,
    title: "Vector",
    subtitle: (
      <>
        every project is <strong>a full postgres database</strong>, the
        world&apos;s most trusted relational database.
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
        every project is <strong>a full postgres database</strong>, the
        world&apos;s most trusted relational database.
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
    <section className="xl:max-w-7xl max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-18 lg:py-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-4">
        {/* card item */}
        {products.map((product, index) => (
          <Link
            key={index}
            className={cn(
              "sm:h-[400px] col-span-6 xl:col-span-3 group",
              product.twice && "xl:col-span-6 md:col-span-12"
            )}
            href="#"
          >
            {/* Probably need refactor since its duplicate the card to handle "twice" card */}
            {!product.twice && (
              <CardWithHover className="h-full relative">
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
                  <div className="hidden sm:block">{product.highlight}</div>
                </CardContent>
                {/* <StorageVisual /> */}
                {/* not twice visual */}
                {!product.twice && (
                  <product.Visual className="hidden sm:block" />
                )}
              </CardWithHover>
            )}

            {/* For Product twice in width */}
            {product.twice && (
              <CardWithHover className="h-full relative flex flex-col xl:flex-row">
                <CardContent className="h-full flex flex-col justify-between">
                  <div className="space-y-4">
                    <h2
                      className={cn(
                        "flex gap-2 items-center sm:justify-center",
                        product.twice ? "sm:justify-start" : "sm:justify-center"
                      )}
                    >
                      <product.Icon size={20} /> {product.title}
                    </h2>
                    <p
                      className={cn(
                        "text-sm font-medium text-muted-foreground",
                        product.twice ? "sm:text-left" : "sm:text-center"
                      )}
                    >
                      {product.subtitle}
                    </p>
                  </div>
                  <div className="text-sm hidden sm:block">
                    {product.highlight}
                  </div>
                </CardContent>

                {/* not twice visual */}
                {!product.twice && (
                  <product.Visual className="hidden sm:block" />
                )}

                {/* twice visual */}
                <product.Visual className="hidden sm:block" />
              </CardWithHover>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}
