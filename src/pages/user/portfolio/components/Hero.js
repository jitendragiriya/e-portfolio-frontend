import React from "react";

const Hero = ({ data }) => {
  return (
    <>
      {data && (
        <div className="hero flex flex-col items-center justify-between overflow-hidden max-w-6xl mx-auto md:flex-row md:w-full md:justify-between z-20 px-4 md:mt-8 md:mb-12 lg:mb-16 ">
          <div className="left flex items-center">
            <h2 className="relative flex flex-col">
              <div className="mb-4 text-2xl text-orange-600">Hi There...</div>
              <div className="flex mb-4">
                <span className="text-black text-4xl md:text-5xl font-medium mr-4 dark:text-white">
                  I&apos;m
                </span>
                <h3 className="text-orange-600 text-4xl md:text-5xl font-medium capitalize">
                  {data && data.user && data.user.firstname}{" "}
                  {data && data.user && data.user.lastname}
                </h3>
              </div>
              <div className="mb-4 text-black capitalize text-2xl dark:text-white">
                I am a {data && data.profession}
              </div>
              <p>{data && data.shortintro}</p>
            </h2>
          </div>
          <div className="right relative flex justify-center items-center p-4">
            {data && data.images && data.images[0] && (
              <div className="img-box h-56 w-56 bg-orange-600 rounded-full overflow-hidden flex justify-center items-center relative md:h-80 md:w-80 lg:h-96 lg:w-96">
                <img src={data.images[0].url} alt="jitendragiriya" />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
