import React from "react";

const CommingSoon = ({ top, bottom }) => {
  return (
    <div className="bg-white flex flex-col p-4 items-center mx-4 rounded shadow-md dark:bg-[#383838]">
      <p className="capitalize text-3xl">{top}</p>
      <p className="text-xl">{bottom}</p>
    </div>
  );
};

export default CommingSoon;
