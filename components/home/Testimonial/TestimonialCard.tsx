import React from "react";
import Image from "next/image";

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
    <div className="testimonialCard">
      <div className="testimonialCardImg">
        <Image
          src={img}
          alt={name}
          width={300}
          height={300}
          className="testimonialCardImgContainer"
        />
      </div>
      <h4 className="testimonialCardName">{name}</h4>
      <p className="testimonialCardDescribtion">{describtion}</p>
    </div>
  );
}
