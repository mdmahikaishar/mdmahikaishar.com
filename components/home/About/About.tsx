import React from "react";
import Image from "next/image";
import { AboutCard } from ".";
import { ABOUT_CARDS, ABOUT_DESCRIBTION } from "@data";

export default function About() {
  return (
    <section className="about section" id="about">
      <h3 className="sectionSubtitle">My Intro</h3>
      <h2 className="sectionTitle">About Me</h2>

      <div className="aboutContainer container">
        <div className="aboutImg">
          <Image
            src="/images/about.jpg"
            width={300}
            height={250}
            alt=""
            className="aboutImgContainer"
          />
        </div>

        <div className="aboutText">
          <div className="aboutCardContainer">
            {ABOUT_CARDS.map((card, index) => (
              <AboutCard {...card} key={index} />
            ))}
          </div>

          <p className="aboutDescribtion">{ABOUT_DESCRIBTION}</p>
        </div>
      </div>
    </section>
  );
}
