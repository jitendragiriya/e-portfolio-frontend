import React from "react";
import { Link } from "react-router-dom";

const About = ({ data }) => {
  return (
    <>
      {data && (
        <div className="about flex flex-col max-w-5xl mx-auto items-center px-4">
          <div className="title mb-12 mt-16">
            <h2 className="text-4xl font-medium">About</h2>
          </div>

          <div className="flex flex-col-reverse w-full relative mx-auto md:flex-row">
            <div className="left flex py-4 justify-center items-center md:w-1/2">
              <div className="h-56 w-56 bg-orange-600 rounded-full overflow-hidden flex items-center justify-center">
                <div className="relative h-56 w-32">
                  {data && data.images && data.images[0] && (
                    <img src={data.images[0].url} alt="jitendragiriya" />
                  )}
                </div>
              </div>
            </div>
            <div className="right flex py-4 flex-col md:w-2/4">
              <h1 className="text-4xl font-medium mb-4 capitalize">
                I&apos;m {data && data.name}
              </h1>
              <h3 className="text-2xl font-semibold text-orange-600 mb-4">
                {data && data.profession}
              </h3>
              <p>
                {data && data.briefKnow}
                <Link
                  to={`/resume`}
                  target="0"
                  className="text-orange-600 underline font-medium ml-2"
                >
                  my resume
                </Link>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default About;
