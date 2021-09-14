import React from "react";
import Image from "next/image";
import {
  TwitterIcon,
  InstagramIcon,
  LinkedInIcon,
  EnvelopeIcon,
  YoutubeIcon,
} from "./Icons";

export const Footer = () => {
  return (
    <footer className="bg-blue-500 w-full relative p-4 h-96 mt-40">
      <div className="max-w-screen-lg w mx-auto absolute -top-12 left-1/2 transform -translate-x-2/4 w-10/12 bg-gray-900 rounded-lg text-white flex p-6 items-center text-center">
        <h3 className="text-3xl w-full">Get in Touch</h3>
        <p className="w-full text-center">
          I am currently looking for new opportunities! If you wish to contact
          me please do so via the email provided or message me on one of my
          social media accounts!
        </p>
        <div className="w-full">
          <button className="rounded-full border-2 border-blue-500 px-9 py-4 hover:bg-blue-500 transition duration-200">
            Let's do this
          </button>
        </div>
      </div>
      <div className="w-1/2 mx-auto flex justify-center items-center mt-40">
        <div className="group rounded-full overflow-hidden border-2 border-gray-200 w-12 h-12 flex justify-center text-white mr-8 hover:bg-gray-200 transition duration-200">
          <TwitterIcon className="w-5 group-hover:text-blue-500 transition duration-200" />
        </div>
        <div className="group rounded-full overflow-hidden border-2 border-gray-200 w-12 h-12 flex justify-center text-white mr-8 hover:bg-gray-200 transition duration-200">
          <InstagramIcon className="w-5 group-hover:text-blue-500 transition duration-200" />
        </div>
        <div className="group rounded-full overflow-hidden border-2 border-gray-200 w-12 h-12 flex justify-center text-white mr-8 hover:bg-gray-200 transition duration-200">
          <LinkedInIcon className="w-5 group-hover:text-blue-500 transition duration-200" />
        </div>
        <div className="group rounded-full overflow-hidden border-2 border-gray-200 w-12 h-12 flex justify-center text-white mr-8 hover:bg-gray-200 transition duration-200">
          <YoutubeIcon className="w-6 group-hover:text-blue-500 transition duration-200" />
        </div>
        <div className="group rounded-full overflow-hidden border-2 border-gray-200 w-12 h-12 flex justify-center text-white mr-8 hover:bg-gray-200 transition duration-200">
          <EnvelopeIcon className="w-5 group-hover:text-blue-500 transition duration-200" />
        </div>
      </div>
    </footer>
  );
};