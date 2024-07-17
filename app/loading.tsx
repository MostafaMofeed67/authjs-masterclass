"use client";

import { GridLoader } from "react-spinners";

const LayoutLoading = () => {
  return (
    <div className="h-full flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <GridLoader color="#fff" />
    </div>
  );
};

export default LayoutLoading;
