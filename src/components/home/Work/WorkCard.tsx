"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import styles from "./Work.module.scss";

interface IWorkCard {
  img: string;
  name: string;
  href: string;
}
export default function WorkCard({ img, name, href }: IWorkCard) {
  return (
    <motion.div
      className={styles.card}
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1, transition: { duration: .5 } }}
      exit={{ x: 100, opacity: 0 }}
    >
      <div className={styles.cardImg}>
        <Image
          src={img}
          alt={name}
          width={300}
          height={250}
          className={styles.cardImgContainer}
        />
      </div>
      <h4 className={styles.cardName}>{name}</h4>
      <a href={href} className={styles.cardLink}>
        Deme <FaArrowRight className={styles.cardIcon} />
      </a>
    </motion.div>
  );
}
