import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import Link from "next/link";

export function LinkButton(props: {
  href: string;
  title: string;
  className?: string;
  newTab?: boolean;
}) {
  const { href, title, className, newTab } = props;
  return (
    <Link
      href={href}
      className={clsx("flex items-center gap-1 group", className)}
      target={newTab ? "_blank" : undefined}
    >
      <span className="text-nowrap group-hover:underline md:text-lg">
        {title}
      </span>
      <ArrowUpRightIcon className="w-4 h-4" />
    </Link>
  );
}
