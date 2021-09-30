import Image from "next/image";
import { useContext } from "react";

import styles from "../styles/Home.module.css";

import { PopupContext } from "../context/ModalContext";

import { TwitterIcon, ExitIcon, GithubIcon, LinkIcon } from "./Icons";

export const Modal = ({ project }) => {
  const { popup, togglePopup } = useContext(PopupContext);
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-75 z-40 flex items-center justify-center">
      <div className="bg-white border rounded-lg w-11/12 max-w-6xl flex justify-center items-center relative h-3/6 px-8 py-3">
        <div
          className={`bg-white w-full h-full overflow-y-scroll justify-between relative rounded-lg md:flex  ${styles.scrollbar}`}
        >
          <div className="w-2/4 py-6 w-full">
            <h2 className="text-3xl">{project.name}</h2>
            <p className="my-4">{project.description}</p>
            <ul className="">
              {project.technologies.map((tech) => {
                return (
                  <li
                    className="inline-block py-2 px-3.5 mr-4 rounded-md mt-1 mb-3 bg-blue-500 text-white"
                    key={tech}
                  >
                    {tech}
                  </li>
                );
              })}
            </ul>
            <div className="my-4 flex">
              <div className="flex flex-col justify-center items-center">
                <a
                  href={project.githubURL}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-full overflow-hidden bg-blue-500 w-12 h-12 flex justify-center hover:bg-white hover:border-white transition duration-200"
                >
                  <GithubIcon className="w-6 group-hover:text-blue-500 transition duration-200 text-white" />
                </a>
                <p className="text-center">Github</p>
              </div>

              {project.liveURL ? (
                <div className="ml-4 flex flex-col justify-center items-center">
                  <a
                    className="group rounded-full overflow-hidden bg-blue-500 w-12 h-12 flex justify-center hover:bg-white hover:border-white transition duration-200"
                    href={project.liveURL}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LinkIcon className="w-6 group-hover:text-blue-500 transition duration-200 text-white" />
                  </a>
                  <p className="text-center">Live</p>
                </div>
              ) : null}
            </div>
          </div>
          <div className="px-8 py-6 w-full">
            {project.projectImg.map((image) => (
              <div key={image} className="relative mb-2 h-full w-full ">
                <Image
                  src={`/${image}`}
                  alt={`Picture of ${project.name}`}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            ))}
            {/* <div className="mb-2">
              <Image
                src={`/${project.projectImg}`}
                alt={`Picture of ${project.name}`}
                layout="responsive"
                width={513}
                height={288}
              />
            </div> */}
          </div>
        </div>
        <div
          className="absolute top-1 right-1 curser-pointer z-50"
          onClick={() => {
            togglePopup();
            document.body.classList.remove("stopScroll");
          }}
        >
          <ExitIcon className="w-3 m-2" />
        </div>
      </div>
    </div>
  );
};
