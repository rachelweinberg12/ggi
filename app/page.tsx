import { Row } from "@/components/blocks";
import Image from "next/image";
import { WritingSpotlight } from "./writing-spotlight";
import { EventsSpotlight } from "./events-spotlight";
import { TheCurveSpotlight } from "./the-curve-spotlight";
import { BriefAbout } from "./brief-about";

export default function Home() {
  return (
    <main>
      <Hero />
      <WritingSpotlight />
      <TheCurveSpotlight />
      <EventsSpotlight />
      <BriefAbout />
    </main>
  );
}

function Hero() {
  return (
    <div className="relative w-full theme-teal h-dvh">
      <Image
        className="object-cover h-dvh absolute top-0 left-0 sm:aspect-16/9 aspect-2/3"
        src="/GGB.png"
        alt="Next.js logo"
        width={2000}
        height={100}
        priority
      />
      <div className="h-full narrow-section-padding">
        <Row className="relative h-full">
          <span className="absolute top-1/3 right-0 w-xs xs:w-md sm:w-lg md:w-xl lg:w-2xl xl:w-3xl xl:text-7xl display text-right">
            Bringing AI's toughest questions into focus
          </span>
        </Row>
      </div>
    </div>
  );
}
