import React from "react";
import { FOOTER_LINKS, SOCIAL_LINKS } from "@/data";
import { Logo, SocialLink } from "..";
import FooterLink from "./FooterLink";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer + " " + "section"}>
      <div className={styles.container + " " + "container"}>
        <Logo />

        <div className={styles.linkContainer}>
          {FOOTER_LINKS.map((link) => (
            <FooterLink {...link} key={link.href} />
          ))}
        </div>

        <div className={styles.socialContainer}>
          {SOCIAL_LINKS.map((link) => (
            <SocialLink className={styles.social} {...link} key={link.href} />
          ))}
        </div>

        <span className={styles.copyright}>©mdmahikaishar2024</span>
      </div>
    </footer>
  );
}
