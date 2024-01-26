import React from "react";
import Image from "next/image";
import styles from "./Testimonial.module.scss";

interface ITestimonialCard {
  img: string;
  name: string;
  describtion: string;
}
export default function TestimonialCard({
  img,
  name,
  describtion,
}: ITestimonialCard) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImg}>
        <Image
          src={img}
          alt={name}
          width={300}
          height={300}
          className={styles.cardImgContainer}
        />
      </div>
      <h4 className={styles.cardName}>{name}</h4>
      <p className={styles.cardDescribtion}>{describtion}</p>
    </div>
  );
}
