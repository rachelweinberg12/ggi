import Image from "next/image";
import { About2024 } from "./about-2024";
import { FAQ } from "./faq";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <About2024 />
      <FAQ />
    </main>
  );
}

function Hero() {
  return (
    <div className="w-full theme-orange section-padding">
      <div className="relative h-[400px] sm:h-[40dvw] sm:max-h-[400px] mx-auto max-w-7xl">
        <div className="sm:px-12">
          <h1 className="mt-5">The Curve</h1>
          <h5 className="mt-1">October 3-5, 2025 | SF & Berkeley</h5>
          <h2 className="lg:my-12 my-6 w-2/3">
            A conference where thinkers, builders, and leaders grapple with AI's
            biggest questions.
          </h2>
        </div>
        <div className="hidden sm:flex absolute xl:bottom-12 bottom-0 left-0 w-full h-full justify-center items-center">
          <Image
            className="object-contain text-white"
            src="/WideCurve.svg"
            alt="Curve"
            width={2000}
            height={100}
            priority
          />
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="section-padding theme-classic border-t border-black">
      <div className="max-w-7xl mx-auto mb-8">
        <h2 className="mb-4">Our purpose</h2>
        <p className="mb-2">
          We aim to foster productive dialogue among a diverse set of experts
          about the most consequential questions about AI's future.
        </p>
        <p className="mb-2">
          Topics we'll cover include: How can we unlock the benefits of AI for
          scientific discovery? How might AI concentrate or distribute power?
          Does AI pose catastrophic or existential risks? How quickly will AI
          development progress? What impact will AI have on the job market and
          economic growth? What implications does AI have for national security
          and global balance of power? And of course: What should we do about
          it?
        </p>
        <p className="mb-2">
          No single group has all the answers or execution power to make the
          best of transformative AI. The Curve creates a space for the people
          creating and steering this technology to share knowledge, explore
          disagreements, and coordinate on strategy.
        </p>
      </div>
      <div className="max-w-7xl mx-auto mb-8">
        <h2 className="mb-4">Who will be there</h2>
        <p className="mb-2">The Curve is invite-only.</p>
        <p className="mb-2">
          All admitted guests are selected for being exceptional at what they
          do, bought into the idea that AI will have an enormous impact, are
          actively working to shape its trajectory, and contribute to discourse
          in good-faith.
        </p>
        <p className="mb-2">
          We curate the group carefully to represent a mixture of views (on
          things like timing, risks, benefits, governance approaches, and
          priorities), and a mixture of disciplines (including machine learning,
          politics, and economics). Participants will include technical and
          governance thinkers from frontier AI labs, policy advocates,
          government staffers, safety researchers, startup founders, VCs,
          academics, public intellectuals, and journalists.
        </p>
      </div>
      <div className="max-w-7xl mx-auto">
        <h2 className="mb-4">The experience</h2>
        <p className="mb-2">
          We prioritize small group and one-on-one conversations, and design our
          event accordingly. You’re encouraged to skip sessions during the day
          in favor of talking with your fellow attendees, and the venue will
          stay open late into the night to accommodate those long, winding,
          fruitful discussions. The venue is set up around conversation nooks,
          there will be sessions that help you meet and get to know new people,
          and there will be infrastructure that makes it easy for you to learn
          about and meet up with other attendees.
        </p>
        <p className="mb-2">
          The content we do host is skewed toward interactive workshops, office
          hours, debates, and fireside chats, rather than straight talks or
          large panels. We will also have a dedicated track of talks under
          Chatham House rules, which gives speakers the opportunity to go beyond
          their public positions.
        </p>
      </div>
    </div>
  );
}
