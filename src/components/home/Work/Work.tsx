"use client";
import React, { useState } from "react";
import { WORK_CARDS, WORK_TABS } from "@/data";
import { AnimatePresence } from "framer-motion";
import styles from "./Work.module.scss";
import { Section } from "@/components/common";
import WorkTabButton from "./WorkTabButton";
import WorkCard from "./WorkCard";

export default function Work() {
  const [activeTab, setActiveTab] = useState(WORK_TABS[0]);
  const [works, setWorks] = useState(WORK_CARDS);

  const handleTabClick = (name: string) => {
    setActiveTab(name);

    if (name !== "All") {
      const filteredWorks = WORK_CARDS.filter((work) =>
        work.tag.includes(name)
      );
      setWorks(filteredWorks);
      return;
    }
    setWorks(WORK_CARDS);
  };

  return (
    <Section title="Recent Works" subtitle="My Portfolio" containerClass={styles.container}>
      <div className={styles.tab}>
        {WORK_TABS.map((tab, index) => (
          <WorkTabButton
            name={tab}
            active={activeTab === tab}
            onClick={handleTabClick}
            key={index}
          />
        ))}
      </div>

      <div className={styles.content}>
        <AnimatePresence>
          {works.map((work) => (
            <WorkCard {...work} key={work.id} />
          ))}
        </AnimatePresence>
      </div>
    </Section>
  );
}
