import React, { useContext } from "react";
import Image from "next/image";
import { ThemeContext } from "/context/ThemeContext";
import {
  TwitterIcon,
  InstagramIcon,
  LinkedInIcon,
  EnvelopeIcon,
  YoutubeIcon,
} from "./Icons";

export const Footer = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <footer className="bg-blue-500 dark:bg-green-500 w-full relative p-4 mt-24">
      <div className="max-w-screen-lg w mx-auto absolute -top-12 left-1/2 transform -translate-x-2/4 w-10/12 bg-gray-900 rounded-lg text-white flex flex-wrap p-6 items-center text-center">
        <h3 className="text-white text-3xl w-full ">Get in Touch</h3>
        <p className="text-white w-full text-center mt-6">
          I am currently looking for new opportunities! If you wish to contact
          me please do so via the email provided or message me on one of my
          social media accounts!
        </p>
        <div className="w-full mt-6">
          <button className="rounded-full border-2 border-blue-500 dark:border-green-500 px-9 py-4 hover:bg-blue-500 dark:hover:bg-green-500  transition duration-200">
            Let&apos;s do this
          </button>
        </div>
      </div>
      <div className="mx-auto flex justify-center items-center mt-72">
        <div className="group rounded-full overflow-hidden border-2 border-gray-200 w-12 h-12 flex justify-center text-white mr-3 hover:bg-white hover:border-white transition duration-200">
          <TwitterIcon className="w-5 group-hover:text-blue-500 dark:group-hover:text-green-500 transition duration-200" />
        </div>
        <div className="group rounded-full overflow-hidden border-2 border-gray-200 w-12 h-12 flex justify-center text-white mr-3 hover:bg-white hover:border-white transition duration-200">
          <InstagramIcon className="w-5 group-hover:text-blue-500 dark:group-hover:text-green-500 transition duration-200" />
        </div>
        <div className="group rounded-full overflow-hidden border-2 border-gray-200 w-12 h-12 flex justify-center text-white mr-3 hover:bg-white hover:border-white transition duration-200">
          <LinkedInIcon className="w-5 group-hover:text-blue-500 dark:group-hover:text-green-500 transition duration-200" />
        </div>
        <div className="group rounded-full overflow-hidden border-2 border-gray-200 w-12 h-12 flex justify-center text-white mr-3 hover:bg-white hover:border-white transition duration-200">
          <YoutubeIcon className="w-6 group-hover:text-blue-500 dark:group-hover:text-green-500 transition duration-200" />
        </div>
        <div className="group rounded-full overflow-hidden border-2 border-gray-200 w-12 h-12 flex justify-center text-white mr-3 hover:bg-white hover:border-white transition duration-200">
          <EnvelopeIcon className="w-5 group-hover:text-blue-500 dark:group-hover:text-green-500 transition duration-200" />
        </div>
      </div>
      <p className="text-center text-white mt-6 text-xs">
        Designed and built by Darnell Sylvain
      </p>
    </footer>
  );
};
