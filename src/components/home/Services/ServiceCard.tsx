"use client";
import React from "react";
import { useModaltic } from "modaltic";
import { SERVICE_DETAILS } from "@/data";
import { FaArrowRight } from "react-icons/fa";
import styles from "./Services.module.scss";
import ServiceModal from "./ServiceModal";
import { fadeIn } from "@/libs/motion";
import { motion } from "framer-motion";

interface IServiceCard {
  id: string;
  name: string;
  href: string;
  index: number
}
export default function ServiceCard({ id, name, href, index }: IServiceCard) {
  const modaltic = useModaltic();

  const handleShowDetails = () => () => {
    const details = SERVICE_DETAILS.find((detail) => detail.serviceId === id)!;

    modaltic.show(
      styles.modal,
      <ServiceModal
        name={name}
        describtion={details.describtion}
        abilities={details.abilities}
      />
    );
  };

  return (
    <motion.div className={styles.card} onClick={handleShowDetails()} {...fadeIn({ mode: "view", delay: index * .25 })}>
      <h4 className={styles.cardName}>{nameSpliter(name)}</h4>
      <span className={styles.cardLink}>
        See more <FaArrowRight className={styles.cardArrow} />
      </span>
    </motion.div>
  );
}

const nameSpliter = (name: string) => {
  const names = name.split(" ");

  return names.map((name, index) => (
    <React.Fragment key={index}>
      {name}
      {(index !== names.length - 1) && <br />}
    </React.Fragment>
  ));
};
