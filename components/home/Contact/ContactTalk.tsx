import React from "react";
import { IconType } from "react-icons";
import { FaArrowRight } from "react-icons/fa";

interface IContactTalk {
  name: string;
  Icon: IconType;
  short: string;
  href: string;
}
export default function ContactTalk({ name, Icon, short, href }: IContactTalk) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <div className="contactTalk">
        <Icon className="contactTalkIcon" />
        <h4 className="contactTalkName">{name}</h4>
        <p className="contactTalkShort">{short}</p>
        <span className="contactTalkLink">
          Write me <FaArrowRight className="contactTalkArrow" />
        </span>
      </div>
    </a>
  );
}
