"use client"
import React from "react";
import { CONTACT_TALKS } from "@/data";
import styles from "./Contact.module.scss";
import { Section } from "@/components/common";
import ContactTalk from "./ContactTalk";
import ContactForm from "./ContactForm";
import { fadeIn } from "@/libs/motion";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <Section title="Contact Me" subtitle="Get In Touch" containerClass={styles.container}>
      <motion.div className={styles.talkContainer} {...fadeIn({})}>
        <h4 className={styles.title}>Talk to me</h4>

        <div className={styles.talkContent}>
          {CONTACT_TALKS.map((talk, index) => (
            <ContactTalk {...talk} index={index} key={index} />
          ))}
        </div>
      </motion.div>

      <motion.div className={styles.project} {...fadeIn({direction: "right"})}>
        <h4 className={styles.title}>Write me your project</h4>

        <ContactForm />
      </motion.div>
    </Section>
  );
}
