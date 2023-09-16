import React from "react";

interface Props {
  title: string;
  secondary?: boolean;
}

const TutorialsHeading = ({ title, secondary }: Props) => {
  return (
    <h3 className={`mb-8 ${secondary ? "mt-8 text-left" : "mt-4 text-center"} text-3xl font-semibold`}>
      { title }
    </h3>
  );
};

export default TutorialsHeading;
