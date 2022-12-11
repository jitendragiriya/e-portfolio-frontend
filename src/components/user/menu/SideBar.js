import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// importing icons from react icons
import { AiOutlineHome, AiOutlineProject } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { userHamburgerAction } from "../../../Redux/actions/user/hamburgerAction";

const hamBar = [0, 1, 2];

const SideBar = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const { user } = useSelector((state) => state.user);
  const { hamburger } = useSelector((state) => state.userHamburger);

  const setMenuWidth = () => {
    dispatch(userHamburgerAction());
  };

  useEffect(() => {
    if (typeof hamburger === "boolean") setOpen(hamburger);
  }, [hamburger]);

  return (
    <div
      className={
        open
          ? "fixed left-0 top-0 h-screen w-[288px] overflow-x-hidden bg-white z-[100]  dark:bg-[#282828]"
          : "fixed -left-72 top-0 h-screen w-[288px] overflow-x-hidden bg-white z-[100] md:w-20 md:left-0 dark:bg-[#282828]"
      }
    >
      <div className="flex h-16 w-full items-center px-4 py-2 border-b border-gray-300 overflow-hidden justify-end md:justify-between md:pl-1.5 dark:border-[#484848]">
        <div
          className="fixed top-0 left-0 flex-col cursor-pointer p-2 ml-1 h-16 w-16 flex items-center justify-center md:ml-0 md:relative min-w-[64px]"
          onClick={setMenuWidth}
        >
          {hamBar.map((i) => (
            <span key={i} className="w-5 h-0.5 bg-black my-0.5 dark:bg-white" />
          ))}
        </div>
        <Link
          to={`/${user.username}`}
          className={
            open
              ? "text-3xl font-bold text-orange-600 duration-1000 opacity-100 capitalize"
              : "text-3xl font-bold text-orange-600 duration-200 opacity-0 capitalize"
          }
        >
          {user && user.firstname}
        </Link>
      </div>

      <div className="flex flex-col py-2">
        {/* options */}
        <div className="flex duration-300 hover:bg-black hover:bg-opacity-5 dark:hover:bg-[#484848]">
          <Link
            to={`/${user.username}/portfolio`}
            className="w-full px-6 py-3 h-full text-black dark:text-white font-sans"
          >
            <div className="flex items-center whitespace-nowrap">
              <span className="mr-4 text-2xl">
                <AiOutlineHome />
              </span>
              <span
                className={
                  open
                    ? "capitalize duration-150 opacity-100"
                    : "capitalize duration-150 opacity-0"
                }
              >
                my portfolio
              </span>
            </div>
          </Link>
        </div>

        <div className="flex duration-300 hover:bg-black hover:bg-opacity-5 dark:hover:bg-[#484848]">
          <Link
            to={`/${user.username}/allproject`}
            className="w-full px-6 py-3 h-full text-black dark:text-white font-sans"
          >
            <div className="flex items-center whitespace-nowrap">
              <span className="mr-4 text-2xl">
                <AiOutlineProject />
              </span>
              <span
                className={
                  open
                    ? "capitalize duration-150 opacity-100"
                    : "capitalize duration-150 opacity-0"
                }
              >
                projects
              </span>
            </div>
          </Link>
        </div>
        <div className="flex duration-300 hover:bg-black hover:bg-opacity-5 dark:hover:bg-[#484848]">
          <Link
            to={`/${user.username}/addproject`}
            className="w-full px-6 py-3 h-full text-black dark:text-white font-sans"
          >
            <div className="flex items-center whitespace-nowrap">
              <span className="mr-4 text-2xl">
                <AiOutlineProject />
              </span>
              <span
                className={
                  open
                    ? "capitalize duration-150 opacity-100 space whitespace-nowrap"
                    : "capitalize duration-150 opacity-0 space whitespace-nowrap"
                }
              >
                Add projects
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
