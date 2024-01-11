import React from "react";
import { IconType } from "react-icons";

interface INavbarLink {
  Icon: IconType;
  href: string;
  active: boolean;
  onClick: (value: string) => void;
}
export default function NavbarLink({
  Icon,
  href,
  active,
  onClick,
}: INavbarLink) {
  return (
    <a
      href={href}
      className={`navLink ${active && "navLinkActive"}`}
      onClick={() => onClick(href)}
    >
      <Icon />
    </a>
  );
}
