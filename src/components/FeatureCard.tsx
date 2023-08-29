import React from "react";

interface Props {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard = ({ title, description, icon }: Props) => {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border p-5">
      <div className="flex items-center gap-3">
        <div className="rounded-full bg-blue-100 p-3 text-blue-500">{icon}</div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-slate-500">{description}</p>
    </div>
  );
};

export default FeatureCard;
