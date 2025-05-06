import { Col } from "@/components/blocks";
import { CrmSubscribe } from "@/components/crm-subscribe";
import { SubstackSubscribe } from "@/components/substack-subscribe";

export function Footer() {
  return (
    <div className="theme-classic section-padding">
      <Col className="md:flex-row md:justify-between">
        <div>
          <h4 className="mb-3">Get announcements and event invites</h4>
          <CrmSubscribe />
        </div>
        <div className="mb-3">
          <h4>Subscribe to our newsletter</h4>
          <SubstackSubscribe />
        </div>
      </Col>
    </div>
  );
}
