import Image from "next/image";
import { Col, Row } from "@/components/blocks";
import clsx from "clsx";

type Event = {
  title: string;
  subtitle: string;
  url: string;
  date: string;
  location: string;
  imageUrl: string;
  openness: string;
};

const events: Event[] = [
  {
    title: "AI & Democracy Coworking Day",
    subtitle:
      "Come cowork and meet other people who think about how AI can bolster democracy and how to democratically govern AI.",
    url: "https://lu.ma/rm2nli40",
    date: "All day, May 12, 2025",
    location: "San Francisco",
    imageUrl: "/event-images/AIDemocracyCoworking.png",
    openness: "Open invite",
  },
  {
    title: "Reimagining the Economy in the Age of AI (with Natalie Foster)",
    subtitle:
      "Join us for snacks, drinks, and a fireside chat with Natalie Foster about building a resilient and inclusive economy in the age of AI.",
    url: "https://lu.ma/q4fxo69f",
    date: "6-8pm, June 18, 2025",
    location: "San Francisco",
    imageUrl: "/event-images/TheGuarantee.png",
    openness: "Open invite",
  },
];

export function EventsSpotlight() {
  const numEvents = events.length;
  return (
    <div>
      <Col className="nav-section-padding y-section-padding pt-0">
        <h2>Upcoming events</h2>
        {numEvents === 1 ? (
          <OneCardLayout event={events[0]} />
        ) : numEvents === 2 ? (
          <TwoCardLayout events={events} />
        ) : (
          <ThreeCardLayout events={events} />
        )}
      </Col>
    </div>
  );
}

function EventPreview(props: { event: Event; vertical?: boolean }) {
  const { event, vertical } = props;

  return (
    <a
      className={clsx(
        "flex overflow-hidden p-1 rounded border border-black h-full hover:bg-sand",
        vertical ? "flex-col gap-y-1" : "gap-x-1 sm:gap-x-3",
      )}
      href={event.url}
      target="_blank"
    >
      <div
        className={clsx(
          "sm:aspect-[4/3]",
          vertical ? "aspect-[5/3]" : "aspect-square",
        )}
      >
        <Image
          src={event.imageUrl}
          alt={event.title}
          className={clsx(
            "w-full h-full object-cover rounded-sm sm:aspect-[4/3]",
            vertical
              ? "aspect-[5/3]"
              : "max-h-36 sm:max-h-52 md:max-h-64 xl:max-h-full aspect-square",
          )}
          width={400}
          height={300}
        />
      </div>
      <Col className="p-1 sm:p-3 gap-y-0 justify-between">
        <div>
          <h3 className="mb-1">{event.title}</h3>
          <h5 className="mb-1 sm:mb-3">{event.subtitle}</h5>
        </div>
        <p className="info">
          {event.date} | {event.location} | {event.openness}
        </p>
      </Col>
    </a>
  );
}

function ThreeCardLayout(props: { events: Event[] }) {
  const { events } = props;
  return (
    <>
      <div className="xl:grid grid-cols-12 x-gap hidden">
        <div className="col-span-5">
          <EventPreview event={events[0]} vertical />
        </div>
        <Col className="h-full justify-between col-span-7">
          {events.map((event, i) => {
            if (i === 0) return null;
            return <EventPreview event={event} key={i} />;
          })}
        </Col>
      </div>
      <div className="hidden xs:grid grid-rows-3 y-gap xl:hidden">
        {events.map((event, i) => (
          <EventPreview event={event} key={i} />
        ))}
      </div>
      <div className="grid grid-rows-3 y-gap xs:hidden">
        {events.map((event, i) => (
          <EventPreview event={event} key={i} vertical />
        ))}
      </div>
    </>
  );
}

function TwoCardLayout(props: { events: Event[] }) {
  const { events } = props;
  return (
    <div className="grid grid-cols-1 grid-rows-2 xl:grid-cols-2 xl:grid-rows-1 y-gap x-gap">
      {events.map((event, i) => (
        <div key={i} className="col-span-1 row-span-1">
          <div className="hidden xs:block xl:hidden h-full w-full">
            <EventPreview event={event} />
          </div>
          <div className="xs:hidden xl:block h-full w-full">
            <EventPreview event={event} vertical />
          </div>
        </div>
      ))}
    </div>
  );
}

function OneCardLayout(props: { event: Event }) {
  const { event } = props;
  return (
    <>
      <div className="hidden xs:block">
        <EventPreview event={event} />
      </div>
      <div className="xs:hidden">
        <EventPreview event={event} vertical />
      </div>
    </>
  );
}
