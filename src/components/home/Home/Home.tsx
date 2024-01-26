"use client"
import React from "react";
import Image from "next/image";
import { FaMouse } from "react-icons/fa";
import { SocialLink } from "@/components/common";
import { SOCIAL_LINKS } from "@/data";
import styles from "./Home.module.scss";
import { motion } from "framer-motion";
import { fadeIn } from "@/libs/motion";

export default function Home() {
  return (
    <section className={"section"} id={"home"}>
      <div className={styles.container + " " + "container"} >
        <div className={styles.text}>
          <motion.span className={styles.greeting} {...fadeIn({ mode: "view", })}>
            {"Hello, I'm"}
          </motion.span>
          <motion.h1 className={styles.name} {...fadeIn({ mode: "view", delay: .5 })}>
            Md Mahi Kaishar
          </motion.h1>
          <motion.span className={styles.work} {...fadeIn({ mode: "view", delay: 1 })} >
            Full Stack Developer | Programmer
          </motion.span>

          {/* Buttons */}
          <div className={styles.buttonContainer}>
            <motion.a className="button buttonOutline" href="/mdmahikaishar-cv.pdf" {...fadeIn({ mode: "view", delay: 1.5 })}>
              Download CV
            </motion.a>
            <motion.a className="button" href="#about" {...fadeIn({ mode: "view", delay: 1.7 })}>
              About Me
            </motion.a>
          </div>
        </div>

        {/* Image */}
        <motion.div className={styles.imgContainer} {...fadeIn({ mode: "view", direction: "bottom", delay: 2 })}>
          <Image className={styles.img} src="/perfil.png" width={200} height={300} alt="mdmahikaishar" />
        </motion.div>

        {/* Links */}
        <motion.div className={styles.socialContainer} {...fadeIn({ mode: "view", direction: "top", delay: 2.5 })}>
          {SOCIAL_LINKS.map((social, index) => (
            <SocialLink className={styles.social} {...social} key={index} />
          ))}
        </motion.div>

        {/* Scroll  */}
        <motion.div className={styles.scroll} {...fadeIn({ mode: "view", direction: "top", delay: 3 })}>
          <FaMouse />
          <span className={styles.scrollcrollText}>Scroll Down</span>
        </motion.div>
      </div >
    </section >
  );
}
