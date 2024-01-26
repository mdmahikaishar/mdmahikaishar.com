import React from "react";
import styles from "./Footer.module.scss";

export default function FooterLink({ name, href }: {
  href: string;
  name: string;
}) {
  return (
    <a href={href} className={styles.link}>
      {name}
    </a>
  );
}
