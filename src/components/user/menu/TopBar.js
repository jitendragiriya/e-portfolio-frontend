import React from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import useDarkMode from "../../../utils/useDarkMode";
import { useSelector } from "react-redux";

const TopBar = () => {
  const [isDarkMode, setTheme] = useDarkMode();
  const { user} = useSelector(state=>state.user);
  return (
    <div className="sticky top-0 h-16 flex items-center justify-between pl-16 pr-4 md:px-8 border-b border-b-gray-300 z-50 w-full bg-white dark:bg-[#282828] dark:border-b-[#484848]">
      {user && user.email}
      <div className="cursor-pointer" onClick={() => setTheme(isDarkMode)}>
        <Brightness4Icon className="text-black dark:text-white" />
      </div>
    </div>
  );
};

export default TopBar;
