import React from "react";

const FormLoading = () => {
  return (
    <div className="h-full w-full flex items-center justify-center bg-transparent">
      <div className="h-7 w-7 rounded-full relative border-4 border-white border-t-gray-500 animate-spin"></div>
    </div>
  );
};

export default FormLoading;
