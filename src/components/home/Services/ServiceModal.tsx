import React from "react";
import { FaCheck } from "react-icons/fa";
import styles from "./Services.module.scss";

export default function ServiceModal({
  name,
  describtion,
  abilities,
}: {
  name: string;
  describtion: string;
  abilities: string[];
}) {
  return (
    <>
      <h2 className={styles.modalTitle}>{name}</h2>
      <p className={styles.modalDescribtion}>{describtion}</p>
      <div className={styles.modalList}>
        {abilities.map((ability, index) => (
          <div className={styles.modalItem} key={index}>
            <FaCheck className={styles.modalIcon} /> {ability}
          </div>
        ))}
      </div>
    </>
  );
}
