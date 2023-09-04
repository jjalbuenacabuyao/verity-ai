import React from "react";

interface Props {
  title: string;
}

const Subheading = ({ title }: Props) => {
  return <h2 className="mb-8 text-center text-3xl font-semibold">{title}</h2>;
};

export default Subheading;
