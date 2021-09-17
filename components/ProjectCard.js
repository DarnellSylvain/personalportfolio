import React from "react";
import Image from "next/image";

export const ProjectCard = ({ bgImage, color }) => {
  return (
    <div
      className={`group bg-${bgImage} bg-center bg-cover bg-no-repeat shadow-lg rounded-lg relative h-48 w-80 hover:bg-white overflow-hidden mx-auto`}
    >
      {/* <div
        className={`mix-blend-hard-light bg-gradient-to-r from-${color}-400 to-${color}-500 p-4 rounded-lg h-full group-hover:bg-gray-900`}
      ></div> */}
      <div>
        <Image
          src="/maynoothproject.png"
          alt="Picture of the author"
          className=""
          layout="fill"
        />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-2/4 -translate-y-2/4 opacity-0 group-hover:opacity-100 group-hover:bg-white w-screen py-96">
        <p className="mb-4">Super Camp</p>
        <h1 className="text-2xl">Hello</h1>
      </div>
    </div>
  );
};
