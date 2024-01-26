"use client"
import React, { forwardRef } from "react";
import styles from "./Input.module.scss"
import { motion } from "framer-motion";
import { fadeIn } from "@/libs/motion";

interface IInput {
  type: "text" | "email" | "textarea";
  title: string;
  id: string;

  placeholder?: string;
  name?: string;
  value?: string;
}

export default forwardRef(({ type, title, id, ...rest }: IInput, ref: any) => {
  return (
    <motion.div className={styles.inputField} {...fadeIn({ mode: "view", direction: "right", delay: .5 })}>
      <label className={styles.inputLabel} htmlFor={id}>
        {title}
      </label>

      {type !== "textarea" ? (
        <input
          {...rest}
          className={styles.inputInput}
          id={id}
          type={type}
          ref={ref}
        />
      ) : (
        <textarea
          {...rest}
          className={styles.inputTextarea}
          id={id}
          rows={10}
          ref={ref}
        />
      )}
    </motion.div>
  );
})