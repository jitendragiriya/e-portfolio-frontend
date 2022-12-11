import React, { useEffect, useState } from "react";
import ProjectCard from "../components/project/ProjectCard";
import ProjectLoader from "../components/loader/ProjectLoader";
import { useDispatch, useSelector } from "react-redux";
import CommingSoon from "../components/soon/CommingSoon";

const Projects = () => {
  const dispatch = useDispatch();
  const { allproject, loading } = useSelector((state) => state.allProject);
  const [project, setProject] = useState([]);

  useEffect(() => {
    // dispatch(getAllProjectA());
  }, [dispatch]);

  useEffect(() => {
    allproject && setProject(allproject);
  }, [allproject]);

  return (
    <>
      {loading ? (
        <ProjectLoader />
      ) : (
        <section
          className="bg-[#e9e9e9] dark:bg-[#181818] min-h-vh"
          id="projects"
        >
          {project.length > 0 ? (
            <div className="flex flex-col mx-auto w-full items-center max-w-7xl px-4 md:px-8 lg:px-4 xl:px-0">
              <div className="title mt-8 flex w-full justify-start">
                <h1 className="text-3xl font-medium">Projects</h1>
              </div>
              <div className="card grid grid-cols-1 w-full gap-8 flex-wrap my-8 sm:grid-cols-2   md:gap-12 lg:grid-cols-3 lg:gap-8 xl:gap-12">
                {project.map((items) => {
                  return <ProjectCard key={items._id} data={items} />;
                })}
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center relative h-vh">
              <CommingSoon title={"Projects"} />
            </div>
          )}
        </section>
      )}
    </>
  );
};

export default Projects;
