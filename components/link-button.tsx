import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import Link from "next/link";

export function LinkButton(props: {
  href: string;
  title: string;
  className?: string;
}) {
  const { href, title, className } = props;
  return (
    <Link
      href={href}
      className={clsx("flex items-center gap-1 group", className)}
    >
      <span className="text-nowrap group-hover:underline md:text-lg">
        {title}
      </span>
      <ArrowUpRightIcon className="w-4 h-4 relative top-0.5" />
    </Link>
  );
}
