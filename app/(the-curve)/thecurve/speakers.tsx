import { Col } from "@/components/blocks";
import { TC_SESSION_PROPOSAL } from "@/utils/constants";
import clsx from "clsx";
import Image from "next/image";

const SPEAKERS = [
  {
    name: "Dean Ball",
    affiliation: "White House OSTP",
    imageUrl: "DeanBall.jpeg",
    role: "Senior Policy Advisor",
    notes: "tentative",
  },
  {
    name: "Brad Carson",
    affiliation: "Americans for Responsible Innovation",
    imageUrl: "BradCarson.png",
    role: "Former Congressman",
  },
  {
    name: "Aparna Chennapragada",
    affiliation: "Microsoft",
    imageUrl: "AparnaChennapragada.jpg",
    role: "Chief Product Officer, Experiences and Devices",
  },
  {
    name: "Ted Chiang",
    affiliation: "Author",
    imageUrl: "TedChiang.jpg",
    role: "Stories of Your Life and Others, Exhalation",
  },
  {
    name: "Greg Corrado",
    affiliation: "Google",
    imageUrl: "GregCorrado.png",
    role: "Distinguished Scientist",
  },
  {
    name: "Ajeya Cotra",
    affiliation: "Open Philanthropy",
    imageUrl: "AjeyaCotra.png",
    role: "Senior Advisor",
  },
  {
    name: "Keerthana Gopalakrishnan",
    affiliation: "Google DeepMind",
    imageUrl: "KeerthanaGopalakrishnan.jpg",
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
    name: "Sayash Kapoor",
    affiliation: "Princeton",
    imageUrl: "SayashKapoor.png",
    role: "Co-author of AI as Normal Technology",
  },
  {
    name: "Daniel Kokotajlo",
    affiliation: "AI Futures Project",
    imageUrl: "DanielKokotajlo.jpg",
    role: "Co-author of AI 2027",
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
    name: "Nathan Lambert",
    affiliation: "Allen Institute for AI",
    imageUrl: "NathanLambert.jpeg",
    role: "Senior Research Scientist",
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
    role: "Former President of YC",
  },
  {
    name: "Joshua Rothman",
    affiliation: "The New Yorker",
    imageUrl: "JoshuaRothman.jpeg",
    role: "Ideas Editor & Writer",
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
    imageUrl: "HelenToner.jpeg",
    role: "Director of Strategy",
  },
  {
    name: "Randi Weingarten",
    affiliation: "AFT",
    imageUrl: "RandiWeingarten.webp",
    role: "President",
  },
  {
    name: "Ari Weinstein",
    affiliation: "Software Apps Inc",
    imageUrl: "AriWeinstein.jpg",
    role: "Co-founder & CEO",
  },
];

export function Speakers() {
  const sortedSpeakers = SPEAKERS.sort((a, b) => {
    // Put speakers with notes last
    if (!a.notes && b.notes) return -1;
    if (a.notes && !b.notes) return 1;

    // Sort by last name
    const aLastName = a.name.split(" ").pop() || "";
    const bLastName = b.name.split(" ").pop() || "";
    return aLastName.localeCompare(bLastName);
  });
  return (
    <Col className="section-padding theme-classic py-0">
      <h1>Speakers</h1>
      <div className="grid grid-cols-2 gap-x-8 y-gap sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-4">
        {sortedSpeakers.map((speaker) => (
          <Speaker key={speaker.name} speaker={speaker} />
        ))}
        <div className="col-span-1 sm:col-span-1 lg:col-span-1 xl:col-span-2 px-5">
          <div className="h-1/4" />
          <h3 className="text-center">And more coming soon!</h3>
          <div className="w-1/4 mx-auto border-t-2 my-5 border-rose" />
          <h5 className="text-center max-w-md mx-auto">
            If you have an idea for a session (talk, workshop, fireside chat,
            etc), fill out this{" "}
            <a className="text-link" href={TC_SESSION_PROPOSAL} target="_blank">
              proposal form.
            </a>
          </h5>
        </div>
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
      <div className="text-center w-full">
        <h4 className="font-bold">{speaker.name}</h4>
        <div className="w-1/3 mx-auto border-t-2 mt-3 border-rose" />
        <h5 className="leading-none mt-2 font-normal">{speaker.affiliation}</h5>
        <p className="leading-none mt-2 font-extralight text-gray-600">
          {speaker.role}
        </p>
        <p className="italic text-sm mt-1 info">{speaker.notes}</p>
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
