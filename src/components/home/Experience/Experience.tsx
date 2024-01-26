import React from "react";
import { EXPERIENCE_CARDS } from "@/data";
import styles from "./Experience.module.scss";
import { Section } from "@/components/common";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    <Section title="Expertise" subtitle="My Skills" className={styles.experience} containerClass={styles.container}>
      <div className={styles.content}>
        {EXPERIENCE_CARDS.map((experience, index) => (
          <ExperienceCard {...experience} index={index} key={experience.id} />
        ))}
      </div>
    </Section>
  );
}
