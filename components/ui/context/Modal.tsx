"use client";
import { createContext, ReactNode, useContext, useState } from "react";
import { Modal } from "../";

interface IModalState {
  state: boolean;
  content: JSX.Element;
  className: string;
}
interface IModalContext {
  showModal: (className: string, content: JSX.Element) => void;
  hideModal: () => void;
}

const ModalContext = createContext({} as IModalContext);

export function ModalContextProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<IModalState>({
    state: false,
    className: "",
    content: <></>,
  });

  const showModal = (className: string, content: JSX.Element) => {
    setState({
      state: true,
      className,
      content,
    });
  };
  const hideModal = () => {
    setState({
      state: false,
      className: "",
      content: <></>,
    });
  };

  return (
    <ModalContext.Provider value={{ showModal, hideModal }}>
      <Modal
        className={state.className}
        state={state.state}
        onClose={hideModal}
      >
        {state.content}
      </Modal>

      {children}
    </ModalContext.Provider>
  );
}

export function useModalContext() {
  return useContext(ModalContext);
}
