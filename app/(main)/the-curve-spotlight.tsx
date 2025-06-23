import { Col, Row } from "@/components/blocks";
import { LinkButton } from "@/components/link-button";
import { ProfilePicture } from "@/components/profile-picture";
import TypeformPopupButton from "@/components/typeform-popup";
import { TC_APPLICATION, TYPEFORM_IDS } from "@/utils/constants";
const testimonials = [
  {
    quote: "It felt like an event where history was happening.",
    name: "Kevin Roose",
  },
  {
    quote:
      "So many conferences are thoughtlessly designed or run. This was such a remarkable exception.",
    name: "Misha Glouberman",
  },
  {
    quote:
      "Super high quality attendees. It did not feel like an awkward Thanksgiving, but a good faith meeting of the minds.",
    name: "Nathan Labenz",
  },
];

const featuredSpeakers = [
  {
    name: "Jack Clark",
    affiliation: "Head of Policy, Anthropic",
    imageUrl: "/the-curve/speakers/JackClark.jpeg",
  },
  {
    name: "Jason Kwon",
    affiliation: "CSO, OpenAI",
    imageUrl: "/the-curve/speakers/JasonKwon.jpg",
  },
  {
    name: "Alondra Nelson",
    affiliation: "Professor, Institute for Advanced Study",
    imageUrl: "/the-curve/speakers/AlondraNelson.jpg",
  },
  {
    name: "Dylan Patel",
    affiliation: "CEO, SemiAnalysis",
    imageUrl: "/the-curve/speakers/DylanPatel.png",
  },
];

export function TheCurveSpotlight() {
  return (
    <div
      className="section-padding border-t border-black theme-orange"
      id="the-curve"
    >
      <div className="grid lg:grid-cols-8 x-gap items-start">
        <div className="text-width-pos lg:col-span-3">
          <h1>The Curve</h1>
          <h5 className="mt-1">October 3-5, 2025 | Berkeley, CA</h5>
          <h2 className="mt-6">
            A conference for thinkers, builders, and leaders to tackle the AI
            big picture.
          </h2>
          <Row className="mt-6 hidden xs:flex gap-x-4">
            <LinkButton
              href="https://thecurve.goldengateinstitute.org"
              title="Learn more"
              className="px-6 py-2 bg-white text-orange hover:bg-orange hover:text-white rounded border"
              newTab
            />
            <LinkButton
              href={TC_APPLICATION}
              title="Apply to join"
              className="px-6 py-2 bg-orange text-white hover:bg-white hover:text-orange rounded border"
              newTab
            />
          </Row>
        </div>
        <Col className="mt-8 text-width-pos lg:mt-0 gap-2 lg:col-span-5 lg:pl-6">
          <p>
            <b>Purpose:</b> The Curve creates a space for the people building
            and steering AI to share knowledge, explore disagreements, build
            bridges, and make progress towards solutions. No single group or
            discipline has all that it takes to ensure the best outcomes from
            transformative AI. We aim to help them work together.
          </p>
          <p>
            <b>Attendees:</b> We bring in participants from frontier AI labs,
            startups, think tanks, government, academia, civil society, and
            media. This event is invite-only. Sign up here to be notified when
            our application opens in June.
          </p>
          <p>
            <b>Topics:</b> Sessions will focus on questions like — How can we
            unlock the benefits of AI for scientific discovery? How might AI
            concentrate or distribute power? Does AI pose catastrophic or
            existential risks? How quickly will AI development progress? What
            impact will AI have on the job market and economic growth? What
            implications does AI have for national security and global balance
            of power? And of course: What should we do about it?
          </p>
          <p>
            <b>Speakers include:</b>
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-6 mt-4 w-full">
            {featuredSpeakers.map((speaker) => (
              <Col className="items-center gap-0" key={speaker.name}>
                <ProfilePicture
                  name={speaker.name}
                  imageUrl={speaker.imageUrl}
                  className="w-30! h-36! rounded overflow-hidden"
                />
                <h4 className="mt-2 text-sm sm:text-base text-center">
                  {speaker.name}
                </h4>
                <p className="font-light text-center leading-tight mt-1 text-xs sm:text-sm">
                  {speaker.affiliation}
                </p>
              </Col>
            ))}
          </div>
          <Col className="y-gap x-gap mt-8">
            {testimonials.map((t) => (
              <Testimonial quote={t.quote} name={t.name} key={t.name} />
            ))}
          </Col>
          <Col className="mt-6 xs:hidden items-center">
            <LinkButton
              href="https://thecurve.goldengateinstitute.org"
              title="Hear when applications open"
            />
            <LinkButton
              href="https://thecurve.goldengateinstitute.org"
              title="Learn more"
              className="px-6 py-2 bg-white text-orange rounded border"
            />
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
