import React from "react";
import { FaCheck } from "react-icons/fa";

export default function ServiceModal({
  name,
  describtion,
  abilities,
}: {
  name: string;
  describtion: string;
  abilities: string[];
}) {
  return (
    <>
      <h2 className="serviceModalTitle">{name}</h2>
      <p className="serviceModalDescribtion">{describtion}</p>
      <div className="serviceModalList">
        {abilities.map((ability, index) => (
          <div className="serviceModalItem" key={index}>
            <FaCheck className={"serviceModalIcon"} /> {ability}
          </div>
        ))}
      </div>
    </>
  );
}
