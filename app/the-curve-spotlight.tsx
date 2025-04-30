import Image from "next/image";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { formatDate } from "@/utils/formatting";
import { Col, Row } from "@/components/blocks";
import clsx from "clsx";

const testimonials = [
  {
    quote: "It felt like an event where history was happening.",
    name: "Kevin Roose",
  },
  {
    quote:
      "So many conferences are thoughtlessly run or designed. This was such a remarkable exception.",
    name: "Misha Glouberman",
  },
  {
    quote:
      "Super high quality attendees. It did not feel like an awkward Thanksgiving, but a good faith meeting of the minds.",
    name: "Nathan Labenz",
  },
];

export function TheCurveSpotlight() {
  return (
    <div className="section-padding border-y border-black theme-teal">
      <h1>The Curve</h1>
      <h5 className="mt-2">October 3-5, 2025 | SF & Berkeley</h5>
      <h2 className="mt-2">
        A gathering for leading thinkers, builders, advocates, and
        decision-makers to make sense of the AI big picture.
      </h2>
      <Col className="mt-3 gap-2">
        <p>
          <b>Purpose:</b> No single group has all the answers or execution power
          to make the best of transformative AI. The Curve creates a space for
          the people creating and steering this technology to share knowledge,
          explore disagreements, and coordinate on strategy.
        </p>
        <p>
          <b>Attendees:</b> We bring in participants from frontier AI labs,
          startups, think tanks, government, academia, civil society, and media.
          This event is invite-only. Sign up here to be notified when our
          application opens in June.
        </p>
        <p>
          <b>Topics:</b> Our content will get at questions like — How can we
          unlock the benefits of AI for scientific discovery, institutional
          function, and global prosperity? How might AI concentrate or
          distribute power? What are the risks posed by current and future AI
          systems? How quickly will AI systems become more powerful? What impact
          will they have on the job market and economic growth? What
          implications does AI have for national security and global balance of
          power?
        </p>
      </Col>
      <Col className="y-gap x-gap sm:flex-row mt-5">
        {testimonials.map((t) => (
          <Testimonial quote={t.quote} name={t.name} key={t.name} />
        ))}
      </Col>
    </div>
  );
}

function Testimonial(props: { quote: string; name: string }) {
  const { quote, name } = props;
  return (
    <Col className="gap-1">
      <p className="pull-quote">{quote}</p>
      <p className="info">— {name}</p>
    </Col>
  );
}
