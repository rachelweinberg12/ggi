import Link from "next/link";
import Image from "next/image";

export function Logo(props: { dark?: boolean }) {
  const { dark } = props;
  return (
    <Link href="/" className="hover:cursor-pointer">
      <Image
        src={dark ? "/BlackLogo.png" : "/WhiteLogo.png"}
        alt="Golden Gate Institute for AI"
        className="h-5 object-contain object-left"
        height={50}
        width={300}
      />
    </Link>
  );
}
