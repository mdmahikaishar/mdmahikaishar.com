import React from "react";
import { ServiceCard } from ".";
import { SERVICE_CARDS } from "@data";

export default function Services() {
  return (
    <section className="service section" id="service">
      <h3 className="sectionSubtitle">My Services</h3>
      <h2 className="sectionTitle">What I Offer</h2>

      <div className="serviceContainer container">
        <div className="serviceContent">
          {SERVICE_CARDS.map((service, index) => (
            <ServiceCard {...service} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
