import React from "react";
import { ExperienceCardItem } from ".";
import { IExperienceItem } from "./ExperienceCardItem";

interface IExperienceCard {
  name: string;
  abilities: IExperienceItem[];
}
export default function ExperienceCard({ name, abilities }: IExperienceCard) {
  return (
    <div className="experienceCard">
      <h3 className="experienceCardTitle">{name}</h3>

      <div className="experienceCardList">
        {abilities.map((ability) => (
          <ExperienceCardItem {...ability} key={ability.id} />
        ))}
      </div>
    </div>
  );
}
