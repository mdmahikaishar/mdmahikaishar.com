// "use client";
import React from "react";
import { FaCheck } from "react-icons/fa";
import styles from "./Experience.module.scss";
// import { motion } from "framer-motion";
// import { fadeIn } from "@/libs/motion";

export interface IExperienceItem {
  id: string;
  name: string;
  short: string;
  index?: number,
}

export default function ExperienceCardItem({ name, short }: IExperienceItem) {
  return (
    <div className={styles.cardItem}>
      <div className={styles.cardIcon}>
        <FaCheck />
      </div>
      <div className={styles.cardInfo}>
        <h4 className={styles.cardName}>{name}</h4>
        <span className={styles.cardShort}>{short}</span>
      </div>
    </div>
  );
}
