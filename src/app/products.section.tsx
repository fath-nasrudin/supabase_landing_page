import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckIcon, LockIcon } from "lucide-react";
import Link from "next/link";

export function ProductSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-18 lg:py-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-4">
        {/* card item */}
        {Array.from({ length: 6 }).map((_, index) => (
          <Link
            key={index}
            className="sm:h-[400px] col-span-6 xl:col-span-3 group"
            href="#"
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle>
                  <h2 className="flex gap-2 items-center">
                    <LockIcon size={20} /> Authentication
                  </h2>
                </CardTitle>
                <CardDescription className="text-sm"></CardDescription>
              </CardHeader>
              <CardContent className="text-sm h-full flex flex-col justify-between">
                <p className="text-sm">
                  every project is <strong>a full postgres database</strong>,
                  the world's most trusted relational database.
                </p>
                <ul className="font-semibold">
                  <li className="flex gap-1 items-center">
                    <CheckIcon className="inline h-4 w-4" /> 100% portable
                  </li>
                  <li className="flex gap-1 items-center">
                    <CheckIcon className="inline h-4 w-4" /> Built in Auth with
                    RLS
                  </li>
                  <li className="flex gap-1 items-center">
                    <CheckIcon className="inline h-4 w-4" /> Easy to extend
                  </li>
                </ul>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
