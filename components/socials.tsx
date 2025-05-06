import { Row } from "./blocks";
import { SocialIcon } from "react-social-icons";
export function Socials() {
  return (
    <Row>
      <SocialIcon network="x" borderRadius="6px" bgColor="black" />
      <SocialIcon network="substack" borderRadius="6px" bgColor="black" />
      <SocialIcon network="linkedin" borderRadius="6px" bgColor="black" />
    </Row>
  );
}
