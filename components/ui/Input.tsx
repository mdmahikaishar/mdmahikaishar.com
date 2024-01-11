import React from "react";

interface IInput {
  type: "text" | "email" | "textarea";
  title: string;
  id: string;

  placeholder?: string;
  name?: string;
  value?: string;
  ref?: any;
  onChange: (e: any) => void;
}

export default function Input({ type, title, id, ...rest }: IInput) {
  return (
    <div className="inputField">
      <label className="inputLabel" htmlFor={id}>
        {title}
      </label>

      {type !== "textarea" ? (
        <input type={type} {...rest} id={id} className="inputInput" />
      ) : (
        <textarea className="inputTextarea" {...rest} rows={10} />
      )}
    </div>
  );
}
