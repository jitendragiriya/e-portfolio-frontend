import React, { useState, useEffect } from "react";
import FormLoading from "../components/loader/FormLoading";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userSignup, clearError } from "../Redux/actions/user/userAuthAction";
import TopLoadingBar from "../components/loader/TopLoadingBar";
import MetaData from "../utils/MetaData";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, progress, user, error, isAuthenticated } = useSelector(
    (state) => state.user
  );
  const [show, setShow] = useState(false);
  const [inputs, setInputs] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const showPassword = () => {
    setShow(!show);
  };

  const { username, firstname, lastname, email, password, confirmPassword } =
    inputs;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      username,
      firstname,
      lastname,
      email,
      password,
      confirmPassword,
    };
    dispatch(userSignup(formData));
  };

  const onchange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate(`/${user && user.username}/portfolio`);
    }
  }, [navigate, isAuthenticated]);

  useEffect(() => {
    error && dispatch(clearError());
  }, [error]);
  return (
    <>
      <TopLoadingBar loaded={progress} />
      <MetaData title={"singup"} />
      <div className="w-full bg-[#f9f9f9] dark:bg-[#181818]">
        <div className="w-[500px] max-w-full mx-auto px-4 py-8 sm:py-12">
          <div className="p-4 w-full flex flex-col shadow-lg rounded bg-white dark:bg-[#383838] sm:p-8">
            <div className="w-full mb-8">
              <h1 className="text-2xl font-medium mb-2">Sign up</h1>
              <p className="text-sm">Stay updated on your professional world</p>
            </div>
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="w-full mb-6 relative sm:mb-8">
                <input
                  type="text"
                  id="username"
                  name="username"
                  onChange={onchange}
                  value={inputs.username}
                  placeholder="Username"
                  className="w-full outline-none border border-gray-300 dark:border-[#484848] p-2 focus:border-black dark:bg-[#282828] dark:focus:border-white"
                />
              </div>
              <div className="w-full mb-6 relative sm:mb-8">
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  onChange={onchange}
                  value={inputs.firstname}
                  placeholder="First name"
                  className="w-full outline-none border border-gray-300 dark:border-[#484848] p-2 focus:border-black dark:bg-[#282828] dark:focus:border-white"
                />
              </div>
              <div className="w-full mb-6 relative sm:mb-8">
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  onChange={onchange}
                  value={inputs.lastname}
                  placeholder="Last name"
                  className="w-full outline-none border border-gray-300 dark:border-[#484848] p-2 focus:border-black dark:bg-[#282828] dark:focus:border-white"
                />
              </div>
              <div className="w-full mb-6 relative sm:mb-8">
                <input
                  type="text"
                  id="email"
                  name="email"
                  onChange={onchange}
                  value={inputs.email}
                  placeholder="Email"
                  className="w-full outline-none border border-gray-300 dark:border-[#484848] p-2 focus:border-black dark:bg-[#282828] dark:focus:border-white"
                />
              </div>

              <div className="w-full mb-6 relative sm:mb-8 ">
                <input
                  type={show ? "text" : "password"}
                  id="password"
                  name="password"
                  onChange={onchange}
                  value={inputs.password}
                  placeholder="Password"
                  className="w-full outline-none border border-gray-300 dark:border-[#484848] p-2 focus:border-black dark:bg-[#282828] dark:focus:border-white"
                />
              </div>
              <div className="w-full mb-6 relative flex flex-col items-end sm:mb-8">
                <input
                  type={show ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  onChange={onchange}
                  value={inputs.confirmPassword}
                  placeholder="Confirm password"
                  className="w-full outline-none border border-gray-300 dark:border-[#484848] p-2 focus:border-black dark:bg-[#282828] dark:focus:border-white"
                />
                <span
                  className={
                    show
                      ? "border mt-2 w-fit px-4 py-1 border-gray-300 dark:border-[#585858]  sm:mt-4 select-none cursor-pointer bg-orange-500 text-white"
                      : "border mt-2 w-fit px-4 py-1 border-gray-300 dark:border-[#585858]  sm:mt-4 select-none cursor-pointer"
                  }
                  onClick={showPassword}
                >
                  show
                </span>
              </div>
              <button className="w-full text-center h-10 p-2 bg-orange-500 text-white select-none cursor-pointer">
                {loading ? <FormLoading /> : <>Signup</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
