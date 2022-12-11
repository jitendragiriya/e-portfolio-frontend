import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormLoading from "../../../components/loader/FormLoading";
import {
  clearError,
  getUserPortfolioAction,
  saveUserContactUrlAction,
  saveUserPersonalInfoAction,
  saveUserProfilePicAction,
  saveUserSkillsAction,
} from "../../../Redux/actions/user/userPortfolioAction";
import { notifyError, notifySuccess } from "../../../utils/alerts";
import TopLoadingBar from "../../../components/loader/TopLoadingBar";
import MetaData from "../../../utils/MetaData";
import {
  SAVE_CONTACT_URL_U_RESET,
  SAVE_PROFILE_PIC_RESET,
  SAVE_P_INFO_U_RESET,
  SAVE_SKILLS_U_RESET,
} from "../../../Redux/constants/user/userPortfolioConstant";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { FaUserCircle } from "react-icons/fa";

const AllAboutMe = () => {
  const dispatch = useDispatch();

  const {
    progress,
    portfolio,
    error: portfolioErr,
  } = useSelector((state) => state.userPortfolio);
  const [myPortfolio, setMYPortfolio] = useState({});

  const { loading, message, error, isupdated } = useSelector(
    (state) => state.saveUserPersonalInfo
  );
  const {
    loading: propicload,
    message: propicmsg,
    error: propicErr,
    isupdated: propicupdate,
  } = useSelector((state) => state.saveUserProfilePic);
  const {
    loading: skillload,
    message: skillmsg,
    error: skillerr,
    isupdated: skillupdate,
  } = useSelector((state) => state.saveUserSkills);
  const {
    loading: contactload,
    message: contactmsg,
    error: contacterr,
    isupdated: contactupdate,
  } = useSelector((state) => state.saveUserContacturl);
  const [inputs, setInputs] = useState({
    profession: "",
    shortintro: "",
    briefintro: "",
  });

  const [url, setUrl] = useState({
    linkedin: "",
    gmail: "",
    github: "",
    facebook: "",
    instagram: "",
  });

  const [images, setImages] = useState([]);
  const [skills, setSkills] = useState([]);
  const [skill, setSkill] = useState("");

  const { profession, shortintro, briefintro } = inputs;
  const { linkedin, gmail, github, facebook, instagram } = url;

  const formProfilePicSubmit = async (e) => {
    e.preventDefault();

    if (images.length < 1) {
      notifyError("Please selected profile picture.");
      return;
    }
    const formData = {
      images,
    };
    dispatch(saveUserProfilePicAction(formData));
  };
  const formIntroSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      profession,
      shortintro,
      briefintro,
    };
    dispatch(saveUserPersonalInfoAction(formData));
  };

  useEffect(() => {
    dispatch(getUserPortfolioAction());
  }, []);

  const formSkillsSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      skills,
    };
    if (skills.length < 1) {
      notifyError("please add you skills");
      return;
    }
    dispatch(saveUserSkillsAction(formData));
  };

  const formContactUrlSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      contactUrl: {
        linkedin,
        github,
        gmail,
        facebook,
        instagram,
      },
    };
    dispatch(saveUserContactUrlAction(formData));
  };

  useEffect(() => {
    portfolio && setMYPortfolio(portfolio);
  }, [portfolio]);

  useEffect(() => {
    if (Object.keys(myPortfolio).length > 0) {
      setSkills([...myPortfolio.skills]);
    }
  }, [myPortfolio]);

  // add skill to skills
  const formSkillAdd = (e) => {
    e.preventDefault();
    if (skill === "") {
      notifyError("Please fill skill");
      return;
    }
    if (skills.includes(skill)) {
      notifyError("This skill is already exist.");
      return;
    }
    setSkills([...skills, skill]);
    setSkill("");
  };

  const deleteSkill = (skill) => {
    const index = skills.indexOf(skill);
    if (index > -1) {
      skills.splice(index, 1); // 2nd parameter means remove one item only
      setSkills([...skills]);
    }
  };

  useEffect(() => {
    if (error || portfolioErr || propicErr || skillerr || contacterr)
      dispatch(clearError());
  }, [error, portfolioErr, propicErr, skillerr, contacterr]);

  useEffect(() => {
    message && notifySuccess(message);
  }, [message]);

  useEffect(() => {
    skillmsg && notifySuccess(skillmsg);
  }, [skillmsg]);

  useEffect(() => {
    propicmsg && notifySuccess(propicmsg);
  }, [propicmsg]);

  useEffect(() => {
    contactmsg && notifySuccess(contactmsg);
  }, [contactmsg]);

  useEffect(() => {
    if (isupdated) {
      dispatch({ type: SAVE_P_INFO_U_RESET });
    }
    if (propicupdate) {
      dispatch({ type: SAVE_PROFILE_PIC_RESET });
    }
    if (skillupdate) {
      dispatch({ type: SAVE_SKILLS_U_RESET });
    }
    if (contactupdate) {
      dispatch({ type: SAVE_CONTACT_URL_U_RESET });
    }
  }, [isupdated, propicupdate, skillupdate, contactupdate]);

  //setting images from local system
  const setImagesfile = (e) => {
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

  //onchange handelers
  const onchange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  const onUrlChange = (e) => {
    setUrl({ ...url, [e.target.name]: e.target.value });
  };
  const onSkillChange = (e) => {
    setSkill(e.target.value);
  };

  return (
    <>
      <TopLoadingBar loaded={progress} />
      <MetaData title={"my portfolio"} />
      <div className="bg-[#f9f9f9] dark:bg-[#181818] flex flex-col min-h-vh">
        <div className="w-full max-w-5xl mx-auto ">
          <div className="text-2xl font-semibold text-center p-4">
            <h2>About me</h2>
          </div>
          <div className="w-full p-4">
            <h3 className="text-xl md:text-2xl mb-4">Profile pic</h3>
            <form
              className="w-full sm:w-96 border rounded border-gray-300 p-4 dark:border-[#484848] bg-white dark:bg-[#383838] flex flex-col items-center"
              onSubmit={formProfilePicSubmit}
            >
              <div className="w-40 h-40 relative mb-4">
                <div className="w-40 h-40 border rounded-full overflow-hidden relative">
                  {portfolio && portfolio.images && portfolio.images[0] ? (
                    <img
                      src={portfolio.images[0].url}
                      alt=""
                      className="absolute top-0 left-0 object-contain h-full w-full"
                    />
                  ) : (
                    <div className="absolute top-0 left-0 object-contain h-full w-full text-black">
                      <FaUserCircle  />
                    </div>
                  )}
                </div>
                <div className="absolute top-1 right-1">
                  <input
                    id="images"
                    type="file"
                    accept="image/*"
                    onChange={setImagesfile}
                    name="images"
                    hidden
                  />
                  <label htmlFor="images">
                    <CameraAltIcon />
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="h-10 w-40 bg-orange-500 text-white font-medium capitalize"
              >
                {propicload ? <FormLoading /> : <>save</>}
              </button>
            </form>
          </div>
          <div className="w-full p-4">
            <h3 className="text-xl md:text-2xl mb-4">Personal Info</h3>
            <form
              className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 border border-gray-300 p-4 lg:grid-cols-3 dark:border-[#484848] bg-white dark:bg-[#383838]"
              onSubmit={formIntroSubmit}
            >
              <div className="w-full">
                <input
                  type="text"
                  className="w-full p-2 outline-none border md:border-gray-300 dark:border-[#484848] dark:bg-[#282828]"
                  id="profession"
                  name="profession"
                  placeholder="Profession"
                  onChange={onchange}
                  value={inputs.profession}
                />
              </div>

              <div className="w-full">
                <textarea
                  className="w-full p-2 outline-none border md:border-gray-300 dark:border-[#484848] dark:bg-[#282828]"
                  id="shortintro"
                  name="shortintro"
                  placeholder="Short Intro"
                  onChange={onchange}
                  value={inputs.shortintro}
                />
              </div>
              <div className="w-full">
                <textarea
                  className="w-full p-2 outline-none border md:border-gray-300 dark:border-[#484848] dark:bg-[#282828]"
                  id="briefintro"
                  name="briefintro"
                  placeholder="Brief Intro"
                  onChange={onchange}
                  value={inputs.briefintro}
                />
              </div>
              <button
                type="submit"
                className="h-10 bg-orange-500 text-white font-medium capitalize"
              >
                {loading ? <FormLoading /> : <>save</>}
              </button>
            </form>
          </div>

          <div className="w-full p-4">
            <h3 className="text-xl md:text-2xl mb-4">My Skills</h3>
            <form
              className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 border border-gray-300 p-4 lg:grid-cols-3 dark:border-[#484848] bg-white dark:bg-[#383838] border-b-0"
              onSubmit={formSkillAdd}
            >
              <div className="w-full">
                <input
                  type="text"
                  className="w-full p-2 outline-none border md:border-gray-300 dark:border-[#484848] dark:bg-[#282828]"
                  id="skill"
                  name="skill"
                  placeholder="Skill"
                  onChange={onSkillChange}
                  value={skill}
                />
              </div>
              <button
                type="submit"
                className="h-10 bg-orange-500 text-white font-medium capitalize"
              >
                add
              </button>
            </form>
            <form
              className="w-full flex flex-wrap border border-gray-300 p-4  dark:border-[#484848] bg-white dark:bg-[#383838]"
              onSubmit={formSkillsSubmit}
            >
              {skills &&
                skills.map((i) => (
                  <div
                    className="w-fit mr-2 mb-2 flex items-center p-2 bg-gray-200 dark:bg-[#484848]"
                    key={i}
                  >
                    <div className="w-fit">{i}</div>
                    <div
                      className="h-4 w-4 ml-4 relative hover:bg-red-500 rounded p-1"
                      onClick={() => deleteSkill(i)}
                    >
                      <span className="h-4/5 w-0.5 bg-black dark:bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45"></span>
                      <span className="h-4/5 w-0.5 bg-black dark:bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45"></span>
                    </div>
                  </div>
                ))}

              <button
                type="submit"
                className="h-10 bg-orange-500 text-white font-medium capitalize w-32"
              >
                {skillload ? <FormLoading /> : <>save</>}
              </button>
            </form>
          </div>

          <div className="w-full p-4">
            <h3 className="text-xl md:text-2xl mb-4">Contact Me</h3>
            <form
              className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 border border-gray-300 p-4 lg:grid-cols-3 dark:border-[#484848] bg-white dark:bg-[#383838]"
              onSubmit={formContactUrlSubmit}
            >
              <div className="w-full">
                <input
                  type="text"
                  className="w-full p-2 outline-none border md:border-gray-300 dark:border-[#484848] dark:bg-[#282828]"
                  id="gmail"
                  name="gmail"
                  placeholder="Gmail Id"
                  onChange={onUrlChange}
                  value={url.gmail}
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  className="w-full p-2 outline-none border md:border-gray-300 dark:border-[#484848] dark:bg-[#282828]"
                  id="linkedin"
                  name="linkedin"
                  placeholder="Likedin Url"
                  onChange={onUrlChange}
                  value={url.linkedin}
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  className="w-full p-2 outline-none border md:border-gray-300 dark:border-[#484848] dark:bg-[#282828]"
                  id="github"
                  name="github"
                  placeholder="Github Url"
                  onChange={onUrlChange}
                  value={url.github}
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  className="w-full p-2 outline-none border md:border-gray-300 dark:border-[#484848] dark:bg-[#282828]"
                  id="facebook"
                  name="facebook"
                  placeholder="Facebook Url"
                  onChange={onUrlChange}
                  value={url.facebook}
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  className="w-full p-2 outline-none border md:border-gray-300 dark:border-[#484848] dark:bg-[#282828]"
                  id="instagram"
                  name="instagram"
                  placeholder="Instagram Url"
                  onChange={onUrlChange}
                  value={url.instagram}
                />
              </div>
              <button
                type="submit"
                className="h-10 bg-orange-500 text-white font-medium capitalize"
              >
                {contactload ? <FormLoading /> : <>save</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllAboutMe;
