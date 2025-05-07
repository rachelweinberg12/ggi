import { Col, Row } from "@/components/blocks";
import { ProfilePicture } from "@/components/profile-picture";
import { SocialIcon } from "react-social-icons";

const coreTeam = [
  {
    name: "Taren Stinebrickner-Kauffman",
    title: "CEO & Co-Founder",
    imageUrl: "/team/Taren.jpg",
  },
  {
    name: "Steve Newman",
    title: "President & Co-Founder",
    imageUrl: "/team/Steve.jpg",
  },
  {
    name: "Rachel Weinberg",
    title: "Director of Events & Co-Founder",
    imageUrl: "/team/Rachel.jpg",
  },
];

const advisors = [
  {
    name: "Jennifer Pahlka",
    title: "Niskanen Center",
    imageUrl: "/advisors/JenniferPahlka.jpg",
  },
  {
    name: "Roy Bahat",
    title: "Bloomberg Beta",
    imageUrl: "/advisors/RoyBahat.png",
  },
  {
    name: "Geoff Ralston",
    title: "Safe AI Fund",
    imageUrl: "/advisors/GeoffRalston.webp",
  },
  {
    name: "Cate Hall",
    title: "Astera Institute",
    imageUrl: "/advisors/CateHall.jpg",
  },
  {
    name: "Jason Crawford",
    title: "Roots of Progress Institute",
    imageUrl: "/advisors/JasonCrawford.jpg",
  },
];

export function Team() {
  return (
    <div className="nav-section-padding y-section-padding theme-classic border-t border-black">
      <h2 className="mb-8">Our team</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 sm:gap-8 gap-4">
        {coreTeam.map((member) => (
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
  );
}

function TeamMember(props: { name: string; title?: string; imageUrl: string }) {
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
        <div className="flex flex-col gap-2 w-30 xs:w-40 lg:w-50 xl:w-full">
          <h4>{name}</h4>
          <p className="font-light">{title}</p>
        </div>
      </Col>
    </div>
  );
}
