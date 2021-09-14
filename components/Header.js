import React from "react";
import { useState } from "react";
import styles from "../styles/Home.module.css";

export const Header = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  return (
    <div className="md:container mx-auto flex justify-between p-10 mb-12">
      <div
        className={styles.outer}
        onClick={() => {
          toggleTheme();
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-yellow-300"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clipRule="evenodd"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-100"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
        <div
          className={
            theme === "dark"
              ? `${styles.ball} bg-green-500`
              : `${styles.ball} ${styles.move} bg-blue-500`
          }
        ></div>
        {/* <div className={`${styles.ball} ${styles.move}`}></div> */}
      </div>
      <ul className="flex">
        <li className="ml-10">Dashboard</li>
        <li className="ml-10">Skills</li>
        <li className="ml-10">Projects</li>
        <li className="ml-10">About</li>
      </ul>
    </div>
  );
};
