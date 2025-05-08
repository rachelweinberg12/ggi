import { Toggle } from "@/components/toggle";
import TypeformPopupButton from "@/components/typeform-popup";
import { TYPEFORM_IDS } from "@/utils/constants";
export function FAQ() {
  return (
    <div className="section-padding theme-classic border-t border-black">
      <div className="text-width-pos">
        <h2 className="mb-4">FAQ</h2>
        <Toggle title="How much does it cost to attend?">
          <p className="mb-2">
            If you’re invited to the conference, you’ll be allowed to choose
            your ticket price among a few options and asked to do so based on
            your ability to pay. Pricing isn’t finalized yet, but we’ll likely
            suggest: $100 for students, $300 for non-profit or government
            employees, $600 for academics and early-career industry, and $900
            for late-career industry.
          </p>
          <p className="mb-2">
            Tickets include 7 meals (dinner Friday, and three meals Saturday and
            Sunday), snacks, drinks, access to all sessions, 24-hour venue
            access, and conference swag.
          </p>
        </Toggle>
        <Toggle title="What is the refund policy?">
          <p className="mb-2">
            Cancel before September 1, 2025, and we’ll refund your ticket price,
            minus a ~3% processing fee.
          </p>
        </Toggle>
        <Toggle title="When will I be able to apply?">
          <p className="mb-2">
            We plan to publish the application and an initial speaker list in
            June.{" "}
            <TypeformPopupButton
              formId={TYPEFORM_IDS.TC_NOTIF}
              buttonText="Sign up here"
              buttonClassName="inline text-link"
            />{" "}
            to be notified when that happens!
          </p>
        </Toggle>
        {/* TODO: Add these blocks back in with the new forms */}
        {/* <Toggle title="What if I'd like to host an event or workshop?">
          <p className="mb-2">
            You can fill out this form. Note that the vast majority, and
            possibly all, of our main content will be initiated by us, but we
            are open to suggestions!
          </p>
          <p className="mb-2">
            There may also be an unconference component of the event, in which
            case attendees will be welcome to host whatever side sessions they
            like.
          </p>
        </Toggle> */}
        <Toggle title="What can I do if I have a friend or colleague who I think should attend?">
          <p className="mb-2">
            Fill out{" "}
            <TypeformPopupButton
              formId={TYPEFORM_IDS.TC_PPL_RECS}
              buttonText="this recommendation form"
              buttonClassName="inline text-link lg:text-base"
            />
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
          <ul className="text-base">
            <li>
              Point us towards great people through our{" "}
              <TypeformPopupButton
                formId={TYPEFORM_IDS.TC_PPL_RECS}
                buttonText="recommendation form"
                buttonClassName="inline text-link"
              />
              . Events are nothing without their people, as they say, so any
              help bringing in fantastic attendees is extremely appreciated.
            </li>
            <li>
              You can sponsor or donate to the event, as an individual or as an
              organization. If you're interested, reach out to Rachel at{" "}
              <a
                href="mailto:rachel@goldengateinstitute.org"
                className="text-link"
              >
                rachel@goldengateinstitute.org
              </a>{" "}
              or schedule a call with her{" "}
              <a
                className="text-link"
                href="https://calendly.com/rachel-weinberg/30min"
              >
                here
              </a>
            </li>
          </ul>
        </Toggle>
        <Toggle title="What do you mean the event is in SF and Berkeley?">
          <p className="mb-2">
            The main conference will be held in Berkeley at{" "}
            <a href="https://lighthaven.space" className="text-link">
              Lighthaven
            </a>
            . However, we'll most likely host our opening reception on Friday
            night in San Francisco, and may have extra side events in San
            Francisco in the week leading up to the main event.
          </p>
        </Toggle>
        <Toggle title="Who's running this event?">
          <p className="mb-2">
            The Curve 2025 is co-hosted by the{" "}
            <a href="https://goldengateinstitute.org" className="text-link">
              Golden Gate Institute for AI
            </a>{" "}
            and{" "}
            <a href="https://manifund.org" className="text-link">
              Manifund
            </a>
            .
          </p>
        </Toggle>
      </div>
    </div>
  );
}
