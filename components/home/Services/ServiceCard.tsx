"use client";
import React from "react";
import { useModalContext } from "@components/ui/context/Modal";
import { ServiceModal } from "./";
import { SERVICE_DETAILS } from "@data";
import { FaArrowRight } from "react-icons/fa";

interface IServiceCard {
  id: string;
  name: string;
  href: string;
}
export default function ServiceCard({ id, name, href }: IServiceCard) {
  const modalContext = useModalContext();

  const handleShowDetails = () => () => {
    const details = SERVICE_DETAILS.find((detail) => detail.serviceId === id)!;

    modalContext.showModal(
      "serviceModal",
      <ServiceModal
        name={name}
        describtion={details.describtion}
        abilities={details.abilities}
      />
    );
  };

  return (
    <div className="serviceCard" onClick={handleShowDetails()}>
      <h4 className="serviceCardName">{nameSpliter(name)}</h4>
      <span className="serviceCardLink">
        See more <FaArrowRight className="serviceCardArrow" />
      </span>
    </div>
  );
}

const nameSpliter = (name: string) => {
  const names = name.split(" ");

  return names.map((name, index) =>
    index !== names.length - 1 ? (
      <React.Fragment key={index}>
        {name}
        <br />
      </React.Fragment>
    ) : (
      <React.Fragment key={index}>{name}</React.Fragment>
    )
  );
};
