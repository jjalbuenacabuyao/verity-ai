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
      className={variant}
    >
      {text}
      {children}
    </button>
  )
}

export default Button