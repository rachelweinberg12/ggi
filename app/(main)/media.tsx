import Image from "next/image";
import { Col, Row } from "@/components/blocks";
import clsx from "clsx";
import { LinkButton } from "@/components/link-button";

type MediaAppearance = {
  title: string;
  subtitle: string;
  url: string;
  date: string;
  imageUrl: string;
};

const mediaAppearances: MediaAppearance[] = [
  {
    title: "Breaking points",
    subtitle:
      "Krystal and Saagar chat with Taren about Deepfakes, Meta's salaries for AI researchers, and whether the companies building AI take transformative AI seriously.",
    url: "https://open.spotify.com/episode/2owernPOG3QinDX2s4BLVz",
    date: "June 11, 2025",
    imageUrl: "/media-images/BreakingPoints.jpg",
  },
  {
    title: "HardFork",
    subtitle: "Kevin and Casey recount their experience at The Curve 2024.",
    url: "https://www.nytimes.com/2024/12/06/podcasts/is-intel-cooked-whats-your-p-dyson-sphere-hard-fork-gift-guide.html",
    date: "December 6, 2024",
    imageUrl: "/media-images/HardFork.jpeg",
  },
  {
    title: "Cognitive Revolution",
    subtitle:
      "Steve joings Dean Ball, Nathan Calvin, and Nathan Labenz for a debate on California's SB1047.",
    url: "https://www.cognitiverevolution.ai/emergency-pod-examining-sb-1047-californias-proposed-ai-legislation/",
    date: "May 4, 2024",
    imageUrl: "/media-images/CognitiveRevolution.jpg",
  },
];

export function MediaSpotlight() {
  return (
    <Col className="nav-section-padding pb-16">
      <h2>Media</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 x-gap y-gap">
        {mediaAppearances.map((appearance, i) => (
          <MediaPreview appearance={appearance} key={i} />
        ))}
      </div>
      <Row className="justify-end xs:hidden">
        <LinkButton href="/media" title="See all media" />
      </Row>
    </Col>
  );
}

function MediaPreview(props: { appearance: MediaAppearance }) {
  const { appearance } = props;

  return (
    <a
      className="flex sm:flex-col gap-x-1 sm:gap-x-2 overflow-hidden p-2 rounded border border-black h-full hover:bg-sand"
      href={appearance.url}
      target="_blank"
    >
      <Col className="gap-y-0 justify-between min-w-0 h-full">
        <div>
          <Row className="items-center w-full gap-x-2 mb-1">
            <div className="aspect-square size-6 sm:size-8">
              <Image
                src={appearance.imageUrl}
                alt={appearance.title}
                width={80}
                height={80}
                className="object-cover rounded aspect-square w-full h-full"
              />
            </div>
            <h3 className="mb-1 text-base sm:text-lg lg:text-xl">
              {appearance.title}
            </h3>
          </Row>
          <h5 className="mb-1 sm:mb-3 text-sm sm:text-base line-clamp-3">
            {appearance.subtitle}
          </h5>
        </div>
        <p className="info text-xs sm:text-sm">{appearance.date}</p>
      </Col>
    </a>
  );
}
