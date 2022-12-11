import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LandignPage from "../components/home/LandignPage";
import TopLoadingBar from "../components/loader/TopLoadingBar";
import MetaData from "../utils/MetaData";

const Home = () => {
  const navigate = useNavigate();
  const { progress, isAuthenticated, user } = useSelector(
    (state) => state.user
  );
  useEffect(() => {
    user && user.username != undefined && navigate(`/${user.username}`);
  }, [isAuthenticated]);
  return (
    <>
      <TopLoadingBar loaded={progress} />
      <MetaData title={"home"} />
      <LandignPage />
    </>
  );
};

export default Home;
