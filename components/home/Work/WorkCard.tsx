"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

interface IWorkCard {
  img: string;
  name: string;
  href: string;
}
export default function WorkCard({ img, name, href }: IWorkCard) {
  return (
    <motion.div
      className="workCard"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="workCardImg">
        <Image
          src={img}
          alt={name}
          width={300}
          height={250}
          className="workCardImgContainer"
        />
      </div>
      <h4 className="workCardName">{name}</h4>
      <a href={href} className="workCardLink">
        Deme <FaArrowRight className="workCardIcon" />
      </a>
    </motion.div>
  );
}
