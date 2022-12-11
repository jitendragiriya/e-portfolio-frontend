import React, { useEffect, useState } from "react";
import LinkIcon from "@mui/icons-material/Link";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { notifySuccess } from "../../../utils/alerts";

import img from "./img-5.jpg";

const ProjectCard = ({ project, prNo }) => {
  const [hover, setHover] = useState(false);
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    copied && notifySuccess("Link copied to clipboard.");
    copied && setCopied(false);
  }, [copied]);

  return (
    <>
      {project && (
        <div className="p-2 bg-white rounded shadow-md w-full h-60 dark:bg-[#383838]">
          <div
            className="relative h-full w-full overflow-hidden userPersonalProjectCard"
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
          >
            {/* {project && project.images && project.images[0] && ( */}
              <img
                src={img}
                className={
                  hover
                    ? "object-cover absolute top-0 left-0 rounded duration-300 w-4/5 h-4/5 z-20"
                    : "object-cover absolute top-0 left-0 h-full w-full rounded duration-300 z-20"
                }
              />
            {/* )} */}
            <h4 className="absolute bottom-0 z-10 text-xl p-2 font-semibold text-gray-800 dark:text-white">
              Project {prNo < 10 ? `0${prNo + 1}` : prNo}
            </h4>
            <div className="absolute right-0 z-10 text-xl font-semibold text-gray-800 flex flex-col">
              {project && project.projectUrl && (
                <CopyToClipboard
                  onCopy={() => setCopied(true)}
                  text={project.projectUrl}
                >
                  <span className="bg-gray-200 h-10 w-10 flex items-center justify-center rounded cursor-pointer m-2">
                    <LinkIcon />
                  </span>
                </CopyToClipboard>
              )}

              {project && project.projectUrl && (
                <a
                  href={`${project.projectUrl}`}
                  className="bg-gray-200 h-10 w-10 flex items-center justify-center rounded cursor-pointer m-2"
                >
                  <VisibilityIcon />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
