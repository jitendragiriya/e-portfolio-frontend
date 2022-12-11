import React, { useState, useEffect } from "react";

const Skills = ({ data }) => {
  const [skill, setSkill] = useState([]);

  useEffect(() => {
    data.skills && setSkill(data.skills);
  }, [data]);

  return (
    <>
      {skill && (
        <div
          className="skills flex flex-col max-w-5xl mx-auto items-center px-4 mb-8 md:mb-12 lg:mb-16 relative"
          id="skills"
        >
          <div className="title mb-12">
            <h2 className="text-3xl font-medium uppercase md:text-4xl">
              Skills
            </h2>
          </div>

          <div className="cards flex flex-wrap justify-center">
            {skill.map((item) => (
              <div
                key={item}
                className="text-center bg-white mb-4 p-4 mr-2 w-fit max-w-xs min-w-[100px] uppercase shadow-md dark:bg-[#484848] rounded cursor-default"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Skills;
