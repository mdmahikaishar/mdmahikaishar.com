import React from "react";
import { IconType } from "react-icons";

export default function SocialLink(props: { className: string, href: string; icon: IconType;}) {
  return (
    <a href={props.href} target="_blank" rel="noreferrer" className={props.className}>
      <props.icon />
    </a>
  );
}
