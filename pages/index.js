import Head from "next/head";
import Image from "next/image";
import React from "react";

import profilePicture from "../public/darnellpicture.jpg";

import dbConnect from "../utils/dbConnect";
import Project from "../models/Project";

import fetch from "isomorphic-unfetch";

import {
  NextIcon,
  HTMLIcon,
  CSSIcon,
  JavascriptIcon,
  ReactIcon,
  AdobeXdIcon,
  MongoIcon,
  NodeIcon,
  EnvelopeIcon,
  MapMarkerIcon,
  TwitterIcon,
  LinkedInIcon,
  YoutubeIcon,
  InstagramIcon,
  GithubIcon,
} from "../components/Icons";

import { PencilIcon, CodeIcon, ServerIcon } from "@heroicons/react/solid";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Dashboard } from "../components/Dashboard";
import { ProjectCard } from "../components/ProjectCard";
import { useState, useContext } from "react";
import { Modal } from "../components/Modal";
import { PopupContext } from "../context/ModalContext";
import { ThemeContext } from "../context/ThemeContext";

const URL =
  "https://youtube.googleapis.com/youtube/v3/channels?part=statistics&id=UC_JxE9KiFhLdZa4kIYfqAUg&key=";

export async function getStaticProps() {
  const res = await fetch(`${URL}${process.env.YOUTUBE_API_KEY}`);
  const youtubeData = await res.json();

  await dbConnect();

  const result = await Project.find({});
  const projects = result.map((doc) => {
    const project = doc.toObject();
    project._id = project._id.toString();
    return project;
  });

  // const response = await fetch("http://localhost:3000/api/test", {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });

  // const data = await response.json();
  return {
    props: {
      youtubeData,
      projects,
    },

    revalidate: 60 * 60 * 24,
  };
}
export default function Home({ youtubeData, data, projects }) {
  const [designSkill, setDesignSkill] = useState(false);
  const [modalView, setModalView] = useState(false);

  const { popup, togglePopup } = useContext(PopupContext);
  const { theme } = useContext(ThemeContext);

  const [projectId, setProjectId] = useState("");

  const handleModal = (e) => {
    setProjectId(e.currentTarget.id);
  };

  return (
    <div className={theme}>
      <div className="dark:bg-gray-900">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />

        <section className="mx-auto flex flex-wrap items-center justify-center p-4 h-screen dark:bg-gray-900">
          <div className="max-w-screen-lg text-primary text">
            <p className="dark:text-white text-center text-white bg-blue-500 w-max mx-auto px-8 py-px rounded-md text-lg mb-4 dark:bg-green-500">
              Web Developer
            </p>
            <h1 className="font-bold text-7xl mb-6 text-center mx-auto text-header dark:text-white">
              Darnell Sylvain
            </h1>
            <div className="flex mb-2 justify-center">
              <EnvelopeIcon className="w-4 mr-4 dark:text-white" />
              <p className=" dark:text-white">Darnellsylvain@gmail.com</p>
            </div>
            <div className="flex mb-2 text-center justify-center">
              <MapMarkerIcon className="w-4 mr-4 dark:text-white" />
              <p className="dark:text-white">London</p>
            </div>
            <div className="flex justify-center items-center mt-6">
              <TwitterIcon className="w-5 transition duration-200 mr-4 dark:text-white" />
              <InstagramIcon className="w-5 transition duration-200 mr-4 dark:text-white" />
              <LinkedInIcon className="w-5 transition duration-200 mr-4 dark:text-white" />
              <GithubIcon className="w-5 transition duration-200 mr-4 dark:text-white" />
            </div>
          </div>
        </section>

        <section
          className="p-4 mb-8 flex justify-center flex-wrap max-w-screen-lg mx-auto dark:bg-gray-900"
          id="about"
        >
          <div className="flex items-center justify-end mb-6 w-full">
            <div className="w-48 bg-blue-300 dark:bg-green-300 h-0.5 "></div>
            <h2 className="dark:text-white text-4xl font-semibold text-right ml-6">
              About
            </h2>
          </div>
          <div className="flex flex-wrap justify-center items-center lg:flex-nowrap">
            <div className="">
              <div className="shadow-lg rounded-full h-64 w-64 lg:h-80 lg:w-80 flex flex-wrap  content-center mt-8 mx-auto overflow-hidden">
                <Image
                  src={profilePicture}
                  alt="Picture of the author"
                  className=""
                  width={400}
                  height={600}
                />
              </div>
            </div>

            <p
              className="dark:text-gray-200 max-w-2xl mt-8 text-center md:ml-6"
              id="about"
            >
              Hey, I&apos;m Darnell, a web developer based in London, UK. I
              enjoy bringing ideas to life on the internet through creation of
              websites and applications.
              <br />
              <br /> After obtaining a bachelors degree in Mechanical
              Engineering, I turned my attention to trying to learn a new skill
              which led me to coding. I soon fell in love with coding,
              recognising it&apos;s ability to allow people to innovate, share,
              solve problems and communicate.
              <br />
              <br /> Other than programming, I love gaming, watching football
              and reading books.
            </p>
          </div>
        </section>

        <div className="w-full p-4" id="skills">
          <div className="max-w-screen-lg mx-auto pt-12">
            <div className="flex items-center  mb-6">
              <h2 className="dark:text-white text-4xl font-semibold mr-6">
                Skills
              </h2>
              <div className="w-48 bg-blue-300 dark:bg-green-300 h-0.5 "></div>
            </div>
            <div className="grid lg:grid-cols-3 gap-2 md:gap-5 text-center md:grid-cols-2 grid-cols-1 mx-auto">
              {/* Front-End */}
              <div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg w-80 md:w-full mx-auto">
                  <CodeIcon className="h-9 w-9 text-blue-500 dark:text-green-500 mx-auto" />
                  <h3 className="dark:text-white text-xl font-semibold my-6">
                    Front-End
                  </h3>
                  <p className="dark:text-gray-200">
                    Creating static and dynamic web applications, focusing on
                    good user experiences and great performance. Preference
                    using the React framework.
                  </p>

                  <div className="grid grid-cols-2">
                    <div className="flex items-center mt-5">
                      <NextIcon className="h-8 w-8 min-w-lg mx-4" />
                      <p className="dark:text-gray-200">Next.js</p>
                    </div>
                    <div className="flex items-center mt-5">
                      <ReactIcon className="h-8 w-8 min-w-lg mx-4" />
                      <p className="dark:text-gray-200">React</p>
                    </div>
                    <div className="flex items-center mt-5">
                      <JavascriptIcon className="h-8 w-8 min-w-lg mx-4" />
                      <p className="dark:text-gray-200">Javascript</p>
                    </div>
                    <div className="flex items-center mt-5">
                      <HTMLIcon className="h-8 w-8 min-w-lg mx-4" />
                      <p className="dark:text-gray-200">HTML</p>
                    </div>
                    <div className="flex items-center mt-5">
                      <CSSIcon className="h-8 w-8 min-w-lg mx-4" />
                      <p className="dark:text-gray-200">CSS</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Back-End */}
              <div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg w-80 md:w-full mx-auto">
                  <ServerIcon className="h-9 w-9 text-blue-500 dark:text-green-500 mx-auto" />
                  <h3 className="dark:text-white text-xl font-semibold my-6">
                    Back-end
                  </h3>
                  <p className="dark:text-gray-200">
                    Building back-end servers to be paired with front-end
                    applications, creating powerful API&apos;s, handling data,
                    connecting to databases, and other back-end processes.
                  </p>
                  <div className="grid grid-cols-2">
                    <div className="flex items-center mt-5">
                      <MongoIcon className="h-8 w-8 min-w-lg mx-4" />
                      <p className="dark:text-gray-200">MongoDB</p>
                    </div>
                    <div className="flex items-center mt-5">
                      <NodeIcon className="h-8 w-8 min-w-lg mx-4" />
                      <p className="dark:text-gray-200">Node.js</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* // Design */}
              <div className="">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg w-80 md:w-full mx-auto">
                  <PencilIcon className="h-9 w-9 text-blue-500 dark:text-green-500 mx-auto" />
                  <h3 className="dark:text-white text-xl font-semibold my-6">
                    Design
                  </h3>
                  <p className="dark:text-gray-200">
                    Designing good-looking, intuitive and user-friendly designs.
                    Aiming to make every design responsive to fit on all
                    screens.
                  </p>
                  <div className="grid grid-cols-2">
                    <div className="flex items-center mt-5">
                      <AdobeXdIcon className="h-8 w-8 min-w-lg mx-4" />
                      <p className="dark:text-gray-200">Adobe Xd</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="max-w-screen-lg mx-auto my-20 py-4 px-2" id="projects">
          <div className="flex items-center justify-end mb-6">
            <div className="w-48 bg-blue-300 dark:bg-green-300 h-0.5 "></div>
            <h2 className="dark:text-white text-4xl font-semibold text-right ml-6">
              Projects
            </h2>
          </div>

          {/* <ul className="mx-auto flex flex-wrap justify-center mb-6">
            <li className="dark:text-white m-4 border-b-2 border-blue-300 pb-3 dark:border-green-300">
              All Categories
            </li>
            <li className="dark:text-white m-4 pb-3">Web Design</li>
            <li className="dark:text-white m-4 pb-3">Web App</li>
            <li className="dark:text-white m-4 pb-3">React</li>
            <li className="dark:text-white m-4 pb-3">Next.js</li>
          </ul> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-max mx-auto">
            {projects.map((project) => (
              <div
                id={project._id}
                key={project.id}
                onClick={(e) => {
                  handleModal(e);
                  togglePopup();
                  document.body.classList.add("stopScroll");
                }}
              >
                <ProjectCard
                  name={project.name}
                  type={project.type}
                  image={project.projectImg[0]}
                  className="absolute top-0"
                />
              </div>
            ))}
          </div>
        </div>
        <div id="dashboard">
          <Dashboard data={youtubeData} id="dashboard" />
        </div>

        {popup
          ? projects
              .filter((project) => project._id === projectId)
              .map((project) => (
                <div key={project._id}>
                  <Modal
                    // name={project.name}
                    // description={project.description}
                    // liveUrl={project.liveUrl}
                    // projectImg={project.projectImg}
                    project={project}
                  />
                </div>
              ))
          : null}

        {/* {popup ? <Modal /> : null} */}

        <Footer />
      </div>
    </div>
  );
}
