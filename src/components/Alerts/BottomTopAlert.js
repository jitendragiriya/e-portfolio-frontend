import React, { useState, useEffect } from "react";

const BottomTopAlert = ({ Message }) => {
  const [msg, setMsg] = useState(Message);

  useEffect(() => {
    Message && setMsg(Message);
    setTimeout(() => {
      setMsg("");
    }, 5000);
  }, [Message]);

  return (
    <div
      className={
        msg
          ? "flex fixed bottom-0 left-0 w-full z-50 bg-[#282828] rotate-180 dark:bg-[#282828] animate-[botop_5s_ease-in-out_infinite]"
          : "hidden fixed bottom-0 left-0 w-full z-50 bg-[#282828] rotate-180 dark:bg-[#282828] animate-[botop_5s_ease-in-out_infinite]"
      }
    >
      <div className="flex w-full h-full items-center justify-end px-4 rotate-180 py-2 md:px-8">
        <p className="text-white font-normal">{msg}</p>
      </div>
    </div>
  );
};

export default BottomTopAlert;
