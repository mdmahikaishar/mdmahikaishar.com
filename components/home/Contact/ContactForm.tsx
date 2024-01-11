"use client";
import React, { useState } from "react";
import { Input } from "@components/ui";

export default function ContactForm() {
  const [input, setInput] = useState({
    name: "",
    mail: "",
    project: "",
  });

  const handleInputChange = (e: any) => {
    setInput((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <form className="contactForm" onSubmit={handleSubmit}>
      <Input
        type="text"
        title="Name"
        id="name"
        name="name"
        value={input.name}
        placeholder="Your name"
        onChange={handleInputChange}
      />
      <Input
        type="email"
        title="Mail"
        id="mail"
        name="mail"
        value={input.mail}
        placeholder="Your email"
        onChange={handleInputChange}
      />
      <Input
        type="textarea"
        title="Project"
        id="project"
        name="project"
        value={input.project}
        placeholder="Your project idea"
        onChange={handleInputChange}
      />

      <button className="contactButton button">Send Mail</button>
    </form>
  );
}
