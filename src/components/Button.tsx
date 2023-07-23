import React from "react";

interface Props {
  variant: "primary" | "secondary" | "toggler";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  text?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button = ({
  variant,
  type = "button",
  disabled = false,
  text,
  onClick,
  children,
  className = "",
}: Props) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${variant} ${
        variant !== "toggler"
          ? "rounded-full px-6 py-2 font-medium tracking-wide transition-shadow hover:shadow-lg hover:shadow-gray-300 disabled:opacity-50 disabled:pointer-events-none"
          : "z-10"
      } ${className}`}>
      {text}
      {children}
    </button>
  );
};

export default Button;
