import React from "react";

interface Props {
  title: string;
}

/**
 * Renders a subheading with a specified title.
 * 
 * @param {Object} props - The component props.
 * @param {string} props.title - The title to be displayed in the subheading.
 * @returns {JSX.Element} The subheading with the specified title.
 */

const Subheading = ({ title }: Props) => {
  return <h2 className="mb-8 text-center text-3xl font-semibold">{title}</h2>;
};

export default Subheading;
