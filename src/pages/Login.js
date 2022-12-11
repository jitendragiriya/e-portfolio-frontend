import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import FormLoading from "../components/loader/FormLoading";
import { useNavigate } from "react-router-dom";
import { clearError, userLogin } from "../Redux/actions/user/userAuthAction";
import TopLoadingBar from "../components/loader/TopLoadingBar";
import MetaData from "../utils/MetaData";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isAuthenticated, loading, error, progress } = useSelector(
    (state) => state.user
  );
  const [show, setShow] = useState(false);
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const showPassword = () => {
    setShow(!show);
  };

  const { email, password } = inputs;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      email,
      password,
    };

    dispatch(userLogin(formData));
  };

  const onchange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (isAuthenticated) navigate(`/${user && user.username}/portfolio`);
  }, [navigate, isAuthenticated]);

  useEffect(() => {
    error && dispatch(clearError());
  }, [error]);

  return (
    <>
      <TopLoadingBar loaded={progress} />
      <MetaData title={"login"} />
      <div className="w-full bg-[#f9f9f9] dark:bg-[#181818]">
        <div className="w-[500px] max-w-full mx-auto px-4 py-8 sm:py-12">
          <div className="p-4 w-full flex flex-col shadow-lg rounded bg-white dark:bg-[#383838] sm:p-8">
            <div className="w-full mb-8">
              <h1 className="text-2xl font-medium mb-2">Sign in</h1>
              <p className="text-sm">Stay updated on your professional world</p>
            </div>
            <form className="w-full" onSubmit={handleSubmit}>
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
              <div className="w-full mb-6 relative flex flex-col items-end sm:mb-8">
                <input
                  type={show ? "text" : "password"}
                  id="password"
                  name="password"
                  onChange={onchange}
                  value={inputs.password}
                  placeholder="Password"
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
              <div className="w-full mb-4">
                <Link to="/password/forgot" className="text-blue-600 font-sans">
                  forget password?
                </Link>
              </div>
              <button className="w-full text-center h-10 p-2 bg-orange-500 text-white select-none cursor-pointer">
                {loading ? <FormLoading /> : <>Login</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
