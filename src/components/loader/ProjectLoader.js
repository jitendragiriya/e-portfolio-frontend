import React from "react";

const cardCount = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const ProjectLoader = () => {
  return (
    <div className="bg-[#e9e9e9] dark:bg-[#181818]">
      <div className="flex flex-col w-full mx-auto items-start max-w-7xl px-4 md:px-8 lg:px-4 xl:px-0">
        <div className="mt-8 flex items-center p-2 w-fit rounded justify-start bg-white dark:bg-[#282828]">
          <span className="w-32 h-5 bg-[#e9e9e9] dark:bg-[#181818]"></span>
        </div>
        <div className="card grid grid-cols-1 w-full gap-8 flex-wrap my-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:gap-8 xl:gap-12">
          {cardCount &&
            cardCount.map((item) => (
              <div
                key={item}
                className="card w-full bg-white  shadow-lg p-4 rounded max-w-full sm:p-6 dark:bg-[#282828]"
              >
                <div className="bg-[#e9e9e9] dark:bg-[#181818] h-6 w-28 mb-2"></div>
                <div className="h-16 bg-[#e9e9e9] dark:bg-[#181818] mb-2"></div>
                <div className="flex flex-col mt-4 items-end">
                  <span className="w-4/5 h-4 mb-1.5 bg-[#e9e9e9] dark:bg-[#181818]"></span>
                  <span className="w-full h-4 mb-1.5 bg-[#e9e9e9] dark:bg-[#181818]"></span>
                  <span className="w-full h-4 mb-1.5 bg-[#e9e9e9] dark:bg-[#181818]"></span>
                </div>
                <div className="flex flex-col mb-4 items-start">
                  <span className="w-4/5 h-4 bg-[#e9e9e9] dark:bg-[#181818]"></span>
                </div>
                <div className="w-full flex flex-col mb-4">
                  <div className="w-20 h-6 bg-[#e9e9e9] dark:bg-[#181818] mb-2"></div>
                  <div className="flex justify-start gap-2 flex-wrap">
                    <span className="w-20 h-6 bg-[#e9e9e9] dark:bg-[#181818]"></span>
                    <span className="w-20 h-6 bg-[#e9e9e9] dark:bg-[#181818]"></span>
                    <span className="w-10 h-6 bg-[#e9e9e9] dark:bg-[#181818]"></span>
                  </div>
                </div>
                <div className="w-32 h-9 bg-[#e9e9e9] dark:bg-[#181818]"></div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectLoader;
