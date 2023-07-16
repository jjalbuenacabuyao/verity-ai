import React from 'react'

interface Props {
  variant: "primary" | "secondary" | "toggler";
  type?: "button" | "reset" | "submit";
  text?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ variant, type, text, onClick, children }: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${variant} px-6 py-2 text-sm rounded-full`}
    >
      {text}
      {children}
    </button>
  )
}

export default Button