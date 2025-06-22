import Image from "next/image";
import { FAQ } from "./faq";
import { TC_APPLICATION, TYPEFORM_IDS } from "@/utils/constants";
import { About } from "./about";
import { Speakers } from "./speakers";
import { Col } from "@/components/blocks";
import { Logo } from "@/components/logo";

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
        className="object-contain w-full"
      />
    </div>
  );
}

function Hero() {
  return (
    <div>
      <div className="w-full h-dvh y-section-padding pt-24 md:pt-28">
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
              A conference where thinkers, builders, and leaders grapple with
              AI's biggest questions.
            </h2>
          </div>
          <div className="absolute bottom-12 sm:right-28 flex w-full justify-center sm:justify-end z-10">
            <Col className="items-center gap-2">
              <a
                href={TC_APPLICATION}
                className="outline-2 outline-rose outline-offset-2 bg-white px-10 py-4 text-indigo hover:bg-rose hover:text-white flex items-center gap-x-2 w-fit font-tc-display rounded font-bold text-lg md:text-xl"
              >
                Apply to join
              </a>
            </Col>
          </div>
        </div>
      </div>
      <div className="w-full p-3 lg:p-5 mt-1 bg-rose outline-b outline-rose outline-2 outline-offset-2 text-rose">
        {/* <h3 className="text-center">
          Hosted by the{" "}
          <a
            href="goldengateinstitute.org"
            target="_blank"
            className="font-tc-display hover:underline text-indigo"
          >
            Golden Gate Institute for AI
          </a>{" "}
          and{" "}
          <a
            href="manifund.org"
            target="_blank"
            className="font-tc-display hover:underline text-indigo"
          >
            Manifund
          </a>
          .
        </h3> */}
        <div className="flex flex-col sm:flex-row items-center gap-x-8 gap-y-3 justify-around sm:max-w-3xl lg:max-w-5xl mx-auto">
          <h5 className="text-white text-base sm:text-xl lg:text-2xl">
            Hosted by:
          </h5>
          <a
            href="https://goldengateinstitute.org"
            target="_blank"
            className="h-5 lg:h-8 w-auto"
          >
            <Image
              src="/GGILogoWhiteHorizontal.png"
              alt="Golden Gate Institute logo"
              className="object-contain h-full w-auto"
              width={200}
              height={40}
            />
          </a>

          <a
            href="https://manifund.org"
            target="_blank"
            className="h-5 lg:h-8 w-auto"
          >
            <Image
              src="/ManifundLogo.png"
              alt="Manifund logo"
              className="object-contain h-full w-auto"
              width={200}
              height={40}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
