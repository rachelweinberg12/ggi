import { Col } from "@/components/blocks";
import { CrmSubscribe } from "@/components/crm-subscribe";
import Image from "next/image";
export function Footer() {
  return (
    <div className="theme-orange border-t border-black">
      <Col className="gap-12 md:flex-row md:justify-between nav-section-padding y-section-padding x-gap items-center md:items-stretch">
        <div className="w-full xs:w-108">
          <h3 className="mb-3">Get notified when applications open!</h3>
          <CrmSubscribe />
        </div>
        <Col className="justify-between md:items-end items-center">
          <Col className="gap-6">
            <h3>Hosted by:</h3>
            <Col className="gap-3 items-center">
              <a href="https://goldengateinstitute.org" target="_blank">
                <Image
                  src="/GGILogoWhiteVertical.png"
                  alt="Golden Gate Institute logo"
                  width={1200}
                  height={400}
                  className="h-18 md:h-28 w-auto object-contain"
                />
              </a>
              <a href="https://manifund.org" target="_blank">
                <Image
                  src="/ManifundLogo.png"
                  alt="Manifund logo"
                  width={1200}
                  height={400}
                  className="h-18 md:h-28 w-auto object-contain"
                />
              </a>
            </Col>
          </Col>
        </Col>
      </Col>
    </div>
  );
}
