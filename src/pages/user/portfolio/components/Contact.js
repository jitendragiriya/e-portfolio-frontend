import React, { useState, useEffect } from "react";
import formValidate from "./validation/ContactForm";
import FormLoading from "../../../../components/loader/FormLoading";
import { useDispatch, useSelector } from "react-redux";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { notifySuccess } from "../../../../utils/alerts";
import { publicContactSaveAction } from "../../../../Redux/actions/public/publicContactAction";
import { useParams } from "react-router-dom";

const Contact = ({ data }) => {
  const dispatch = useDispatch();
  const { user } = useParams();
  const { portfolio } = useSelector((state) => state.publicUserPortfolio);
  const { loading, contact } = useSelector((state) => state.savePublicContact);
  const [inputs, setInputs] = useState({ name: "", email: "", message: "" });
  const [err, setErr] = useState({});

  const onchange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const { name, email, message } = inputs;

  const saveContact = async (e) => {
    e.preventDefault();
    setErr(formValidate(inputs));

    const formData = {
      name,
      email,
      message,
    };
    dispatch(publicContactSaveAction(user, formData));
    setInputs({ name: "", email: "", message: "" });
  };

  useEffect(() => {
    contact && notifySuccess(contact);
  }, [contact]);

  const [contacts, setContacts] = useState({});

  useEffect(() => {
    data && data.contactUrl && setContacts(data.contactUrl);
  }, [data]);

  return (
    <div
      className="contact flex flex-col max-w-5xl mx-auto items-center px-4  mb-8 md:mb-12 lg:mb-16 relative"
      id="contact"
    >
      <div className="title mb-8">
        <h2 className="text-3xl font-medium uppercase md:text-4xl">
          Contact {portfolio && portfolio.user && portfolio.user.firstname}
        </h2>
      </div>

      <div className="items-center w-full md:grid md:grid-flow-row md:grid-cols-2 ">
        {data && (
          <div className="relative w-full max-w-full py-4 flex flex-wrap h-full md:py-0 justify-center">
            {contacts && contacts.github && (
              <div className="bg-white mb-4 p-4 mr-2 w-32 h-32 shadow-md dark:bg-[#484848] rounded items-center flex justify-center flex-col">
                <span className="bg-black h-10 w-10 flex items-center justify-center rounded-full text-white">
                  <GitHubIcon />
                </span>

                <a
                  className="capitalize text-2xl font-semibold"
                  target={"_blank"}
                  href={data.contactUrl.github}
                >
                  github
                </a>
              </div>
            )}
            {contacts && contacts.gmail && (
              <div className="bg-white mb-4 p-4 mr-2 w-32 h-32 shadow-md dark:bg-[#484848] rounded items-center flex justify-center flex-col">
                <span className="bg-orange-500 h-10 w-10 flex items-center justify-center rounded-full text-white">
                  <EmailIcon />
                </span>
                <a
                  className="capitalize text-2xl font-semibold"
                  target={"_blank"}
                  href={data.contactUrl.gmail}
                >
                  gmail
                </a>
              </div>
            )}
            {contacts && contacts.linkedin && (
              <div className="bg-white mb-4 p-4 mr-2 w-32 h-32 shadow-md dark:bg-[#484848] rounded items-center flex justify-center flex-col">
                <span className="bg-blue-500 h-10 w-10 flex items-center justify-center rounded-full text-white">
                  <LinkedInIcon />
                </span>
                <a
                  className="capitalize text-2xl font-semibold"
                  target={"_blank"}
                  href={data.contactUrl.linkedin}
                >
                  Linkedin
                </a>
              </div>
            )}
            {contacts && contacts.facebook && (
              <div className="bg-white mb-4 p-4 mr-2 w-32 h-32 shadow-md dark:bg-[#484848] rounded items-center flex justify-center flex-col">
                <span className="bg-blue-500 h-10 w-10 flex items-center justify-center rounded-full text-white">
                  <FacebookIcon />
                </span>
                <a
                  className="capitalize text-2xl font-semibold"
                  target={"_blank"}
                  href={data.contactUrl.facebook}
                >
                  Facebook
                </a>
              </div>
            )}
            {contacts && contacts.instagram && (
              <div className="bg-white mb-4 p-4 mr-2 w-32 h-32 shadow-md dark:bg-[#484848] rounded items-center flex justify-center flex-col">
                <span className="bg-pink-600 h-10 w-10 flex items-center justify-center rounded-full text-white">
                  <InstagramIcon />
                </span>
                <a
                  className="capitalize text-2xl font-semibold"
                  target={"_blank"}
                  href={data.contactUrl.instagram}
                >
                  Instagram
                </a>
              </div>
            )}
          </div>
        )}

        <div className="relative flex w-full p-4 shadow-lg rounded bg-white dark:bg-[#484848]">
          <form
            method="POST"
            className="relative flex flex-col w-full"
            onSubmit={saveContact}
          >
            <div className="w-full mb-4">
              <input
                type="text"
                placeholder="Name"
                name="name"
                onChange={onchange}
                value={inputs.name}
                className="border-b border-black py-2 outline-none w-full dark:border-white dark:bg-[#484848] focus:border-orange-500"
              />
              <p className="text-sm text-red-500">{err && err.name}</p>
            </div>
            <div className="w-full mb-4">
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={onchange}
                value={inputs.email}
                className="border-b border-black py-2 outline-none w-full dark:border-white dark:bg-[#484848] focus:border-orange-500"
              />
              <p className="text-sm text-red-500">{err && err.email}</p>
            </div>
            <div className="w-full mb-4">
              <textarea
                placeholder="Message"
                name="message"
                onChange={onchange}
                value={inputs.message}
                rows={5}
                className="border-b border-black py-2 outline-none w-full dark:border-white dark:bg-[#484848] focus:border-orange-500"
              ></textarea>
              <p className="text-sm text-red-500">{err && err.message}</p>
            </div>
            <button
              type="submit"
              className="w-fit px-12 h-10 font-medium bg-blue-600 text-white"
            >
              {loading ? <FormLoading /> : "submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
