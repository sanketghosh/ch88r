import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <main className="flex min-h-screen select-none items-center justify-center px-4">
      <div className="flex flex-col items-center">
        <div className="space-y-1 text-center">
          <p className="text-base font-semibold text-destructive md:text-xl lg:text-2xl">
            404
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Page not found
          </h1>
          <p className="text-sm leading-7 text-gray-600 md:text-base">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
        </div>
        <Link
          to="/"
          className={cn(
            buttonVariants({
              variant: "secondary",
            }),
            "mt-5 w-fit",
          )}
        >
          Go back home
        </Link>
      </div>
    </main>
  );
}
