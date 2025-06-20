import { Col, Row } from "@/components/blocks";
import Image from "next/image";
import clsx from "clsx";

export function About() {
  return (
    <Col className="section-padding theme-classic gap-y-16">
      <AboutSection
        title="Our purpose"
        imageUrl="/the-curve/display/Elephant.png"
      >
        <p className="mb-2">
          How can we achieve the best outcomes from advanced AI?
        </p>
        <p className="mb-2">
          This touches on every aspect of technology and society. Which
          applications best contribute to human agency and flourishing, and how
          can we foster them? Which applications will be most disruptive, and
          what can we do about that? How might AI concentrate or distribute
          power? How rapidly will AI be adopted in different sectors, and what
          does that mean for unemployment, growth, and national security? When,
          if ever, should we expect superintelligence?
        </p>
        <p className="mb-2">
          No single field has all the answers. No single group is positioned to
          steer toward the best outcomes. We are all proverbial blind men,
          attending to our part of the elephant. The Curve is a 2.5-day tour of
          this enormous creature – an opportunity to share knowledge, explore
          disagreements, build bridges, and make progress towards solutions.
        </p>
      </AboutSection>
      <AboutSection
        textRight={true}
        title="The people"
        imageUrl="/the-curve/display/PeopleOutside.png"
      >
        <p className="mb-2">
          The participants, selected by invitation only, are curated to
          represent a mixture of views, areas of expertise, and spheres of
          influence. Attendees will include:
        </p>
        <ul className="mb-2">
          <li>Researchers, engineers, and executives at the leading AI labs</li>
          <li>Policy researchers, advocates, and government officials</li>
          <li>Startup founders and operators</li>
          <li>Journalists and bloggers</li>
          <li>Academics and independent researchers</li>
          <li>Grantmakers and VCs</li>
        </ul>
        <p className="mb-2">
          What will they all have in common? They expect AI to be a
          transformative technology, are working to shape its trajectory, are
          exceptional at what they do, and engage constructively.
        </p>
      </AboutSection>
      <AboutSection
        title="The experience"
        imageUrl="/the-curve/display/FirePit.png"
      >
        <p className="mb-2">
          We design the event to prioritize small group and one-on-one
          conversations. You're encouraged to skip sessions during the day in
          favor of talking with your fellow attendees – supported by a
          thoughtfully designed roster to help you find people to connect with.
          The venue is set up around conversation nooks, and we’ll keep it open
          late into the night to accommodate those long, winding, fruitful
          discussions.
        </p>
        <p className="mb-2">
          Sessions skew toward interactive workshops, debates, and fireside
          chats, which dive into topics you won’t find discussed elsewhere, and
          most talks segue into an office hour for deeper engagement with the
          speaker. We will also have a dedicated track of talks under Chatham
          House rules, giving speakers the opportunity to go beyond their public
          positions.
        </p>
      </AboutSection>
    </Col>
  );
}

export function AboutSection(props: {
  title: string;
  imageUrl: string;
  textRight?: boolean;
  children?: React.ReactNode;
}) {
  const { textRight, title, imageUrl, children } = props;

  return (
    <Col
      className={clsx(
        "lg:flex-row gap-x-16 max-w-5xl mx-auto items-center",
        textRight ? "lg:flex-row-reverse" : "",
      )}
    >
      <div className="lg:w-1/2">
        <h2 className="mb-4">{title}</h2>
        {children}
      </div>
      <div className="lg:w-1/2">
        <Image
          src={imageUrl}
          alt={title}
          width={800}
          height={600}
          className="w-full h-full object-cover rounded aspect-4/3 lg:aspect-square xl:aspect-4/3 max-w-lg"
        />
      </div>
    </Col>
  );
}
