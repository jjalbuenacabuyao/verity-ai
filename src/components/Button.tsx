import React from "react";

interface Props {
  variant: "primary" | "secondary" | "toggler";
  type?: "button" | "reset" | "submit";
  text?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button = ({ variant, type, text, onClick, children, className }: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${variant} ${
        variant !== "toggler"
          ? "rounded-full px-6 py-2 font-medium tracking-wide"
          : "z-10"
      } ${className}`}>
      {text}
      {children}
    </button>
  );
};

export default Button;
