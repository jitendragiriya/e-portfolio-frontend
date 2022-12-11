import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import useDarkMode from "../utils/useDarkMode";
import { useSelector, useDispatch } from "react-redux";
import { userLogout } from "../Redux/actions/user/userAuthAction";
import { USER_LOGOUT_RESET } from "../Redux/constants/user/userAuthContant";
import { notifySuccess } from "../utils/alerts";
import { AiOutlineSearch } from "react-icons/ai";

const hamBar = [0, 1, 2];

const Navbar = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, islogout } = useSelector(
    (state) => state.user
  );
  const { portfolio } = useSelector((state) => state.publicUserPortfolio);
  const [hamburger, setHamburger] = useState(false);
  const showSidebar = () => {
    setHamburger(!hamburger);
  };

  //logout the user
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(userLogout());
  };

  useEffect(() => {
    if (islogout) {
      dispatch({ type: USER_LOGOUT_RESET });
      notifySuccess("You are logged out.");
      navigate("/login");
    }
  }, [islogout]);
  const [theme, setTheme] = useDarkMode();

  return (
    <header className="header sticky top-0 left-0 bg-red h-16 flex z-40 w-full shadow-md bg-white dark:bg-[#282828]">
      <div className="flex justify-between h-full w-full mx-auto max-w-6xl items-center relative px-4 sm:px-8 md:px-4">
        <div className="logo">
          <Link to="/">
            {portfolio && portfolio.user ? (
              <h1 className="text-3xl font-bold text-orange-600 uppercase flex">
                {portfolio.user.firstname}
                <span className="text-black dark:text-white hidden lg:flex ml-2">
                  {portfolio.user.lastname}
                </span>
              </h1>
            ) : (
              <h1 className="text-3xl font-bold text-orange-600 capitalize flex">
                Portfolioji.com
              </h1>
            )}
          </Link>
        </div>
        <nav
          className={`${
            hamburger
              ? "nav-options flex flex-col absolute top-16 left-0 h-48 transition-all w-full items-center overflow-hidden md:relative md:flex-row md:h-fit md:top-0 md:w-fit shadow-md md:shadow-none bg-white md:bg-transparent dark:bg-[#282828] md:dark:bg-transparent"
              : "nav-options flex flex-col absolute top-16 left-0 h-0 transition-all w-full items-center overflow-hidden md:relative md:flex-row md:h-fit md:top-0 md:w-fit shadow-md md:shadow-none bg-white md:bg-transparent dark:bg-[#282828] md:dark:bg-transparent"
          }`}
        >
          <Link
            to="/"
            className="w-full text-center my-2 py-2 font-normal font-sans capitalize md:px-4 md:mx-2 text-black dark:text-white whitespace-nowrap"
          >
            Home
          </Link>
          {isAuthenticated ? (
            <button
              className="w-full text-center my-2 py-2 font-normal font-sans capitalize md:px-4 md:mx-2 text-black dark:text-white cursor-pointer whitespace-nowrap"
              onClick={handleLogout}
            >
              logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="w-full text-center my-2 py-2 font-normal font-sans capitalize md:px-4 md:mx-2 text-black dark:text-white whitespace-nowrap"
              >
                login
              </Link>
              <Link
                to="/signup"
                className="w-full text-center my-2 py-2 font-normal font-sans capitalize md:px-4 md:mx-2 text-black dark:text-white whitespace-nowrap"
              >
                signup
              </Link>
            </>
          )}
          {isAuthenticated && user.role && user.role === "user" && (
            <Link
              to={`/${user.username}/portfolio`}
              className="w-full text-center my-2 py-2 font-normal font-sans capitalize md:px-4 md:mx-2 text-black dark:text-white whitespace-nowrap"
            >
              my portfolio
            </Link>
          )}
        </nav>

        {/* search bar */}
        <div className="header-icons flex items-center">
          <div
            className="hamburger flex flex-col cursor-pointer md:hidden mx-4"
            onClick={showSidebar}
          >
            {hamBar.map((i) => (
              <span
                key={i}
                className="w-5 h-0.5 bg-black my-0.5 rounded dark:bg-white"
              />
            ))}
          </div>
          <div className="cursor-pointer" onClick={() => setTheme(theme)}>
            <Brightness4Icon className="text-black dark:text-white" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
