"use client"
import React from "react";
import { IconType } from "react-icons";
import { FaArrowRight } from "react-icons/fa";
import styles from "./Contact.module.scss";
import { motion } from "framer-motion";
import { fadeIn } from "@/libs/motion";

interface IContactTalk {
  name: string;
  icon: IconType;
  short: string;
  href: string;
  index: number
}
export default function ContactTalk(props: IContactTalk) {
  return (
    <motion.a href={props.href} target="_blank" rel="noreferrer" {...fadeIn({mode: "view", delay: props.index * .25 })}>
      <div className={styles.talk}>
        <props.icon className={styles.talkIcon} />
        <h4 className={styles.talkName}>{props.name}</h4>
        <p className={styles.talkShort}>{props.short}</p>
        <span className={styles.talkLink}>
          Write me <FaArrowRight className={styles.talkArrow} />
        </span>
      </div>
    </motion.a>
  );
}
