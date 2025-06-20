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
      <Speakers />
      <div id="2024" className="relative bottom-10" />
      <About2024 />
      <div id="faq" className="relative bottom-10" />
      <FAQ />
    </main>
  );
}

function Hero() {
  return (
    <div className="w-full h-dvh y-section-padding pt-24 md:pt-28 outline-b outline-rose outline-2 outline-offset-2">
      <Image
        className="object-cover h-dvh absolute top-0 left-0 sm:aspect-16/9 aspect-2/3"
        src="/the-curve/display/CurveClouds.png"
        alt="Hero image"
        width={2000}
        height={100}
        priority
      />
      <div className="relative nav-section-padding h-full">
        <div className="relative h-full z-10 sm:top-1/5 top-16">
          <h5 className="mb-1 text-center sm:text-left text-indigo-500 text-lg sm:text-2xl font-light">
            October 3-5, 2025 | SF & Berkeley
          </h5>
          <h2 className="sm:w-7/12 w-full text-center sm:text-left text-indigo font-bold text-3xl sm:text-4xl lg:text-5xl">
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
