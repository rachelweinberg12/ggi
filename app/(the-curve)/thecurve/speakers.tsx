import { Col } from "@/components/blocks";
import clsx from "clsx";
import Image from "next/image";

const SPEAKERS = [
  {
    name: "Dean Ball*",
    affiliation: "White House OSTP",
    imageUrl: "DeanBall.jpeg",
  },
  {
    name: "Ajeya Cotra",
    affiliation: "Open Philanthropy",
    imageUrl: "AjeyaCotra.png",
  },
  {
    name: "Helena Fu",
    affiliation: "Department of Energy",
    imageUrl: "SayashKapoor.png",
  },
  {
    name: "Keerthana Gopalakrishnan",
    affiliation: "Google DeepMind",
    imageUrl: "AjeyaCotra.png",
  },
  {
    name: "Sam Hammond",
    affiliation: "Foundation for American Innovation",
    imageUrl: "SamHammond.png",
  },
  {
    name: "Jedidah Isler",
    affiliation: "Federation of American Scientists",
    imageUrl: "JedidahIsler.jpg",
  },
  { name: "Chad Jones", affiliation: "Stanford", imageUrl: "ChadJones.jpg" },
  {
    name: "Klon Kitchen",
    affiliation: "Consultant",
    imageUrl: "KlonKitchen.jpg",
  },
  { name: "Jason Kwon", affiliation: "OpenAI", imageUrl: "JasonKwon.jpg" },
  {
    name: "Alondra Nelson",
    affiliation: "Institute for Advanced Study",
    imageUrl: "AlondraNelson.jpg",
  },
  {
    name: "Dylan Patel",
    affiliation: "SemiAnalysis",
    imageUrl: "DylanPatel.png",
  },
  {
    name: "Geoff Ralston",
    affiliation: "Safe AI Fund",
    imageUrl: "GeoffRalston.jpg",
  },
  {
    name: "Joshua Rothman",
    affiliation: "The New Yorker",
    imageUrl: "JoshuaRothman.webp",
  },
  { name: "Emmett Shear", affiliation: "Softmax", imageUrl: "EmmettShear.jpg" },
  { name: "Jack Clark", affiliation: "Anthropic", imageUrl: "JackClark.jpeg" },
  {
    name: "Helen Toner",
    affiliation: "Center for Security and Emerging Technology",
    imageUrl: "HelenToner.jpg",
  },
  {
    name: "Ari Weinstein",
    affiliation: "Software Apps Inc",
    imageUrl: "AriWeinstein.jpg",
  },
];

export function Speakers() {
  return (
    <Col className="section-padding theme-classic">
      <h2>Speakers</h2>
      <div className="grid grid-cols-2 gap-x-4 y-gap sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
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
    <div className="flex flex-col items-center gap-4">
      <SpeakerPicture
        name={speaker.name}
        imageUrl={`/the-curve/speakers/${speaker.imageUrl}`}
      />
      <div className="text-center w-30 xs:w-40 lg:w-50">
        <h4 className="font-bold">{speaker.name}</h4>
        <h5 className="font-extralight leading-none mt-2">
          {speaker.affiliation}
        </h5>
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
    <div
      className={clsx(
        "w-30 h-30 xs:w-40 xs:h-40 lg:w-50 lg:h-50 rounded overflow-hidden",
        className,
      )}
    >
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
