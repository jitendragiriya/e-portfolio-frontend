import React from "react";

const PageLoader = () => {
  return (
    <div className="fixed top-0 left-0 z-[100] bg-white h-screen w-full flex items-center justify-center dark:bg-[#181818]">
      <div className="relative flex z-[70] mx-auto">
        <div className="relative flex h-12 w-12 border-x-4 rounded-full border-blue-500 animate-spin"></div>
      </div>
    </div>
  );
};

export default PageLoader;
