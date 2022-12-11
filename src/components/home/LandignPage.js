import React, { useState } from "react";
import { Link } from "react-router-dom";
import useDarkMode from "../../utils/useDarkMode";
import Brightness4Icon from "@mui/icons-material/Brightness4";

const hamBar = [0, 1, 2];
const LandignPage = () => {
  const [hamburger, setHamburger] = useState(false);
  const showSidebar = () => {
    setHamburger(!hamburger);
  };

  const [theme, setTheme] = useDarkMode();
  return (
    <div className="w-full h-screen bg-[#f1f8fc] py-4 dark:bg-[#192e3a] overflow-hidden">
      {/* nabar for landing page */}
      <header className="header relative bg-red h-16 flex z-40 w-full">
        <div className="flex justify-between h-full w-full mx-auto max-w-6xl items-center relative px-4 sm:px-8 md:px-4">
          <div className="logo">
            <Link to="/">
              <h1 className="text-3xl font-bold text-black dark:text-white capitalize flex">
                portfolioji.com
              </h1>
            </Link>
          </div>
          <nav
            className={`${
              hamburger
                ? "nav-options flex flex-col absolute top-16 left-0 h-52 transition-all w-full items-center overflow-hidden md:relative md:flex-row md:h-fit md:top-0 md:w-fit md:bg-transparent shadow-md bg-[#f1f8fc] py-4 dark:bg-[#192e3a]"
                : "nav-options flex flex-col absolute top-16 left-0 h-0 transition-all w-full items-center overflow-hidden md:relative md:flex-row md:h-fit md:top-0 md:w-fit md:bg-transparent bg-[#f1f8fc] py-4 dark:bg-[#192e3a]"
            }`}
          >
            <Link
              to="/jitendragiriya"
              className="w-full text-center my-2 py-2 font-sans capitalize md:px-4 md:mx-2 text-black dark:text-white whitespace-nowrap font-medium"
            >
              developer
            </Link>

            <Link
              to="/login"
              className="w-full text-center my-2 py-2 font-medium font-sans capitalize md:px-4 md:mx-2 text-black dark:text-white whitespace-nowrap"
            >
              login
            </Link>
            <Link
              to="/signup"
              className="w-full text-center my-2 py-2 font-medium font-sans capitalize md:px-4 md:mx-2 text-black dark:text-white whitespace-nowrap"
            >
              signup
            </Link>
          </nav>
          <div className="header-icons flex items-center">
            <div
              className="hamburger flex flex-col cursor-pointer md:hidden mx-4"
              onClick={showSidebar}
            >
              {hamBar.map((i) => (
                <span
                  key={i}
                  className="w-5 h-0.5 bg-black dark:bg-white my-0.5 rounded"
                />
              ))}
            </div>
            <div className="cursor-pointer" onClick={() => setTheme(theme)}>
              <Brightness4Icon className="text-black dark:text-white" />
            </div>
          </div>
        </div>
      </header>
      {/* main for landing page */}
      <div className=" max-w-6xl mx-auto p-4 h-full">
        <div className="left h-full flex flex-col justify-center md:w-1/2">
          <h1 className="text-3xl leading-normal font-bold mb-6">
            Future Is Here, <br></br>Start Exploring Now.
          </h1>
          <p className="font-medium md:text-xl font-serif">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            placeat ipsam cupiditate, nemo iusto dolores laboriosam minima modi,
            vero dolorem temporibus eos? Nemo tempora ipsam laudantium accusamus
            ab sequi, a commodi placeat voluptate. Repellendus.
          </p>
          <Link
            to="/signup"
            className="mt-10 bg-blue-400 w-fit py-4 px-8 rounded-2xl"
          >
            Get started
          </Link>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default LandignPage;
