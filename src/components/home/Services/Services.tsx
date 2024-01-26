import React from "react";
import { SERVICE_CARDS } from "@/data";
import styles from "./Services.module.scss";
import { Section } from "@/components/common";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <Section title="What I Offer" subtitle="My Services" containerClass={styles.container}>
      <div className={styles.content}>
        {SERVICE_CARDS.map((service, index) => (
          <ServiceCard {...service} index={index} key={index} />
        ))}
      </div>
    </Section>
  );
}
