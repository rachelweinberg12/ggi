import Image from "next/image";

export function ProfilePicture(props: { name: string; imageUrl: string }) {
  return (
    <div className="w-30 h-36 xs:w-40 xs:h-48 lg:w-50 lg:h-60 rounded overflow-hidden">
      <Image
        src={props.imageUrl}
        alt={props.name}
        width={300}
        height={400}
        className="aspect-[5/6] object-cover"
      />
    </div>
  );
}
