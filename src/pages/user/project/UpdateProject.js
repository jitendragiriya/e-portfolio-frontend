import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormLoading from "../../../components/loader/FormLoading";
import {
  getUserProjectAction,
  userProjectUpdateAction,
  clearError,
} from "../../../Redux/actions/user/userProjectAction";
import { useParams } from "react-router-dom";
import { notifyError, notifySuccess } from "../../../utils/alerts";
import { PROJECT_UPDATE_U_RESET } from "../../../Redux/constants/user/userProjectConstant";
import MetaData from "../../../utils/MetaData";

const UpdateProject = () => {
  const dispatch = useDispatch();
  const { id: paramId } = useParams();
  const [id, setId] = useState("");
  const { loading, error, message } = useSelector(
    (state) => state.userProjectUpdate
  );
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    paramId && setId(paramId);
  }, [paramId]);

  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    projectUrl: "",
  });

  const [images, setImages] = useState([]);

  const { title, description, projectUrl } = inputs;
  const formSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      title,
      description,
      projectUrl,
      images,
    };
    dispatch(userProjectUpdateAction(id, formData));
  };

  useEffect(() => {
    if (id) dispatch(getUserProjectAction(id));
  }, [id]);

  useEffect(() => {
    if (error) {
      notifyError(error);
      dispatch(clearError());
    }
  }, [error]);

  useEffect(() => {
    if (message) {
      notifySuccess(message);
      dispatch({ type: PROJECT_UPDATE_U_RESET });
    }
  }, [message]);

  const createProductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  const onchange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  return (
    <>
      <MetaData title={`${user && user.username} update project`} />
      <div className="bg-[#f9f9f9] dark:bg-[#181818] flex flex-col min-h-vh">
        <div className="w-full max-w-5xl mx-auto ">
          <div className="text-2xl font-semibold text-center p-4">
            <h2>Update Project</h2>
          </div>
          <div className="w-full p-4 my-4">
            <form
              className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 border border-gray-300 p-4 lg:grid-cols-3 dark:border-[#484848] bg-white dark:bg-[#383838]"
              onSubmit={formSubmit}
            >
              <div className="w-full">
                <input
                  type="text"
                  className="w-full p-2 outline-none border md:border-gray-300 dark:border-[#484848] dark:bg-[#282828]"
                  id="title"
                  name="title"
                  placeholder="Project Title"
                  onChange={onchange}
                  value={inputs.title}
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  className="w-full p-2 outline-none border md:border-gray-300 dark:border-[#484848] dark:bg-[#282828]"
                  id="projectUrl"
                  name="projectUrl"
                  placeholder="Project Url"
                  onChange={onchange}
                  value={inputs.projectUrl}
                />
              </div>

              <div className="w-full">
                <textarea
                  className="w-full p-2 outline-none border md:border-gray-300 dark:border-[#484848] dark:bg-[#282828]"
                  id="description"
                  name="description"
                  placeholder="Description"
                  onChange={onchange}
                  value={inputs.description}
                />
              </div>
              <div className="w-full">
                <input
                  className="w-full p-2 outline-none border md:border-gray-300 dark:border-[#484848] dark:bg-[#282828]"
                  id="images"
                  type="file"
                  accept="image/*"
                  onChange={createProductImagesChange}
                  multiple
                  name="images"
                />
              </div>

              <button
                type="submit"
                className="h-10 bg-orange-500 text-white font-medium capitalize"
              >
                {loading ? <FormLoading /> : <>Update</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateProject;
