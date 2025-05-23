import { Col, Row } from "@/components/blocks";
import { CrmSubscribe } from "@/components/crm-subscribe";
import { Socials } from "@/components/socials";
import { SubstackSubscribe } from "@/components/substack-subscribe";

export function Footer() {
  return (
    <div className="theme-classic border-t border-black">
      <Col className="md:flex-row md:justify-between nav-section-padding y-section-padding x-gap items-center md:items-stretch">
        <div className="w-full xs:w-108">
          <h3 className="mb-3">Get event invites and announcements</h3>
          <CrmSubscribe />
        </div>
        <Col className="justify-between">
          <div className="mb-3">
            <h3>Subscribe to our Substack</h3>
            <SubstackSubscribe />
          </div>
          <Row className="justify-end">
            <Socials />
          </Row>
        </Col>
      </Col>
    </div>
  );
}
