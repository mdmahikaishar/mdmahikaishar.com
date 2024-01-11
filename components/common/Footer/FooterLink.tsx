import React from "react";

interface IFooterLink {
  href: string;
  name: string;
}
export default function FooterLink({ name, href }: IFooterLink) {
  return (
    <a href={href} className="footerLink">
      {name}
    </a>
  );
}
