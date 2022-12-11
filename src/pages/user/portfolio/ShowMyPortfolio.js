import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { useDispatch, useSelector } from "react-redux";
import PageLoader from "../../../components/loader/PageLoader";
import { useParams } from "react-router-dom";
import {
  clearError,
  getUserPortfolioPublicAction,
} from "../../../Redux/actions/public/publicPortfolioAction";
import NotFound404 from "../../NotFound404";
import Project from "./components/Project";
import { getPublicAllProjectAction } from "../../../Redux/actions/public/publicProjectAction";
import TopLoadingBar from "../../../components/loader/TopLoadingBar";
import MetaData from "../../../utils/MetaData";

const ShowMyPortfolio = () => {
  const { user } = useParams();
  const dispatch = useDispatch();
  const { portfolio, error, progress } = useSelector(
    (state) => state.publicUserPortfolio
  );
  const { user: username } = useSelector((state) => state.user);
  const { allproject } = useSelector((state) => state.publicUserAllProject);
  const [aboutme, setAboutme] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    dispatch(getUserPortfolioPublicAction(user));
    dispatch(getPublicAllProjectAction(user));
  }, []);

  useEffect(() => {
    setAboutme(portfolio);
  }, [portfolio]);

  useEffect(() => {
    setProjects(allproject);
  }, [allproject]);

  useEffect(() => {
    dispatch(clearError());
  }, [error]);
  return (
    <>
      <TopLoadingBar loaded={progress} />
      <MetaData title={username && username.username} />
      {aboutme && Object.keys(aboutme).length > 0 ? (
        <div className="w-full bg-[#fcf2e8] dark:bg-black relative py-4">
          <Hero data={aboutme} />
          <About data={aboutme} />
          <Skills data={aboutme} />
          {projects && projects.length > 0 && <Project data={projects} />}
          <Contact data={aboutme} />
        </div>
      ) : (
        <NotFound404 />
      )}
    </>
  );
};

export default ShowMyPortfolio;
