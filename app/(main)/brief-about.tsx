import { Col, Row } from "@/components/blocks";
import { LinkButton } from "@/components/link-button";

export function BriefAbout() {
  return (
    <div
      className="section-padding border-y border-black theme-sand"
      id="about"
    >
      <div className="text-width-pos">
        <h1>About us</h1>
        <Col className="mt-3 gap-2">
          <p>
            We expect AI to be transformative, with the potential for enormous
            upside and downside, but don't think society is on track to make the
            most of it.
          </p>
          <p>
            Our mission is to support leaders as they navigate this high-stakes
            period of rapid AI advancement by bridging disciplines, convening
            experts, and publishing accessible analysis of AI’s toughest
            questions. When conflicting perspectives emerge on crucial
            questions, we serve as the organization you can turn to for clarity
            and insight.
          </p>
          <p>We focus on four broad topics:</p>
          <ul>
            <li>
              <b>Timelines & Capabilities:</b> How quickly will AI development
              advance?
            </li>
            <li>
              <b>Economic Impacts:</b> How quickly will AI be adopted, and what
              impact will this have on the economy? How can we ensure AI creates
              broad-based economic benefits?
            </li>
            <li>
              <b>Democracy & Governance:</b> How must democratic and other key
              institutions adapt to the challenges and opportunities that AI
              brings?
            </li>
            <li>
              <b>Realizing Benefits:</b> What can we do to unlock and facilitate
              adoption of beneficial uses of AI?
            </li>
          </ul>
          <p>
            Our founding team consists of{" "}
            <a
              className="text-link"
              href="https://www.linkedin.com/in/taren-stinebrickner-kauffman-953b9831/"
              target="_blank"
            >
              Taren Stinebrickner-Kauffman
            </a>
            ,{" "}
            <a
              className="text-link"
              href="https://www.linkedin.com/in/stevescalyr/"
              target="_blank"
            >
              Steve Newman
            </a>
            , and{" "}
            <a
              className="text-link"
              href="https://www.linkedin.com/in/rachel-weinberg-789b23228/"
              target="_blank"
            >
              Rachel Weinberg
            </a>
            .
          </p>
          <Row className="justify-center mt-5">
            <LinkButton
              href="/about"
              title="Learn more"
              className="px-6 py-2 bg-black text-sand hover:bg-sand hover:text-black border rounded"
            />
          </Row>
        </Col>
      </div>
    </div>
  );
}
