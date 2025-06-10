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
    name: "Bronze",
    cost: "$8k",
    emoji: "🥉",
    color: "bg-sand",
    numAvailable: "unlimited",
    benefits: ["1 VIP ticket", "Small logo", "Available to individuals"],
  },

  {
    name: "Silver",
    cost: "$20k",
    color: "bg-bley",
    emoji: "🥈",
    numAvailable: "4 available",
    benefits: [
      "1 session slot",
      "2 general admission tickets",
      "1 VIP ticket",
      "Office hours slot",
      "Group announcement on X",
      "Medium logo",
      "Acknowledgement at one special event",
    ],
  },
  {
    name: "Gold",
    cost: "$40k",
    color: "bg-orange",
    emoji: "🥇",
    numAvailable: "3 available",
    benefits: [
      "1 prime-time, secondary-stage session slot",
      "4 general admission tickets",
      "2 VIP tickets",
      "Office hours slot",
      "Group announcement on X",
      "Large logo",
      "Acknowledgement at opening and closing ceremonies",
    ],
  },
  {
    name: "Platinum",
    cost: "$80k",
    color: "bg-teal",
    numAvailable: "1 available",
    emoji: "🏆",
    benefits: [
      "1 prime-time, main-stage session slot",
      "8 general admission tickets",
      "4 VIP tickets",
      "Office hours slot",
      "Dedicated announcement on X",
      "Extra large logo",
      "Acknowledgement at opening and closing ceremonies",
    ],
  },
];
export default function SponsorshipPage() {
  return (
    <main>
      <div className="section-padding">
        <div className="text-width-pos">
          <h1>About sponsorship</h1>
          <p className="mt-6">
            The Curve brings together ~250 carefully selected thinkers,
            builders, and decision-makers for 2.5-days of high quality dialogue
            on the most contentious and consequential questions about AI.
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
              Policy researchers, advocates, and government officials - shaping
              AI regulation and strategy
            </li>
            <li>
              Startup founders and operators - building applications with and
              for AI
            </li>
            <li>
              Journalists and bloggers - shaping the narrative among AI insiders
              and the public
            </li>
            <li>Academics - studying AI and its impact on society</li>
            <li>Grantmakers and VCs - funding all this work</li>
          </ul>
          <p className="font-bold mt-3">
            If you're interested in pursuing sponsorship, get in touch with our
            lead organizer at{" "}
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
      <div className="section-padding theme-sand border-t border-black">
        <h2 className="text-center">Packages</h2>
        <p className="mt-3 text-center">
          The options laid out below are flexible. We can tailor packages to the
          specific needs of individual sponsors.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 y-gap x-gap mt-8 sm:mt-12">
          {SPONSORSHIP_TIERS.map((tier) => (
            <SponsorshipCard key={tier.name} sponsorshipTier={tier} />
          ))}
        </div>
      </div>
    </main>
  );
}

function SponsorshipCard(props: { sponsorshipTier: SponsorshipTier }) {
  const { name, cost, color, benefits, emoji, numAvailable } =
    props.sponsorshipTier;
  return (
    <div className="overflow-hidden border rounded border-black">
      <div className="p-4 flex flex-row items-center justify-between gap-3 border-b border-black">
        <div className="flex flex-row items-center gap-2">
          <h2>{emoji}</h2>
          <h2>{name}</h2>
        </div>
        <div className="flex flex-col items-end">
          <h4>{cost}</h4>
          <p className="info">{numAvailable}</p>
        </div>
      </div>
      <ul className="list-disc list-inside p-4 pb-6">
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
