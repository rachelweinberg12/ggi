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
          We believe that AI will be a transformative technology, with the
          potential for enormous upside and downside.
        </p>
        <p>
          Developments in AI have been moving so quickly that expert consensus
          has not had time to emerge. When the experts are talking past one
          another, decision-makers can’t make sense of what’s going on. Without
          understanding, they’ll miss opportunities and stumble into disasters.
        </p>
        <p>
          We aim to support leaders to meet the challenges of the AI transition
          by bridging disciplines, convening experts, and publishing accessible
          analysis of AI’s toughest questions.
        </p>
        <p>We focus on four broad topics:</p>
        <ul>
          <li>
            <b>Timelines & Capabilities:</b> How quickly will AI development
            advance?
            <li>
              <b>Economic Impacts:</b> How quickly will AI be adopted, and what
              impact will this have on the economy? How can we ensure AI creates
              broad-based economic benefits?
            </li>
            <li>
              <b>Institutional Adaptation:</b> How must democratic and other key
              institutions adapt to the challenges and opportunities that AI
              brings?
            </li>
            <li>
              <b>Realizing Benefits:</b> What can we do to unlock and facilitate
              adoption of beneficial uses of AI?
            </li>
          </li>
        </ul>
        <p>
          Our founding team consists of Taren Stinebrickner-Kauffman, Steve
          Newman, and Rachel Weinberg.
        </p>
      </Col>
    </div>
  );
}
