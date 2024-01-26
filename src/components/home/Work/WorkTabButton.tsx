import React from "react";
import styles from "./Work.module.scss";

interface WorkTabButton {
  name: string;
  active: boolean;
  onClick: (value: string) => void;
}
export default function WorkTabButton({
  name,
  active,
  onClick,
}: WorkTabButton) {
  return (
    <button className={`${styles.tabButton} ${active && styles.tabActive}`} onClick={() => onClick(name)}>
      {name}
    </button>
  );
}
