import React from "react";

interface Props {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard = ({ title, description, icon }: Props) => {
  return (
    <div className="flex flex-col gap-2 rounded-2xl border p-4">
      <div className="flex gap-3 items-center">
        <div className="p-3 rounded-full bg-blue-50 text-blue-500">
          {icon}
        </div>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;
