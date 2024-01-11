import React from "react";
import { IconType } from "react-icons";

interface IAboutCard {
  Icon: IconType;
  name: string;
  time: string;
}
export default function AboutCard({ Icon, name, time }: IAboutCard) {
  return (
    <div className="aboutCard">
      <Icon className="aboutCardIcon" />
      <h4 className="aboutCardName">{name}</h4>
      <span className="aboutCardTime">{time}</span>
    </div>
  );
}
