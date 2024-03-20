"use client";

import { ClimbingBoxLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full ">
      <ClimbingBoxLoader color="#2a30c4" size={35} />
    </div>
  );
};

export default Loader;
