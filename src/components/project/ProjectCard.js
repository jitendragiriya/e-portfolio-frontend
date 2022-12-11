import { Link } from "react-router-dom";

const ProjectCard = ({ data }) => {
  return (
    <>
      {data && (
        <div className="card w-full bg-white rounded shadow-lg p-4 max-w-full sm:p-6 dark:bg-[#282828]">
          <small className="bg-red-500 uppercase font-medium rounded px-1 text-sm my-1 text-white w-fit">
            {data.stack} project
          </small>
          <Link to={`/project/${data._id}`}>
            <h2 className="text-2xl font-semibold text-gray-700 h-16 overflow-hidden dark:text-white">
              {data.title}
            </h2>
          </Link>
          <p className="mt-4 mb-2 text-gray-600 dark:text-[#bcbcbc]">
            &emsp; &emsp;{data.description}
          </p>
          <div className="w-full flex flex-col mb-4 cursor-default">
            <h3 className="capitalize font-medium text-gray-700 my-2 dark:text-white">
              tech used
            </h3>
            <div className="flex justify-start gap-2 flex-wrap">
              {data.techs.map((i, index) => (
                <span
                  className="flex border rounded border-gray-500 px-2"
                  key={index}
                >
                  {i}
                </span>
              ))}
              <span>etc...</span>
            </div>
          </div>
          <Link
            to={`/project/${data._id}`}
            className="py-1 px-4 mt-2 w-fit flex bg-blue-500 capitalize font-medium text-white relative transition-all hover:tracking-wide"
          >
           Read more
          </Link>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
