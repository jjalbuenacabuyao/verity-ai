import React from "react";
import { TailSpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="grid gap-3 text-center lg:pt-10">
      <TailSpin
        height="40"
        width="40"
        color="#0ea5e9"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass="justify-center"
        visible={true}
      />
      <span>Loading</span>
    </div>
  );
};

export default Loader;
