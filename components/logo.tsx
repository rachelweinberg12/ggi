import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="sm:text-xl tracking font-bold font-serif tracking-[-0.01em] text-lg hover:cursor-pointer"
    >
      Golden Gate Institute for AI
    </Link>
  );
}
