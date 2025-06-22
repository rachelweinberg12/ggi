import { Col } from "@/components/blocks";
import clsx from "clsx";
import Image from "next/image";

const SPEAKERS = [
  {
    name: "Dean Ball*",
    affiliation: "White House OSTP",
    imageUrl: "DeanBall.jpeg",
    role: "Senior Policy Advisor",
  },
  {
    name: "Ajeya Cotra",
    affiliation: "Open Philanthropy",
    imageUrl: "AjeyaCotra.png",
    role: "Senior Advisor",
  },
  {
    name: "Helena Fu",
    affiliation: "Department of Energy",
    imageUrl: "SayashKapoor.png",
    role: "Director of Critical and Emerging Technologies",
  },
  {
    name: "Keerthana Gopalakrishnan",
    affiliation: "Google DeepMind",
    imageUrl: "AjeyaCotra.png",
    role: "Research Scientist",
  },
  {
    name: "Sam Hammond",
    affiliation: "Foundation for American Innovation",
    imageUrl: "SamHammond.png",
    role: "Chief Economist",
  },
  {
    name: "Jedidah Isler",
    affiliation: "Federation of American Scientists",
    imageUrl: "JedidahIsler.jpg",
    role: "Chief Science Officer",
  },
  {
    name: "Chad Jones",
    affiliation: "Stanford GSB",
    imageUrl: "ChadJones.jpg",
    role: "Professor of Economics",
  },
  {
    name: "Klon Kitchen",
    affiliation: "Beacon Global Strategies",
    imageUrl: "KlonKitchen.jpg",
    role: "Managing Director",
  },
  {
    name: "Jason Kwon",
    affiliation: "OpenAI",
    imageUrl: "JasonKwon.jpg",
    role: "Chief Strategy Officer",
  },
  {
    name: "Alondra Nelson",
    affiliation: "Institute for Advanced Study",
    imageUrl: "AlondraNelson.jpg",
    role: "Harold F. Linder Professor",
  },
  {
    name: "Dylan Patel",
    affiliation: "SemiAnalysis",
    imageUrl: "DylanPatel.png",
    role: "Founder & CEO",
  },
  {
    name: "Geoff Ralston",
    affiliation: "Safe AI Fund",
    imageUrl: "GeoffRalston.jpg",
    role: "Founder, former President of YC",
  },
  {
    name: "Joshua Rothman",
    affiliation: "The New Yorker",
    imageUrl: "JoshuaRothman.webp",
    role: "Ideas Editor & Writer",
  },
  {
    name: "Emmett Shear",
    affiliation: "Softmax",
    imageUrl: "EmmettShear.jpg",
    role: "CEO, former CEO of Twitch",
  },
  {
    name: "Jack Clark",
    affiliation: "Anthropic",
    imageUrl: "JackClark.jpeg",
    role: "Co-founder & Head of Policy",
  },
  {
    name: "Helen Toner",
    affiliation: "Center for Security and Emerging Technology",
    imageUrl: "HelenToner.jpg",
    role: "Director of Strategy",
  },
  {
    name: "Ari Weinstein",
    affiliation: "Software Apps Inc",
    imageUrl: "AriWeinstein.jpg",
    role: "Co-founder & CEO",
  },
];

export function Speakers() {
  return (
    <Col className="section-padding theme-classic py-0">
      <h1>Speakers</h1>
      <div className="grid grid-cols-2 gap-x-8 y-gap sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-4">
        {SPEAKERS.map((speaker) => (
          <Speaker key={speaker.name} speaker={speaker} />
        ))}
      </div>
    </Col>
  );
}

function Speaker(props: { speaker: (typeof SPEAKERS)[number] }) {
  const { speaker } = props;
  return (
    <div className="flex flex-col items-center gap-3 rounded-lg pb-4">
      <SpeakerPicture
        name={speaker.name}
        imageUrl={`/the-curve/speakers/${speaker.imageUrl}`}
      />
      <div className="text-center">
        <h4 className="font-bold">{speaker.name}</h4>
        <div className="w-1/3 mx-auto border-t-2 mt-3 border-rose" />
        <h5 className="leading-none mt-2 font-normal">{speaker.affiliation}</h5>
        <p className="leading-none mt-2 font-extralight text-gray-600">
          {speaker.role}
        </p>
      </div>
    </div>
  );
}

export function SpeakerPicture(props: {
  name: string;
  imageUrl: string;
  className?: string;
}) {
  const { name, imageUrl, className } = props;
  return (
    <div className={clsx("aspect-square rounded overflow-hidden", className)}>
      <Image
        src={imageUrl}
        alt={name}
        width={400}
        height={400}
        className="aspect-square object-cover"
      />
    </div>
  );
}
