import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound404 from "./pages/NotFound404";
import AllContact from "./pages/user/contact/AllContact";
import TopBar from "./components/user/menu/TopBar";
import SideBar from "./components/user/menu/SideBar";
import BottomBar from "./components/user/menu/BottomBar";
import Allproject from "./pages/user/project/Allproject";
import AddProject from "./pages/user/project/AddProject";
import UpdateProject from "./pages/user/project/UpdateProject";
import { loggedInUser } from "./Redux/actions/user/userAuthAction";
import store from "./Redux/store";
import { useSelector } from "react-redux";
import ShowMyPortfolio from "./pages/user/portfolio/ShowMyPortfolio";
import { ToastContainer } from "react-toastify";
import AllAboutMe from "./pages/user/about/AllAboutMe";
import ForgotPassword from "./pages/user/ForgotPassword";

const App = () => {
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const { hamburger } = useSelector((state) => state.userHamburger);
  useEffect(() => {
    // store.dispatch(loggedInUser());
  }, []);

  //setting tostify darkmode
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setIsDark(true);
    }
  }, []);

  //setting sidebar full width
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof hamburger === "boolean") setOpen(hamburger);
  }, [hamburger]);

  return (
    <Router>
      <Routes>
        {/* public routes are here */}
        <Route
          exact
          path="/"
          element={
            <>
              <Home />
            </>
          }
        ></Route>
        <Route
          exact
          path="/:user"
          element={
            <>
              <Navbar />
              <ShowMyPortfolio />
              <Footer />
            </>
          }
        ></Route>
        <Route
          exact
          path="/login"
          element={
            <>
              <Navbar />
              <Login />
              <Footer />
            </>
          }
        />
        <Route
          exact
          path="/signup"
          element={
            <>
              <Navbar />
              <Signup />
              <Footer />
            </>
          }
        ></Route>
        <Route
          exact
          path="/forgotpassword"
          element={
            <>
              <Navbar />
              <ForgotPassword />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="*"
          element={
            <>
              <Navbar />
              <NotFound404 />
              <Footer />
            </>
          }
        />

        {/* user routes are here */}
        {user && user.role === "user" && isAuthenticated && (
          <>
            <Route
              exact
              path={`/${user.username}/allcontact`}
              element={
                <>
                  <SideBar />
                  <div className={open ? "gbl-adm-full" : "gbl-adm-Nfull"}>
                    <TopBar />
                    <AllContact />
                    <BottomBar />
                  </div>
                </>
              }
            />
            <Route
              exact
              path={`/${user.username}/allproject`}
              element={
                <>
                  <SideBar />
                  <div className={open ? "gbl-adm-full" : "gbl-adm-Nfull"}>
                    <TopBar />
                    <Allproject />
                    <BottomBar />
                  </div>
                </>
              }
            />
            <Route
              exact
              path={`/${user.username}/addproject`}
              element={
                <>
                  <SideBar />
                  <div className={open ? "gbl-adm-full" : "gbl-adm-Nfull"}>
                    <TopBar />
                    <AddProject />
                    <BottomBar />
                  </div>
                </>
              }
            />
            <Route
              exact
              path={`/${user.username}/portfolio`}
              element={
                <>
                  <SideBar />
                  <div className={open ? "gbl-adm-full" : "gbl-adm-Nfull"}>
                    <TopBar />
                    <AllAboutMe />
                    <BottomBar />
                  </div>
                </>
              }
            />
            <Route
              exact
              path={`/${user.username}/project/update/:id`}
              element={
                <>
                  <SideBar />
                  <div className={open ? "gbl-adm-full" : "gbl-adm-Nfull"}>
                    <TopBar />
                    <UpdateProject />
                    <BottomBar />
                  </div>
                </>
              }
            />
          </>
        )}
      </Routes>
      <ToastContainer className="mt-16" theme={isDark ? "dark" : "light"} />
    </Router>
  );
};

export default App;
