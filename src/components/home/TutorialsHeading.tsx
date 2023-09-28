import React from "react";

interface Props {
  title: string;
  secondary?: boolean;
}

/**
 * Renders an `<h3>` element with a dynamic class name based on the `secondary` prop value.
 * 
 * @param {Object} props - The component props.
 * @param {string} props.title - The main title to be displayed in the heading.
 * @param {boolean} [props.secondary] - Determines whether the heading should have a secondary style.
 * @returns {JSX.Element} The rendered `<h3>` element.
 */

const TutorialsHeading = ({ title, secondary }: Props) => {
  return (
    <h3 className={`mb-8 ${secondary ? "mt-8 text-left" : "mt-4 text-center"} text-3xl font-semibold`}>
      { title }
    </h3>
  );
};

export default TutorialsHeading;
