import Image from "next/image";

export function Divider(props: { num: string }) {
  const src = `/the-curve/display/Divider${props.num}.png`;
  return (
    <div className="w-full my-10 sm:my-0">
      <Image
        src={src}
        alt="Divider"
        width={3072}
        height={1152}
        className="object-contain w-full"
      />
    </div>
  );
}
