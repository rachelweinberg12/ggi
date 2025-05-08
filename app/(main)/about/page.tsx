import { Row } from "@/components/blocks";
import Link from "next/link";
import { Team } from "./team";
import { OurWork } from "./our-work";
import { SUBSTACK_URL } from "@/utils/constants";
export default function About() {
  return (
    <div>
      <AboutHero />
      <OurWork />
      <Team />
    </div>
  );
}

function AboutHero() {
  return (
    <div className="top-section-padding pt-36 pb-24 theme-sand">
      <h1 className="text-center mb-16 max-w-3xl mx-auto">
        This is a thirteen-word quirky tagline that sort of explains our deal.
      </h1>
      <Row className="flex-col sm:flex-row items-center justify-center gap-4">
        <Link className="btn" href="#team">
          Meet the team
        </Link>
        <Link className="btn" href="#our-work">
          Learn about our work
        </Link>
        <Link
          className="btn"
          href={`${SUBSTACK_URL}/p/founding-essay`}
          target="_blank"
        >
          Read our founding essay
        </Link>
      </Row>
    </div>
  );
}

/* We help leaders meet the challenges of the AI transition by bridging
      disciplines, convening experts, and publishing accessible analysis of AI’s
      toughest questions. */
//   Like many think tanks, we have Connections and we run Events. Unlike other
//   think tanks, we publish much more accessible, fundamental stuff. And we
//   host more events. And we are bridge-y; we do interdisciplinary stuff, help
//   people who disagree understand each other. We're think tank adjacent.
//   There's two main things we do: help people understand each other.
//   Sometimes this looks like helping decisionmakers, policymakers, understand
//   what the experts think is going on with AI. Sometimes this is helping the
//   experts understand what the other experts think, and why they disagree.
//   Who are the experts? All sorts of people, that's what makes us special.
//   Labs, academics, founders, safety people, other think tank people.

//   "Progress is a policy choice"
//   "We’re a team of scientists investigating the future of AI"
//   "AI will be wild. We are the bridge."
