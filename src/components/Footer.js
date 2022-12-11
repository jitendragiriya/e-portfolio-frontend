import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex border-t border-t-gray-300 dark:border-t-[#484848] z-40">
      <div className="max-w-6xl flex items-center justify-center mx-auto h-14">
        <p className="sm:text-xl text-gray-700">
          @ 2022 Created By
          <Link target={'_blank'} to={"/jitendragiriya"} className="mx-2 text-blue-400">
           Jitendra giriya
          </Link>
          | All Rights Reserved!
        </p>
      </div>
    </footer>
  );
};

export default Footer;
