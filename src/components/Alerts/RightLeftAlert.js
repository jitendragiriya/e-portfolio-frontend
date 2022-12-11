import React, { useState, useEffect } from "react";

const RightLeftAlert = ({ Message }) => {
  const [msgBox, setMsgBox] = useState(false);
  const [msg, setMsg] = useState([]);

  function close(index) {
    delete msg[index];
    setMsg([...msg]);
  }

  const maxlen = 70;

  useEffect(() => {
    setMsgBox(true);
    if (typeof Message === "string") {
      setMsg([...msg, Message]);
    } else {
      let arr = [];
      arr.push(...Message);
      let setMsgArr = new Set([...msg, ...arr]);
      setMsg([...setMsgArr]);
    }
  }, [Message]);
  
  return (
    <>
      {msgBox && Message && (
        <div className="h-fit w-full max-w-sm fixed flex top-0 right-0 z-[60] bg-transparent flex-col items-end mt-16 p-2 sm:p-4">
          {msg &&
            msg.map((item, index) => {
              return (
                <div
                  key={index}
                  className={
                    msgBox && item
                      ? "h-14 relative w-full bg-white dark:bg-[#383838] mb-2 max-w-sm rounded p-2 flex items-center justify-between shadow-md"
                      : "h-14 relative w-full bg-white dark:bg-[#383838] mb-2 max-w-sm rounded p-2 hidden items-center justify-between shadow-md"
                  }
                >
                  <div className="mes flex w-[calc(100%-2rem)] h-full items-center leading-5 overflow-hidden cursor-default">
                    <p className="text-black dark:text-white capitalize">
                      {item && item.length > maxlen
                        ? item.substring(0, maxlen - 3) + "..."
                        : item}
                    </p>
                  </div>
                  <div
                    className="flex h-4 w-4 cursor-pointer relative flex-col items-center justify-center"
                    onClick={() => close(index)}
                  >
                    <span className="w-full h-0.5 absolute rotate-45 bg-black my-0.5 rounded dark:bg-white" />
                    <span className="w-full h-0.5 absolute -rotate-45 bg-black my-0.5 rounded dark:bg-white" />
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </>
  );
};

export default RightLeftAlert;
