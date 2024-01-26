"use client"
import React from "react";
import ExperienceCardItem, { IExperienceItem } from "./ExperienceCardItem";
import styles from "./Experience.module.scss";
import { motion } from "framer-motion";
import { fadeIn } from "@/libs/motion";

interface IExperienceCard {
  name: string;
  abilities: IExperienceItem[];
  index: number
}

export default function ExperienceCard({ name, abilities, index }: IExperienceCard) {
  return (
    <motion.div className={styles.card} {...fadeIn({ mode: "view", delay: index * .25 })}>
      <h3 className={styles.cardTitle}>{name}</h3>

      <div className={styles.cardList}>
        {abilities.map((ability, index) => (
          <ExperienceCardItem {...ability} index={index} key={ability.id} />
        ))}
      </div>
    </motion.div>
  );
}
