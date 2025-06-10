import { Row } from "@/components/blocks";
import Link from "next/link";
import { SUBSTACK_URL } from "@/utils/constants";
export default function Page() {
  return (
    <div className="section-padding">
      <div className="text-width-pos">
        <h2 className="mb-4">AI and Cybersecurity: The Big Picture</h2>
        <p className="mb-2">
          AI is expected to have enormous impact on cybersecurity. However, it
          is difficult to form a coherent picture of what that impact will look
          like. AI capabilities are advancing rapidly; news stories are often
          sensationalized; the relative impact on offense vs. defense is widely
          debated; comprehensive data is generally not available.
        </p>
        <p className="mb-2">
          In this site, we present a big-picture, long-term view of how the
          cybersecurity landscape will evolve in the AI era, incorporating
          technical, business, and policy considerations. For decision-makers,
          we present key ideas in accessible language without dumbing down. For
          AI or cybersecurity professionals, we tie these ideas to technical
          analysis.
        </p>
        <p className="mb-2">
          <i>
            This is an early, partial draft of a report by the{" "}
            <a href="https://www.goldengateinstitute.org/">
              Golden Gate Institute for AI
            </a>{" "}
            in collaboration with{" "}
            <a href="https://www.linkedin.com/in/carey-nachenberg-14bbb03/">
              Carey Nachenberg
            </a>{" "}
            and a panel of cybersecurity experts.
          </i>
        </p>
        <p className="mb-2">
          If you find this useful and would like to see more, or if you have
          feedback or suggestions, please reach out to{" "}
          <a href="mailto:steve@goldengateinstitute.org">
            steve@goldengateinstitute.org
          </a>
          .
        </p>

        <h2 className="mb-4">The Cybersecurity Equilibrium</h2>
        <p className="mb-2">
          The impact of AI on cyberattacks is often viewed through a simple
          lens: if AI automates some aspect of cyberattacks, obviously there
          will be many more successful attacks.
        </p>
        <p className="mb-2">
          This is unrealistic. Like any system involving multiple participants
          with competing interests, cybersecurity exists in a complex{" "}
          <b>equilibrium</b>. As a result, automation of a particular capability
          might not lead to a large increase in successful attacks. For
          instance, some attackers might be limited by the fear of retaliation,
          rather than an inability to scale up their operations.
        </p>
        <p className="mb-2">
          To understand how advances in AI capabilities will impact the lived
          experience of cyberattacks, it’s important to understand this
          equilibrium. On this page, we review the important mechanisms of the
          cybersecurity equilibrium, some asymmetries between attack and
          defense, and implications for how various AI capabilities might tip
          the balance.{" "}
          <b>
            We conclude with a simple framework for estimating the impact of AI
            progress on the volume and impact of cyberattacks.
          </b>
        </p>
        <p className="mb-2">
          <b>Read more</b>:{" "}
          <a href="cybersecurity-equilibrium">The Cybersecurity Equilibrium</a>.
        </p>

        <h2 className="mb-4">AI Capability Levels</h2>
        <p className="mb-2">
          In this page, we step back from the daily barrage of incremental
          advances in AI benchmark scores. We identify major milestones that
          will unlock sea changes in the cybersecurity equilibrium. These
          milestones cover both technical skills, and broader agentic
          capabilities that will allow AI to assist with the non-technical
          aspects of an attack (such as money laundering).
        </p>
        <p className="mb-2">
          <b>Read more</b>: <a href="capability-levels">AI Capability Levels</a>
          .
        </p>

        <h2 className="mb-4">Attack Chain Analysis</h2>
        <p className="mb-2">
          This section of the report is an analysis of how current and future
          AIs will impact the volume of cybersecurity attacks. There are many
          different sorts of cyberattacks, involving different goals and
          techniques. We consider a series of attack scenarios. For each, we
          list the steps involved in an attack, and apply the methodology
          described in The Cybersecurity Equilibrium to forecast how AI is
          likely to impact that form of attack.
        </p>
        <p className="mb-2">
          <b>Read more</b>: <i>***coming soon</i>.
        </p>

        <h2 className="mb-4">Next Steps + How You Can Help</h2>
        <p className="mb-2">Ultimately, we would like to present:</p>
        <ul className="list-disc pl-5">
          <li>
            Multiple overviews of how AI may affect cybersecurity in the coming
            years, targeted at different audiences such as CISOs, policymakers,
            and decision makers at AI labs and safety organizations.
          </li>
          <li>
            Deeper dives into topics ranging from “how CISOs should prioritize
            resources” to “where tipping points in cyberattack volumes might
            occur” to “promising agendas for reducing risk”.
          </li>
        </ul>
        <p className="mb-2">
          Getting there will require legwork, such as extending our attack chain
          analysis to cover more scenarios. It will also require feedback and
          contributions from the community. We’re currently evaluating whether
          and how to proceed with this project; next steps will depend on the
          level of interest and feedback that we receive. If you’re interested,
          please drop me a line at{" "}
          <a href="mailto:steve@goldengateinstitute.org">
            steve@goldengateinstitute.org
          </a>
          .
        </p>
      </div>
    </div>
  );
}
