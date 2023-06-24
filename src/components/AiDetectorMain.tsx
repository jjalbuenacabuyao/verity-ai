import React, { ReactNode } from "react";
import Aside from "./Aside";
import ResultContainer from "./ResultContainer";

const AiDetectorMain = () => {
  return (
    <main className="mx-6">
      <Aside />
      <ResultContainer />
    </main>
  );
};

export default AiDetectorMain;
