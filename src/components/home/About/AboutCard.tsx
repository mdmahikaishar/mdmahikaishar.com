"use client";
import React from "react";
import { IconType } from "react-icons";
import { motion } from "framer-motion";
import styles from "./About.module.scss";
import { fadeIn } from "@/libs/motion";

interface IAboutCard {
  icon: IconType;
  name: string;
  time: string;
  index: number
}
export default function AboutCard(props: IAboutCard) {
  return (
    <motion.div
      className={styles.card}
      {...fadeIn({ mode: "view", direction: "top", delay: props.index * .25 })}
      whileHover={{ scale: 1.1 }}
    >
      <props.icon className={styles.cardIcon} />
      <h4 className={styles.cardName}>{props.name}</h4>
      <span className={styles.cardTime}>{props.time}</span>
    </motion.div>
  );
}
