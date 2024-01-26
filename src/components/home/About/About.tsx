"use client"
import React from "react";
import Image from "next/image";
import { ABOUT_CARDS, ABOUT_DESCRIBTION } from "@/data";
import styles from "./About.module.scss";
import { Section } from "@/components/common";
import AboutCard from "./AboutCard";
import { motion } from "framer-motion";
import { fadeIn } from "@/libs/motion";

export default function About() {
  return (
    <Section title="About Me" subtitle="My Intro" containerClass={styles.container}>
      <motion.div className={styles.img} {...fadeIn({ mode: "view", direction: "top" })}>
        <Image className={styles.imgContainer} src="/about.jpg" width={300} height={250} alt="mdmahikaishar" />
      </motion.div>

      <div className={styles.text}>
        <div className={styles.cardContainer}>
          {ABOUT_CARDS.map((card, index) => (
            <AboutCard {...card} index={index} key={index} />
          ))}
        </div>

        <p className={styles.describtion}>
          {ABOUT_DESCRIBTION.split('').map((word, index) => (
            <motion.span {...fadeIn({ mode: "view", direction: "right", delay: index * .01 })}>
              {word}
            </motion.span>
          ))}
        </p>
      </div>
    </Section>
  );
}
