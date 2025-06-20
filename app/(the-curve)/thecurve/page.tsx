import Image from "next/image";
import { About2024 } from "./about-2024";
import { FAQ } from "./faq";
import TypeformPopupButton from "@/components/typeform-popup";
import { TC_APPLICATION, TYPEFORM_IDS } from "@/utils/constants";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { About } from "./about";

export default function Home() {
  return (
    <main>
      <Hero />
      <div id="about" className="relative bottom-10" />
      <About />
      <div id="2024" className="relative bottom-10" />
      <About2024 />
      <div id="faq" className="relative bottom-10" />
      <FAQ />
    </main>
  );
}

function Hero() {
  return (
    <div className="w-full theme-orange y-section-padding pt-24 md:pt-28">
      <div className="relative sm:h-[50dvw] sm:max-h-[400px] nav-section-padding">
        <div className="relative h-full z-10">
          <h1 className="mt-5 text-center sm:text-left">The Curve</h1>
          <h5 className="mt-1 text-center sm:text-left">
            October 3-5, 2025 | SF & Berkeley
          </h5>
          <h2 className="my-12 xl:my-12 sm:my-8 sm:w-2/3 w-full text-center sm:text-left">
            A conference where thinkers, builders, and leaders grapple with AI's
            biggest questions.
          </h2>
          <div className="flex justify-center bottom-0 left-0 w-full sm:block">
            <a
              href={TC_APPLICATION}
              className="border border-white bg-white text-orange rounded px-6 py-2 hover:bg-orange hover:text-white flex items-center gap-x-2 w-fit font-tc-display"
            >
              Apply now
              <ArrowUpRightIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
        <div className="hidden sm:flex absolute bottom-0 left-0 w-full  justify-center items-center nav-section-padding">
          <Image
            className="object-contain text-white max-w-7xl w-full"
            src="/WideCurve.svg"
            alt="Curve"
            width={2000}
            height={1000}
            priority
          />
        </div>
      </div>
    </div>
  );
}
