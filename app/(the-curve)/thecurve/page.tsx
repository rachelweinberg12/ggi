import Image from "next/image";
import { About2024 } from "./about-2024";
import { FAQ } from "./faq";
import TypeformPopupButton from "@/components/typeform-popup";
import { TC_APPLICATION, TYPEFORM_IDS } from "@/utils/constants";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { About } from "./about";
import { Speakers } from "./speakers";

export default function Home() {
  return (
    <main>
      <Hero />
      <div id="about" className="relative bottom-10" />
      <About />
      <div className="w-full">
        <Divider num="1" />
      </div>
      <Speakers />
      <div className="w-full">
        <Divider num="2" />
      </div>
      <div id="faq" className="relative bottom-10" />
      <FAQ />
    </main>
  );
}

function Divider(props: { num: string }) {
  const src = `/the-curve/display/Divider${props.num}.png`;
  return (
    <div className="w-full">
      <Image
        src={src}
        alt="Divider"
        width={3072}
        height={1152}
        className="object-cover w-full"
      />
    </div>
  );
}

function Hero() {
  return (
    <div className="w-full h-dvh y-section-padding pt-24 md:pt-28 outline-b outline-rose outline-2 outline-offset-2">
      <Image
        className="object-cover h-dvh absolute top-0 w-full left-0 sm:aspect-16/9 aspect-2/3"
        src="/the-curve/display/CurveClouds2.png"
        alt="Hero image"
        width={2000}
        height={100}
        priority
      />
      <div className="relative nav-section-padding h-full">
        <div className="relative h-full z-10 sm:top-1/12 top-16">
          <h1 className="tracking-normal text-indigo text-5xl sm:text-6xl lg:text-7xl text-center sm:text-left">
            The Curve
          </h1>
          <h5 className="mb-1 text-center sm:text-left text-indigo-400 text-xl sm:text-2xl lg:text-3xl font-light">
            October 3-5, 2025 | Berkeley, CA
          </h5>
          <h2 className="sm:w-7/12 w-full text-center sm:text-left text-indigo font-bold text-2xl sm:text-3xl lg:text-4xl">
            A conference where thinkers, builders, and leaders grapple with AI's
            biggest questions.
          </h2>
        </div>
        <div className="absolute bottom-16 sm:right-32 flex w-full justify-center sm:justify-end">
          <a
            href={TC_APPLICATION}
            className="outline-2 outline-rose outline-offset-2 bg-white px-10 py-4 text-indigo hover:bg-rose hover:text-white flex items-center gap-x-2 w-fit font-tc-display rounded font-bold text-lg md:text-xl"
          >
            Apply now
          </a>
        </div>
      </div>
    </div>
  );
}
