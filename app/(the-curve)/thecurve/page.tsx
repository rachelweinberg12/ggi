import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  );
}

function Hero() {
  return (
    <div className="w-full theme-orange section-padding">
      <div className="relative h-[400px] sm:h-[40dvw] sm:max-h-[400px] mx-auto max-w-7xl">
        <div className="sm:px-12">
          <h1 className="mt-5">The Curve</h1>
          <h5 className="mt-1">October 3-5, 2025 | SF & Berkeley</h5>
          <h2 className="lg:my-12 my-6 w-2/3">
            A conference for thinkers, builders, and leaders to tackle the AI
            big picture.
          </h2>
        </div>
        <div className="hidden sm:flex absolute xl:bottom-12 bottom-0 left-0 w-full h-full justify-center items-center">
          <Image
            className="object-contain text-white"
            src="/WideCurve.svg"
            alt="Curve"
            width={2000}
            height={100}
            priority
          />
        </div>
      </div>
    </div>
  );
}
