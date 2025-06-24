import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

export function Logo(props: {
  textClass?: string;
  iconSizeClass?: string;
  iconFillClass?: string;
}) {
  const { textClass = "text-black" } = props;

  return (
    <Link
      href="/"
      className={clsx(
        "hover:cursor-pointer flex items-center gap-3",
        textClass,
      )}
    >
      <Image
        src="/the-curve-favicon.svg"
        alt="The Curve Logo"
        width={32}
        height={32}
      />
      <div className="sm:text-[20px] text-[15px] font-bold font-tc-display">
        The Curve
      </div>
    </Link>
  );
}
