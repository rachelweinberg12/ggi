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
        <Col className="justify-between md:items-end items-center">
          <div className="mb-3">
            <h3>Subscribe to our Substack</h3>
            <SubstackSubscribe />
          </div>
          <Col>
            <Row className="md:justify-end justify-center">
              <Socials />
            </Row>
            <p className="max-w-xs info text-center md:text-right">
              The Golden Gate Institute for AI is a fiscally sponsored project
              of{" "}
              <a
                className="text-link"
                href="https://socialgoodfund.org/"
                target="_blank"
              >
                Social Good Fund
              </a>
              , a California nonprofit corporation and registered 501(c)(3)
              organization, Tax ID (EIN) 46-1323531.
            </p>
          </Col>
        </Col>
      </Col>
    </div>
  );
}
