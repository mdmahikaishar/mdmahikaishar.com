import React from "react";
import { IconType } from "react-icons";

interface IFooterSocial {
  href: string;
  Icon: IconType;
}
export default function FooterSocial({ Icon, href }: IFooterSocial) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="footerSocial">
      <Icon />
    </a>
  );
}
