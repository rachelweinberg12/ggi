import Image from "next/image";
import { FAQ } from "./faq";
import { TC_APPLICATION } from "@/utils/constants";
import { About } from "./about";
import { Speakers } from "./speakers";
import { Col } from "@/components/blocks";
import { Divider } from "./divider";
import Script from "next/script";

export default function Home() {
  return (
    <main>
      <Script
        id="event-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            name: "The Curve",
            description:
              "The premier big picture AI conference where thinkers, builders, and leaders grapple with AI's biggest questions.",
            startDate: "2025-10-03T09:00:00-07:00",
            endDate: "2025-10-05T18:00:00-07:00",
            location: {
              "@type": "Place",
              name: "Berkeley, CA",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Berkeley",
                addressRegion: "CA",
                addressCountry: "US",
              },
            },
            organizer: {
              "@type": "Organization",
              name: "Golden Gate Institute for AI",
              url: "https://goldengateinstitute.org",
            },
            performer: {
              "@type": "Organization",
              name: "Golden Gate Institute for AI",
            },
            eventStatus: "https://schema.org/EventScheduled",
            eventAttendanceMode:
              "https://schema.org/OfflineEventAttendanceMode",
            url: "https://thecurve.goldengateinstitute.org",
            image:
              "https://thecurve.goldengateinstitute.org/the-curve/display/CurveClouds2.png",
            keywords:
              "AI conference, artificial intelligence, machine learning, AI ethics, AI policy",
          }),
        }}
      />
      <Hero />
      <div id="about" className="relative bottom-12" />
      <About />
      <Divider num="1" />
      <div id="speakers" className="relative bottom-24" />
      <Speakers />
      <Divider num="2" />
      <div id="faq" className="relative bottom-24" />
      <FAQ />
    </main>
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
            <Col className="items-center gap-3">
              <a
                href={TC_APPLICATION}
                className="outline-2 outline-rose outline-offset-2 bg-white px-12 py-4 text-indigo hover:bg-rose hover:text-white flex items-center gap-x-2 font-tc-display rounded font-bold text-lg md:text-xl justify-center"
              >
                Apply to join
              </a>
              <div className="px-4 py-0.5 rounded-full bg-rose">
                <p className="text-white">Deadline September 5th</p>
              </div>
            </Col>
          </div>
        </div>
      </div>
      <div className="w-full p-3 lg:p-5 bg-rose outline-b outline-rose outline-2 outline-offset-2 text-rose">
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
