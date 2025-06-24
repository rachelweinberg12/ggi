import { Toggle } from "@/components/toggle";
import { TC_RECOMMENDATION, TC_SESSION_PROPOSAL } from "@/utils/constants";
import Link from "next/link";
export function FAQ() {
  return (
    <div className="section-padding pt-0 theme-classic">
      <div className="text-width-pos">
        <h1 className="md:mb-6 mb-4">FAQ</h1>
        <Toggle title="When is the deadline to apply?">
          <p className="mb-2">We have deadlines for each pricing tier:</p>
          <ul className="list-disc list-inside mb-2">
            <li>Early bird: July 4th (-33%)</li>
            <li>Regular: August 22nd (-0%)</li>
            <li>Late: September 5th (+50%)</li>
          </ul>
          <p className="mb-2">
            We may not review applications submitted after the late deadline.
          </p>
        </Toggle>
        <Toggle title="How much does it cost to attend?">
          <p className="mb-2">
            If you’re invited to the conference, you’ll be allowed to choose
            your ticket price among a few options:
          </p>
          <ul className="list-disc list-inside mb-2">
            <li>
              <b>Individual: $450</b> - if you’re paying personally, or out of a
              nonprofit, startup, or academic budget where price is a concern.
            </li>
            <li>
              <b>Institutional: $900</b> - if your company is covering
              registration, and price is not a primary concern.
            </li>
            <li>
              <b>Supporter: $3000</b> - if you want to pitch in extra to support
              our event. Includes admission to speaker reception.
            </li>
          </ul>
          <p className="mb-2">
            Early bird pricing, which is 33% off the standard ticket prices
            listed above, is available for those who apply by July 4th.
          </p>
          <p className="mb-2">
            <b>Do not let price stop you from applying!</b> We also offer
            further discounts, or in rare cases, travel support, to attendees
            who are unable to afford the full price of admission. We prioritize
            bringing in great people, regardless of their ability to pay.
          </p>
          <p className="mb-2">
            Tickets include 7 meals (dinner Friday, and three meals Saturday and
            Sunday), snacks, drinks, access to all sessions, 24-hour venue
            access, and conference swag.
          </p>
        </Toggle>
        <Toggle title="How long after I am invited will I have to register?">
          <p className="mb-2">
            We ask that all invitees puchase their tickets to confirm their
            registration within two weeks of being invited. This is because
            future admissions decisions depend on how many spots we have for
            each of our various audiences.
          </p>
          <p className="mb-2">
            If you'll need longer to make a decision, please just let us know!
            We gladly offer extensions for those who need them.
          </p>
        </Toggle>
        <Toggle title="What is your cancellation policy?">
          <p className="mb-2">
            We offer a full refunds at any time, minus the payment processor's
            fee of 3%. Note that it may take us a while to process requests for
            refunds that are submitted close to the date of the conference.
          </p>
        </Toggle>
        <Toggle title="Will sessions be recorded and posted online?">
          <p className="mb-2">
            Some sessions will be recoreded and the videos will be posted. Other
            sessions will not be recorded, and some will even be under the
            Chatham House Rule.
          </p>
        </Toggle>
        <Toggle title="What if I'd like to speak or host a session?">
          <p className="mb-2">
            You can fill out{" "}
            <a target="_blank" href={TC_SESSION_PROPOSAL} className="text-link">
              this submit session proposal form
            </a>
            .
          </p>
          <p className="mb-2">
            There will also be an unconference component of the event, where
            attendees will be welcome to host whatever side sessions they like.
          </p>
        </Toggle>
        <Toggle title="What can I do if I have a friend or colleague who I think should attend?">
          <p className="mb-2">
            Fill out{" "}
            <a
              target="_blank"
              href={TC_RECOMMENDATION}
              className="inline text-link"
            >
              this recommendation form
            </a>
            ! You can also nudge them to apply themselves.
          </p>
        </Toggle>
        <Toggle title="What's your press policy?">
          <p className="mb-2">
            We are excited to include journalists, whether they plan to write
            about the event specifically or not. Journalists will go through the
            same application process as other attendees. If admitted, they will
            wear a press badge by default, unless they’ve committed not to
            publish anything they heard or learned at the event.{" "}
          </p>
        </Toggle>
        <Toggle title="How can I support this event?">
          <p className="mb-2">
            Thank you for asking! Here are a couple ways you can help:
          </p>
          <ul>
            <li>
              Point us toward great people through our{" "}
              <a target="_blank" href={TC_RECOMMENDATION} className="text-link">
                recommendation form
              </a>
              . Events are nothing without their people, as they say, so any
              help bringing in fantastic attendees is extremely appreciated.
            </li>
            <li>
              You can sponsor or donate to the event, as an individual or as an
              organization. Check out our{" "}
              <Link href="/sponsorship" className="text-link">
                sponsorship page
              </Link>{" "}
              to learn more, and reach out to Rachel at{" "}
              <a
                target="_blank"
                href="mailto:rachel@goldengateinstitute.org"
                className="text-link"
              >
                rachel@goldengateinstitute.org
              </a>{" "}
              or schedule a call with her{" "}
              <a
                target="_blank"
                className="text-link"
                href="https://calendly.com/rachel-weinberg/30min"
              >
                here
              </a>{" "}
              if you'd like to pursue sponsorship or donate.
            </li>
          </ul>
        </Toggle>
        <Toggle title="Who's running this event?">
          <p className="mb-2">
            The Curve 2025 is co-hosted by the{" "}
            <a
              target="_blank"
              href="https://goldengateinstitute.org"
              className="text-link"
            >
              Golden Gate Institute for AI
            </a>{" "}
            and{" "}
            <a
              target="_blank"
              href="https://manifund.org"
              className="text-link"
            >
              Manifund
            </a>
            .
          </p>
        </Toggle>
      </div>
    </div>
  );
}
