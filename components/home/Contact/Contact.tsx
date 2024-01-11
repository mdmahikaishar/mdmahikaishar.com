import React from "react";
import { ContactForm, ContactTalk } from ".";
import { CONTACT_TALKS } from "@data";

export default function Contact() {
  return (
    <section className="contact section" id="contact">
      <h3 className="sectionSubtitle">Get in touch</h3>
      <h2 className="sectionTitle">Contact Me</h2>

      <div className="contactContainer container">
        <div className="contactTalkContainer">
          <h4 className="contactTitle">Talk to me</h4>

          <div className="contactTalkContent">
            {CONTACT_TALKS.map((talk, index) => (
              <ContactTalk {...talk} key={index} />
            ))}
          </div>
        </div>

        <div className="contactProject">
          <h4 className="contactTitle">Write me your project</h4>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
