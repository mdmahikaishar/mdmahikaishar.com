import React from "react";
import { IconType } from "react-icons";
import styles from "./Navbar.module.scss";

interface INavbarLink {
  icon: IconType;
  href: string;
  active: boolean;
  onClick: (value: string) => void;
}
export default function NavbarLink(props: INavbarLink) {
  return (
    <a href={props.href} className={`${styles.link} ${props.active && styles.linkActive}`} onClick={() => props.onClick(props.href)} >
      <props.icon />
    </a>
  );
}
