import Link from "next/link";
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
      <div className="sm:text-[20px] text-[15px] font-bold display">
        <span>THE CURVE</span>
      </div>
    </Link>
  );
}
