import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

export function Logo(props: { dark?: boolean; className?: string }) {
  const { dark, className } = props;
  return (
    <Link href="/" className="hover:cursor-pointer">
      <Image
        src={dark ? "/BlackLogo.png" : "/WhiteLogo.png"}
        alt="Golden Gate Institute for AI"
        className={clsx("h-5 object-contain object-left", className)}
        height={50}
        width={300}
      />
    </Link>
  );
}
