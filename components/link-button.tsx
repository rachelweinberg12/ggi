import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export function LinkButton(props: { href: string; title: string }) {
  const { href, title } = props;
  return (
    <Link href={href} className="flex items-center gap-1 group">
      <span className="text-nowrap group-hover:underline">{title}</span>{" "}
      <ArrowLongRightIcon className="w-4 h-4 relative top-0.5" />
    </Link>
  );
}
