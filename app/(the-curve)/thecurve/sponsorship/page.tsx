import { Row } from "@/components/blocks";
import { CheckIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";

type SponsorshipTier = {
  name: string;
  cost: string;
  color: string;
  numAvailable: string;
  emoji: string;
  benefits: string[];
};
const SPONSORSHIP_TIERS: SponsorshipTier[] = [
  {
    name: "Platinum",
    cost: "$80k",
    color: "bg-teal",
    numAvailable: "1 available",
    emoji: "🏆",
    benefits: [
      "1 prime-time, main-stage session",
      "8 general admission tickets",
      "4 VIP tickets",
      "Office hours slot",
      "Dedicated announcement on X",
      "Extra large logo",
      "Acknowledgement at opening and closing ceremonies",
    ],
  },

  {
    name: "Gold",
    cost: "$40k",
    color: "bg-orange",
    emoji: "🥇",
    numAvailable: "3 available",
    benefits: [
      "1 prime-time, secondary-stage session",
      "4 general admission tickets",
      "2 VIP tickets",
      "Office hours slot",
      "Group announcement on X",
      "Large logo",
      "Acknowledgement at opening and closing ceremonies",
    ],
  },
  {
    name: "Silver",
    cost: "$20k",
    color: "bg-bley",
    emoji: "🥈",
    numAvailable: "4 available",
    benefits: [
      "1 session",
      "2 general admission tickets",
      "1 VIP ticket",
      "Office hours slot",
      "Group announcement on X",
      "Medium logo",
      "Acknowledgement at one special event",
    ],
  },
  {
    name: "Bronze",
    cost: "$8k",
    emoji: "🥉",
    color: "bg-sand",
    numAvailable: "unlimited",
    benefits: ["1 VIP ticket", "Small logo", "Available to individuals"],
  },
];
export default function SponsorshipPage() {
  return (
    <main>
      <div className="top-section-padding max-w-[1572px]">
        <h1 className="text-center mt-8">Packages</h1>
        <p className="mt-2 text-center">
          The options laid out below are flexible. We can tailor packages to the
          specific needs of individual sponsors.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 y-gap x-gap mt-8 sm:mt-12 max-w-[1572px] mx-auto">
          {SPONSORSHIP_TIERS.map((tier) => (
            <SponsorshipCard key={tier.name} sponsorshipTier={tier} />
          ))}
        </div>
      </div>
      <div className="section-padding">
        <div className="max-w-[1572px] grid grid-cols-1 lg:grid-cols-2 mx-auto">
          <h1 className="mb-4">About sponsorship</h1>
          <div>
            <p>
              The Curve brings together ~250 carefully selected thinkers,
              builders, and decision-makers for 2.5-days of high quality
              dialogue on the most contentious and consequential questions about
              AI.
            </p>
            <p className="mt-3">
              When you sponsor The Curve, you support our mission, and get the
              opportunity to engage with all sorts of exceptional people shaping
              the future of AI:
            </p>
            <ul className="list-disc list-inside mt-3 text-">
              <li>
                Researchers, engineers, and executives at AI labs - pushing the
                frontier forward
              </li>
              <li>
                Policy researchers, advocates, and government officials -
                shaping AI regulation and strategy
              </li>
              <li>
                Startup founders and operators - building applications with and
                for AI
              </li>
              <li>
                Journalists and bloggers - shaping the narrative among AI
                insiders and the public
              </li>
              <li>Academics - studying AI and its impact on society</li>
              <li>Grantmakers and VCs - funding all this work</li>
            </ul>
            <p className="font-bold mt-3">
              If you're interested in pursuing sponsorship, get in touch with
              the Golden Gate Institute's Director of Events at{" "}
              <a
                href="mailto:rachel@goldengateinsitute.org"
                className="text-link"
              >
                rachel@goldengateinsitute.org
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

function SponsorshipCard(props: { sponsorshipTier: SponsorshipTier }) {
  const { name, cost, benefits, emoji, numAvailable } = props.sponsorshipTier;
  return (
    <div className="overflow-hidden">
      <div className="flex flex-row items-center justify-between gap-3 px-6 pt-4 pb-2">
        <div className="flex flex-row items-center gap-2">
          <h3>{emoji}</h3>
          <h3>{name}</h3>
        </div>
        <div className="flex flex-col items-end">
          <h4>{cost}</h4>
          <p className="info">{numAvailable}</p>
        </div>
      </div>
      <div className="border-t-2 border-rose w-11/12 mx-auto pb-1" />
      <ul className="list-disc list-inside pb-6">
        {benefits.map((benefit) => (
          <Row className="gap-3 py-1" key={benefit}>
            <CheckIcon className="w-3 h-3 flex-none relative top-2" />
            {benefit}
          </Row>
        ))}
      </ul>
    </div>
  );
}
