import React from "react";
import { FooterLink, FooterSocial } from ".";
import { FOOTER_LINKS, FOOTER_SOCIALS } from "@data";

export default function Footer() {
  return (
    <footer className="footer section">
      <div className="footerContainer container">
        <a href="/" className="footerLogo">
          Kaishar
        </a>

        <div className="footerLinkContainer">
          {FOOTER_LINKS.map((link, index) => (
            <FooterLink {...link} key={index} />
          ))}
        </div>

        <div className="footerSocialContainer">
          {FOOTER_SOCIALS.map((social, index) => (
            <FooterSocial {...social} key={index} />
          ))}
        </div>

        <p className="footerCopyright">© AMM Md Mahi Kaishar 2023</p>
      </div>
    </footer>
  );
}
