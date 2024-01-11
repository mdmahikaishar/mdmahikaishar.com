"use client";
import React, { useState } from "react";
import { WorkCard, WorkTabButton } from ".";
import { WORK_CARDS, WORK_TABS } from "@data";
import { AnimatePresence } from "framer-motion";

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
    <section className="work section" id="work">
      <h3 className="sectionSubtitle">My Portfolio</h3>
      <h2 className="sectionTitle">Recent Works</h2>

      <div className="workContainer container">
        <div className="workTab">
          {WORK_TABS.map((tab, index) => (
            <WorkTabButton
              name={tab}
              active={activeTab === tab}
              onClick={handleTabClick}
              key={index}
            />
          ))}
        </div>
        <div className="workContent">
          <AnimatePresence>
            {works.map((work) => (
              <WorkCard {...work} key={work.id} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
