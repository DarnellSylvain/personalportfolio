import Image from "next/image";
import { useContext } from "react";

import styles from "../styles/Home.module.css";

import { PopupContext } from "../context/ModalContext";

import { TwitterIcon, ExitIcon } from "./Icons";

export const Modal = ({ name }) => {
  const { popup, togglePopup } = useContext(PopupContext);
  console.log(name);
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-75 z-40 flex items-center justify-center">
      <div className="bg-white border rounded-lg w-11/12 max-w-6xl flex justify-center items-center relative h-3/6 px-8 py-3">
        <div
          className={`bg-white w-full h-full overflow-y-scroll justify-between relative rounded-lg md:flex  ${styles.scrollbar}`}
        >
          <div className="w-2/4 py-6 w-full">
            <h2 className="text-3xl">{name}</h2>
            <p className="my-4">
              A website I designed as part of a UX/UI design course. Designed
              entirely by me, including colours, layout, theme, etc. This
              project is purely based on design and I took the extra step to
              code up the design using React.
            </p>
            <ul className="">
              <li className="inline-block py-2 px-3.5 mr-4 rounded-md mt-1 mb-3 bg-blue-500 text-white">
                React
              </li>
              <li className="inline-block py-2 px-3.5 mr-4 rounded-md mt-1 mb-3 bg-blue-500 text-white">
                React
              </li>
              <li className="inline-block py-2 px-3.5 mr-4 rounded-md mt-1 mb-3 bg-blue-500 text-white">
                React
              </li>
            </ul>
            <div className="my-4 flex">
              <div className="flex flex-col justify-center items-center">
                <div className="group rounded-full overflow-hidden bg-blue-500 w-12 h-12 flex justify-center hover:bg-white hover:border-white transition duration-200">
                  <TwitterIcon className="w-6 group-hover:text-blue-500 transition duration-200 text-white" />
                </div>
                <p className="text-center">Github</p>
              </div>
              <div className="ml-4 flex flex-col justify-center items-center">
                <div className="group rounded-full overflow-hidden bg-blue-500 w-12 h-12 flex justify-center hover:bg-white hover:border-white transition duration-200">
                  <TwitterIcon className="w-6 group-hover:text-blue-500 transition duration-200 text-white" />
                </div>
                <p className="text-center">Live URL</p>
              </div>
            </div>
          </div>
          <div className="px-8 py-6 w-full">
            <div className="mb-2">
              <Image
                src="/supercamp.jpg"
                alt="Picture of the author"
                layout="responsive"
                width={513}
                height={288}
              />
            </div>
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
