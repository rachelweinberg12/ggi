import {
  EMAIL_ADDRESS,
  LINKEDIN_URL,
  SUBSTACK_URL,
  X_URL,
} from "@/utils/constants";
import { Row } from "./blocks";
import { SocialIcon } from "react-social-icons";
export function Socials() {
  return (
    <Row className="gap-4">
      <SocialIcon
        network="email"
        href={`mailto:${EMAIL_ADDRESS}`}
        borderRadius="6px"
        style={{ width: 32, height: 32 }}
        bgColor="#141312"
        target="_blank"
      />
      <SocialIcon
        network="x"
        href={X_URL}
        borderRadius="6px"
        style={{ width: 32, height: 32 }}
        bgColor="#141312"
        target="_blank"
      />
      <SocialIcon
        network="substack"
        href={SUBSTACK_URL}
        borderRadius="6px"
        style={{ width: 32, height: 32 }}
        bgColor="#141312"
        target="_blank"
      />
      <SocialIcon
        network="linkedin"
        href={LINKEDIN_URL}
        borderRadius="6px"
        style={{ width: 32, height: 32 }}
        bgColor="#141312"
        target="_blank"
      />
    </Row>
  );
}
