import React, { useEffect, useState } from "react";
import About from "../components/home/About";
import { useDispatch, useSelector } from "react-redux";
import { getAdminPortfolioPublicAction } from "../Redux/actions/public/publicAction";
import PageLoader from "../components/loader/PageLoader";

const AboutPage = () => {
  const dispatch = useDispatch();
  const { portfolio, loading } = useSelector(
    (state) => state.adminPortfolio
  );
  const [aboutMe, setAboutMe] = useState({});
  useEffect(() => {
    dispatch(getAdminPortfolioPublicAction());
  }, [dispatch]);

  useEffect(() => {
    setAboutMe(portfolio);
  }, [portfolio]);
  return (
    <>
      {loading ? (
        <PageLoader />
      ) : (
        <>
          {aboutMe ? (
            <div className="min-h-[calc(100vh-8.1rem)]">
              <About data={aboutMe} />
            </div>
          ) : (
            <></>
          )}
        </>
      )}
    </>
  );
};

export default AboutPage;
