import clsx from "clsx";
import Image from "next/image";

export function ProfilePicture(props: {
  name: string;
  imageUrl: string;
  className?: string;
}) {
  const { name, imageUrl, className } = props;
  return (
    <div
      className={clsx(
        "w-30 h-36 xs:w-40 xs:h-48 lg:w-50 lg:h-60 rounded overflow-hidden",
        className,
      )}
    >
      <Image
        src={imageUrl}
        alt={name}
        width={300}
        height={400}
        className="aspect-[5/6] object-cover"
      />
    </div>
  );
}
