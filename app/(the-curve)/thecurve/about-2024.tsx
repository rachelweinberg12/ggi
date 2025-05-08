import { Col, Row } from "@/components/blocks";
import { LinkButton } from "@/components/link-button";
import { ProfilePicture } from "@/components/profile-picture";

const speakers = [
  {
    name: "Jack Clark",
    description: "Anthropic",
    imageUrl: "/the-curve-speakers/JackClark.jpeg",
  },

  {
    name: "Sayash Kapoor",
    description: "AI Snake Oil, Princeton",
    imageUrl: "/the-curve-speakers/SayashKapoor.png",
  },
  {
    name: "Dean Ball",
    description: "White House Office of Science and Technology Policy",
    imageUrl: "/the-curve-speakers/DeanBall.jpeg",
  },
  {
    name: "Ajeya Cotra",
    description: "Open Philanthropy",
    imageUrl: "/the-curve-speakers/AjeyaCotra.png",
  },
  {
    name: "Sam Hammond",
    description: "Foundation for American Innovation",
    imageUrl: "/the-curve-speakers/SamHammond.png",
  },
  {
    name: "Dawn Song",
    description: "UC Berkeley",
    imageUrl: "/the-curve-speakers/DawnSong.webp",
  },
  {
    name: "Erik Brynjolfsson",
    description: "Stanford HAI",
    imageUrl: "/the-curve-speakers/ErikBrynjolfsson.jpg",
  },
  {
    name: "Anton Troynikov",
    description: "Chroma",
    imageUrl: "/the-curve-speakers/AntonTroynikov.png",
  },
];

const testimonials = [
  {
    name: "Kevin Roose",
    quote: "It felt like an event where history was happening.",
  },
  {
    name: "Dave Kasten",
    quote:
      "The Curve led to some of the best conversations on AI policy I've ever had. Just overall one heck of a useful and fun conference.",
  },
  {
    name: "Misha Glouberman",
    quote:
      "So many conferences are thoughtlessly run or designed. This was such a remarkable exception.",
  },
  {
    name: "Ivan Bercovich",
    quote:
      "I got to engage with extraordinary people who had interesting ideas across a variety of topics and a common interest in AI. Lovely.",
  },
  {
    name: "Nathan Labenz",
    quote:
      "Super high quality attendees. It did not feel like an awkward Thanksgiving, but a good faith meeting of the minds.",
  },
];

export function About2024() {
  return (
    <div className="theme-sand border-t border-black">
      <div className="nav-section-padding y-section-padding">
        <h1 className="mb-8">About The Curve 2024</h1>
        <Row className="justify-between items-end mb-8">
          <h2>A sample of last year's speakers</h2>
          <LinkButton
            href="https://thecurve.is/speakers"
            title="See the rest"
            className="hidden sm:flex"
          />
        </Row>
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 md:grid-cols-4">
          {speakers.map((speaker) => (
            <Col className="items-center gap-0" key={speaker.name}>
              <ProfilePicture name={speaker.name} imageUrl={speaker.imageUrl} />
              <h4 className="mt-2">{speaker.name}</h4>
              <p className="font-light text-center leading-tight mt-1">
                {speaker.description}
              </p>
            </Col>
          ))}
        </div>
        <Row className="justify-end mt-4 sm:hidden">
          <LinkButton
            href="https://thecurve.is/speakers"
            title="See the rest"
          />
        </Row>
        <div className="y-section-padding">
          <h2 className="mb-8">What people said about it</h2>
          <div className="grid grid-cols-1 gap-6 sm:gap-12 sm:grid-cols-2 md:grid-cols-3 mb-12">
            {testimonials.map((testimonial) => (
              <Testimonial key={testimonial.name} {...testimonial} />
            ))}
          </div>
          <Col className="gap-4 items-center">
            <h4>More writing about The Curve 2024:</h4>
            <ul>
              <li>
                <a
                  target="_blank"
                  href="https://x.com/deanwball/status/1861261285846925543"
                  className="text-orange hover:underline"
                >
                  Dean Ball
                </a>{" "}
                on what he learned from his liability debate with Gabe Weil
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://x.com/atroyn/status/1861093790007861738"
                  className="text-orange hover:underline"
                >
                  Anton Troynikov
                </a>{" "}
                on his experience playing in the AI 2027 Tabletop Exercise
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://x.com/labenz/status/1861439848214560944"
                  className="text-orange hover:underline"
                >
                  Nathan Labenz
                </a>{" "}
                on what he learned from the conference
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://x.com/NathanpmYoung/status/1861240216155234417"
                  className="text-orange hover:underline"
                >
                  Nathan Young
                </a>{" "}
                on what he changed his mind about as a result of the conference
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.nytimes.com/2024/12/06/podcasts/is-intel-cooked-whats-your-p-dyson-sphere-hard-fork-gift-guide.html"
                  className="text-orange hover:underline"
                >
                  Kevin Roose and Casey Newton
                </a>{" "}
                talk about their experience on HardFork
              </li>
            </ul>
          </Col>
        </div>
      </div>
    </div>
  );
}

function Testimonial(props: { name: string; quote: string }) {
  return (
    <Col className="gap-1 justify-between lg:max-w-sm">
      <p className="italic">"{props.quote}"</p>
      <p className="text-right">— {props.name}</p>
    </Col>
  );
}
