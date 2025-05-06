import { Col } from "@/components/blocks";

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
    <div
      className="section-padding border-y border-black theme-teal"
      id="the-curve"
    >
      <div className="grid lg:grid-cols-2 x-gap items-start">
        <div className="text-width-pos">
          <h1>The Curve</h1>
          <h5 className="mt-1">October 3-5, 2025 | SF & Berkeley</h5>
          <h2 className="mt-5">
            A conference for thinkers, builders, and leaders to tackle the AI
            big picture.
          </h2>
        </div>
        <Col className="mt-8 lg:mt-0 gap-2 text-width-pos">
          <p>
            <b>Purpose:</b> The Curve creates a space for the people creating
            and steering AI to share knowledge, explore disagreements, and
            coordinate on strategy. No single cohort or discipline has all that
            it takes to make the best of transformative AI. We aim to help them
            work together.
          </p>
          <p>
            <b>Attendees:</b> We bring in participants from frontier AI labs,
            startups, think tanks, government, academia, civil society, and
            media. This event is invite-only. Sign up here to be notified when
            our application opens in June.
          </p>
          <p>
            <b>Topics:</b> Our content will get at questions like — How can we
            unlock the benefits of AI for scientific discovery, institutional
            function, and global prosperity? How might AI concentrate or
            distribute power? What are the risks posed by current and future AI
            systems? How quickly will AI systems become more powerful? What
            impact will they have on the job market and economic growth? What
            implications does AI have for national security and global balance
            of power?
          </p>
          <Col className="y-gap x-gap mt-8">
            {testimonials.map((t) => (
              <Testimonial quote={t.quote} name={t.name} key={t.name} />
            ))}
          </Col>
        </Col>
      </div>
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
