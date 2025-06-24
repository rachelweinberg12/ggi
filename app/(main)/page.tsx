import { Col, Row } from "@/components/blocks";
import Image from "next/image";
import { WritingSpotlight } from "./writing-spotlight";
import { EventsSpotlight } from "./events-spotlight";
import { TheCurveSpotlight } from "./the-curve-spotlight";
import { BriefAbout } from "./brief-about";
import { MediaSpotlight } from "./media";
import { LinkButton } from "@/components/link-button";
import { SUBSTACK_URL } from "@/utils/constants";

export default function Home() {
  return (
    <main>
      <Hero />
      <div id="the-curve" className="relative bottom-10" />
      <TheCurveSpotlight />
      <div id="writing" className="relative bottom-10" />
      <WritingSpotlight />
      <div id="events" className="relative bottom-24" />
      <EventsSpotlight />
      <div id="media" className="relative bottom-24" />
      <MediaSpotlight />
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
        alt="Hero image"
        width={2000}
        height={100}
        priority
      />
      <div className="h-full nav-section-padding">
        <Row className="relative h-full">
          <div className="absolute top-1/3 right-0 w-xs xs:w-md sm:w-lg md:w-xl lg:w-2xl xl:w-3xl flex flex-col items-end gap-y-3">
            <h1 className="xl:text-7xl display text-right w-full">
              Bringing AI's toughest questions into focus
            </h1>
            <Col className="mt-3 sm:flex-row items-end gap-y-1 gap-x-6">
              <LinkButton
                href={SUBSTACK_URL}
                title="Subscribe to our Substack"
                newTab
              />
              <LinkButton href="/about" title="About us" />
            </Col>
          </div>
        </Row>
      </div>
    </div>
  );
}
