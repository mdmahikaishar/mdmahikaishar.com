"use client"
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/libs/motion";

export default function Section(props: {
  title: string,
  subtitle: string,
  className?: string,
  containerClass?: string,
  children?: ReactNode
}) {
  return (
    <section className={props.className + " " + "section"} id="about">
      <motion.h3 className="sectionSubtitle" {...fadeIn({ mode: "view", direction: "bottom", delay: .25 })}>
        {props.subtitle}
      </motion.h3>
      <motion.h2 className="sectionTitle" {...fadeIn({ mode: "view", direction: "bottom", })}>
        {props.title}
      </motion.h2>

      <div className={props.containerClass + " " + "container"}>
        {props.children}
      </div>
    </section>
  );
}
