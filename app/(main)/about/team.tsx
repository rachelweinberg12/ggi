import { Col } from "@/components/blocks";
import { ProfilePicture } from "@/components/profile-picture";
import { TEAM_MEMBERS } from "@/utils/constants";
const advisors = [
  {
    name: "Dean Ball",
    title: "Foundation for American Innovation",
    imageUrl: "/advisors/DeanBall.jpeg",
  },
  {
    name: "Roy Bahat",
    title: "Bloomberg Beta",
    imageUrl: "/advisors/RoyBahat.png",
  },
  {
    name: "Catherine Bracy",
    title: "TechEquity",
    imageUrl: "/advisors/CatherineBracy.png",
  },
  {
    name: "Jason Crawford",
    title: "Roots of Progress Institute",
    imageUrl: "/advisors/JasonCrawford.jpg",
  },
  {
    name: "Cate Hall",
    title: "Astera Institute",
    imageUrl: "/advisors/CateHall.jpg",
  },
  {
    name: "Jennifer Pahlka",
    title: "Niskanen Center",
    imageUrl: "/advisors/JenniferPahlka.jpg",
  },
  {
    name: "Geoff Ralston",
    title: "Safe AI Fund",
    imageUrl: "/advisors/GeoffRalston.webp",
  },
];

export function Team() {
  return (
    <div className="theme-sand border-t border-black" id="team">
      <div className="nav-section-padding y-section-padding">
        {" "}
        <h2 className="mb-8">Our team</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 sm:gap-8 gap-4">
          {TEAM_MEMBERS.map((member) => (
            <TeamMember key={member.name} {...member} />
          ))}
        </div>
        <h2 className="mb-8 mt-16">Our advisors</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
          {advisors.map((member) => (
            <TeamMember key={member.name} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
}

function TeamMember(props: {
  name: string;
  title?: string;
  email?: string;
  socials?: { network: string; url: string }[];
  imageUrl: string;
}) {
  const { name, title, imageUrl } = props;
  return (
    <div className="flex flex-col gap-2 items-center xl:flex-row lg:gap-4 w-full">
      <div className="no-shrink">
        <ProfilePicture
          imageUrl={imageUrl}
          name={name}
          className="xl:w-30 xl:h-36"
        />
      </div>
      <Col className="h-full justify-between">
        <div className="flex flex-col gap-1 w-30 xs:w-40 lg:w-50 xl:w-full">
          <h4 className="text-center xl:text-left">{name}</h4>
          <p className="font-light leading-tight text-center xl:text-left">
            {title}
          </p>
        </div>
      </Col>
    </div>
  );
}
