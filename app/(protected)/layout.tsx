import Navbar from "@/components/navbar";
import React from "react";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout: React.FC<ProtectedLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col gap-y-5 py-4 px-6 items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
        <Navbar />
        {children}
      </div>
    </>
  );
};

export default ProtectedLayout;
