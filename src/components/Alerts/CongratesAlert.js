import React, { useState, useEffect } from "react";

const CongratesAlert = ({ Message }) => {
  const [msg, setMsg] = useState(Message);
  const [msgBox, setMsgBox] = useState(true);

  const close = () => {
    setMsgBox(!msgBox);
  };

  useEffect(() => {
    if (Message) {
      if (!msgBox) setMsgBox(true);
      setMsg(Message);
    }
  }, [Message]);

  return (
    <div className={msgBox && msg ? "flex" : "hidden"}>
      <div
        className="h-full w-full fixed top-0 left-0 z-40 bg-black opacity-20"
        onClick={close}
      ></div>
      <div className="w-10/12 overflow-hidden z-40 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-green-400 min-h-[300px] flex items-center justify-between p-3 rounded h-fit max-w-lg">
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col items-center mb-4">
            <h3 className="text-3xl font-medium  mb-2">Congrates!</h3>
            <p className="text-lg font-normal">{Message}</p>
          </div>

          <div className="circle-container w-fit h-fit flex justify-center items-center">
            <div className="circle relative h-24 w-24 rounded-full flex justify-center items-center bg-green-800">
              <div className="circle-upper h-20 w-20 bg-white rounded-full">
                <span className="absolute h-2 bg-green-800 w-6 left-6 top-12 rotate-45 origin-top"></span>
                <span className="absolute h-2 bg-green-800 w-11 left-7 top-10 -rotate-45 origin-top"></span>
              </div>
            </div>
          </div>
          <div
            className="close relative flex mt-4 w-fit items-center justify-center"
            onClick={close}
          >
            <button className="relative px-4 py-1 w-20 font-medium cursor-pointer bg-orange-400 rounded text-white border border-white capitalize select-none">
              close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CongratesAlert;
