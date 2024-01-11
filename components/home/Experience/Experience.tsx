import React from "react";
import { ExperienceCard } from ".";
import { EXPERIENCE_CARDS } from "@data";

export default function Experience() {
  return (
    <section className="experience section" id="experience">
      <h3 className="sectionSubtitle">My Skills</h3>
      <h2 className="sectionTitle">Experiences</h2>

      <div className="experienceContainer container">
        <div className="experienceContent">
          {EXPERIENCE_CARDS.map((experience) => (
            <ExperienceCard {...experience} key={experience.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
