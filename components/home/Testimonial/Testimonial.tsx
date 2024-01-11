"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { TestimonialCard } from ".";
import { TESTIMONIAL_CARDS } from "@data";

export default function Testimonial() {
  return (
    <section className="testimonial section" id="testimonial">
      <h3 className="sectionSubtitle">My Reviews</h3>
      <h2 className="sectionTitle">Testimonial</h2>

      <div className="testimonialContainer container">
        <Swiper
          className="testimonialSlider"
          navigation={true}
          modules={[Navigation]}
        >
          {TESTIMONIAL_CARDS.map((testimonial) => (
            <SwiperSlide className="testimonialSlide" key={testimonial.id}>
              <TestimonialCard {...testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
