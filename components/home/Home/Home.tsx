import React from "react";
import Image from "next/image";
import { FaMouse } from "react-icons/fa";
import { HomeSocial } from ".";
import { HOME_SOCIALS } from "@data";

export default function Home() {
  return (
    <section className="home section" id="home">
      <div className="homeContainer container">
        <div className="homeText">
          <span className="homeGreeting">{"Hello, I'm"}</span>
          <h1 className="homeName">Mahi Koishor</h1>
          <span className="homeWork">FullStack Developer</span>

          <div className="homeButtonContainer">
            <a href="/pdf/cv.pdf" className="button buttonOutline">
              Download CV
            </a>
            <a href="#about" className="button">
              About Me
            </a>
          </div>
        </div>

        <div className="homeImgContainer">
          <Image
            src="/images/perfil.png"
            width={200}
            height={300}
            alt="me"
            className="homeImg"
          />
        </div>

        <div className="homeSocialContainer">
          {HOME_SOCIALS.map((social, index) => (
            <HomeSocial {...social} key={index} />
          ))}
        </div>

        <div className="homeScroll">
          <FaMouse />
          <span className="homeScrollText">Scroll Down</span>
        </div>
      </div>
    </section>
  );
}
