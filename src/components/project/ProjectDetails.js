import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PageLoader from "../loader/PageLoader";

const ProjectDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { project: data, loading } = useSelector(
    (state) => state.projectDetail
  );
  const [project, setProject] = useState({});

  useEffect(() => {
    // dispatch(getOneProjectDA(id));
  }, [dispatch, id]);

  useEffect(() => {
    data && setProject(data);
  }, [data]);
  let h = "//";
  return (
    <>
      {loading ? (
        <PageLoader />
      ) : (
        <>
          {project && (
            <div className="py-8">
              <div className="head px-3 sm:px-6 max-w-5xl mx-auto lg:px-0">
                <h1 className="text-3xl font-semibold">
                  {project && project.title}
                </h1>
                <small className="text-sm">
                  published{" "}
                  {project &&
                    project.createdAt &&
                    project.createdAt.slice(0, 10)}
                </small>
              </div>
              {project && project.projectUrl && (
                <div className="relative w-full my-4 p-4 mx-auto max-w-5xl lg:px-0">
                  <a
                    target={"_blank"}
                    href={`${project.projectUrl}/`}
                    className="py-1 px-4 mt-2 w-fit flex bg-orange-600 capitalize font-medium text-white relative"
                  >
                    visit project
                  </a>
                </div>
              )}
              <div className="flex flex-col items-start mt-8 p-3 mx-auto max-w-5xl sm:px-6 lg:px-0">
                <h3 className="font-semibold mb-2 text-lg">Description</h3>
                <p className="text-gray-700 dark:text-[#bcbcbc]">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-col items-start mt-8 p-3 mx-auto max-w-5xl sm:px-6 lg:px-0">
                <h3 className="font-semibold mb-2 text-lg">
                  Tech Used to build project
                </h3>
                <div className="flex justify-start gap-2 flex-wrap">
                  {project &&
                    project.techs &&
                    project.techs.map((i, index) => (
                      <span
                        className="flex border rounded border-gray-500 px-2 cursor-default"
                        key={index}
                      >
                        {i}
                      </span>
                    ))}
                </div>
              </div>
              <div className="flex flex-col items-start mt-8 p-3 mx-auto max-w-5xl sm:px-6  lg:px-0">
                <h3 className="font-semibold mb-2 text-lg">
                  More info uploading soon...
                </h3>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default ProjectDetails;
