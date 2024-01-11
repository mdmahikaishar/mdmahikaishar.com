import React from "react";

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
    <button
      className={`workTabButton ${active && "workTabActive"}`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
}
