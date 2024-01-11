import React from "react";
import { IconType } from "react-icons";

interface IHomeSocial {
  href: string;
  Icon: IconType;
}
export default function HomeSocial({ Icon, href }: IHomeSocial) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="homeSocial">
      <Icon />
    </a>
  );
}
