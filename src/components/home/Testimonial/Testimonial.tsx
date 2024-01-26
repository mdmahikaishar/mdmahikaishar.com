"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"
import { TESTIMONIAL_CARDS } from "@/data";
import { Section } from "@/components/common";
import TestimonialCard from "./TestimonialCard";
import styles from "./Testimonial.module.scss";

export default function Testimonial() {
  return (
    <Section title="Testimonial" subtitle="My Reviews"  containerClass={styles.container}>
      <Swiper className={styles.slider} navigation={true} modules={[Navigation]}>
        {TESTIMONIAL_CARDS.map((testimonial) => (
          <SwiperSlide className={styles.slide} key={testimonial.id}>
            <TestimonialCard {...testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
}
