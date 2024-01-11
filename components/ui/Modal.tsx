"use client";
import useOutsideClick from "@libs/useOutsideClick";
import { AnimatePresence, motion } from "framer-motion";
import React, { ReactNode, useRef } from "react";
import { FaTimes } from "react-icons/fa";

interface IModal {
  className?: string;
  children?: ReactNode;
  state?: boolean;
  onClose: () => void;
}
export default function ModalWrapper({ state, ...rest }: IModal) {
  return <AnimatePresence>{state && <Modal {...rest} />}</AnimatePresence>;
}

function Modal({ className, state, onClose, children }: IModal) {
  const ref = useRef({} as HTMLDivElement);

  useOutsideClick([ref], !state, onClose);

  return (
    <motion.div
      className="modal"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
    >
      <div className={`modalContainer ${className}`} ref={ref}>
        <button className="modalButton" onClick={onClose}>
          <FaTimes />
        </button>
        {children}
      </div>
    </motion.div>
  );
}
