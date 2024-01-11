import React from "react";
import { FaCheck } from "react-icons/fa";

export interface IExperienceItem {
  id: string;
  name: string;
  short: string;
}

export default function ExperienceCardItem({ name, short }: IExperienceItem) {
  return (
    <div className="experienceCardItem">
      <div className="experienceCardIcon">
        <FaCheck />
      </div>
      <div className="experienceCardInfo">
        <h4 className="experienceCardName">{name}</h4>
        <span className="experienceCardShort">{short}</span>
      </div>
    </div>
  );
}
