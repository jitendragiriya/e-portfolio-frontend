import React from "react";
import ProjectCard from "../../../../components/user/project/ProjectCard";

const Project = ({ data }) => {
  return (
    <>
      {data && (
        <div className="flex flex-col max-w-5xl mx-auto items-center px-4 mb-8 md:mb-12 lg:mb-16 relative">
          <div className="title mb-8">
            <h2 className="text-3xl font-medium uppercase md:text-4xl">
              Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 w-full sm:grid-cols-2 md:grid-cols-3">
            {data.map((item, index) => (
              <ProjectCard key={item._id} project={item} prNo={index} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Project;
