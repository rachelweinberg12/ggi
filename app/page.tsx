import { Col, Row } from "@/components/blocks";
import Image from "next/image";
import { WritingSpotlight } from "./writing-spotlight";

export default function Home() {
  return (
    <main>
      <Col className="section-padding justify-center items-center h-dvh">
        <h1 className="text-center relative bottom-1/5">
          Website coming soon!
        </h1>
      </Col>
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
      <Row className="wide-section-padding absolute top-42 right-0">
        <span className="w-xs xs:w-md sm:w-lg md:w-xl lg:w-2xl xl:w-3xl xl:text-7xl display text-right">
          Bringing AI's toughest questions into focus
        </span>
      </Row>
    </div>
  );
}
