import React from "react";
import Image from "next/image";

export const ProjectCard = ({ image, className, name, type }) => {
  return (
    <div
      className={`group bg-center bg-cover bg-no-repeat shadow-lg rounded-lg relative h-48 w-80 hover:bg-white overflow-hidden mx-auto cursor-pointer`}
    >
      {/* <div
        className={`mix-blend-hard-light bg-gradient-to-r from-${color}-400 to-${color}-500 p-4 rounded-lg h-full group-hover:bg-gray-900`}
      ></div> */}
      <div className="relative h-full w-full group-hover:opacity-0 group-hover:bg-gray-900 transition duration-200 ">
        <Image
          src={`/${image}`}
          alt="Picture of the author"
          className={className}
          layout="fill"
        />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-2/4 -translate-y-2/4 opacity-0 group-hover:opacity-100 transition duration-200 text-center">
        <p className="mb-4 text-xs">{type}</p>
        <h1 className="text-2xl  text-center">{name}</h1>
      </div>
    </div>
  );
};
