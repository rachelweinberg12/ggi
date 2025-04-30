import { Col } from "@/components/blocks";

export function BriefAbout() {
  return (
    <div
      className="section-padding border-y border-black theme-sand"
      id="about"
    >
      <h2>About us</h2>
      <Col className="mt-3 gap-2">
        <p>
          We envision a future where institutions and experts across domains
          collaborate with urgency and humility to meet the challenges of the AI
          transition, promoting security, democracy, and shared prosperity.
        </p>
        <p>
          <b>Attendees:</b> We bring in participants from frontier AI labs,
          startups, think tanks, government, academia, civil society, and media.
          This event is invite-only. Sign up here to be notified when our
          application opens in June.
        </p>
        <p>
          <b>Topics:</b> Our content will get at questions like — How can we
          unlock the benefits of AI for scientific discovery, institutional
          function, and global prosperity? How might AI concentrate or
          distribute power? What are the risks posed by current and future AI
          systems? How quickly will AI systems become more powerful? What impact
          will they have on the job market and economic growth? What
          implications does AI have for national security and global balance of
          power?
        </p>
      </Col>
    </div>
  );
}
