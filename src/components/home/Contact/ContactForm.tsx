"use client";
import React, { useRef } from "react";
import { Input } from "@/components/ui";
import styles from "./Contact.module.scss";
import { useRefsExtractor } from "react-hook-bag";

export default function ContactForm() {
  const refs= {
    name: useRef({} as HTMLInputElement),
    mail: useRef({} as HTMLInputElement),
    project: useRef({} as HTMLTextAreaElement),
  };


  const handleSubmit = (e: any) => {
    e.preventDefault();

    const data = useRefsExtractor(refs, (ref) => ref.current.data);
    console.log(data);    
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        type="text"
        title="Name"
        id="name"
        name="name"
        placeholder="Your name"
        ref={refs.name}
      />
      <Input
        type="email"
        title="Mail"
        id="mail"
        name="mail"
        placeholder="Your email"
        ref={refs.mail}
      />
      <Input
        type="textarea"
        title="Project"
        id="project"
        name="project"
        placeholder="Your project idea"
        ref={refs.project}
      />

      <button className={styles.contactButton + " " + "button"}>Send Mail</button>
    </form>
  );
}
