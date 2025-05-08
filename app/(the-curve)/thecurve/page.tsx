import Image from "next/image";
import { About2024 } from "./about-2024";
import { FAQ } from "./faq";
import TypeformPopupButton from "@/components/typeform-popup";
import { TYPEFORM_IDS } from "@/utils/constants";
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
      <div className="relative sm:h-[50dvw] sm:max-h-[400px] mx-auto max-w-7xl">
        <div className="relative h-full z-10">
          <h1 className="mt-5 text-5xl text-center sm:text-left">The Curve</h1>
          <h5 className="mt-1 text-center sm:text-left">
            October 3-5, 2025 | SF & Berkeley
          </h5>
          <h2 className="my-12 xl:my-12 sm:my-8 sm:w-2/3 w-full text-center sm:text-left">
            A conference where thinkers, builders, and leaders grapple with AI's
            biggest questions.
          </h2>
          <div className="flex justify-center bottom-0 left-0 w-full sm:block">
            <TypeformPopupButton
              formId={TYPEFORM_IDS.TC_NOTIF}
              buttonText="Get notified when applications open"
              buttonClassName="border border-white bg-white text-orange rounded px-6 py-2 hover:bg-orange hover:text-white"
              withArrow
            />
          </div>
        </div>
        <div className="hidden sm:flex absolute bottom-0 left-0 w-full  justify-center items-center">
          <Image
            className="object-contain text-white max-w-7xl w-full"
            src="/WideCurve.svg"
            alt="Curve"
            width={2000}
            height={1000}
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
      <div className="text-width-pos mb-8">
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
      <div className="text-width-pos mb-8">
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
      <div className="text-width-pos">
        <h2 className="mb-4">The experience</h2>
        <p className="mb-2">
          We prioritize small group and one-on-one conversations, and design our
          event accordingly. You're encouraged to skip sessions during the day
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
