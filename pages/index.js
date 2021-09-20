import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Home.module.css";

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
import { useState } from "react";

const URL =
  "https://youtube.googleapis.com/youtube/v3/channels?part=statistics&id=UC_JxE9KiFhLdZa4kIYfqAUg&key=";

export async function getStaticProps() {
  const res = await fetch(
    // `${URL}?part=snippet&playlistId=UC_JxE9KiFhLdZa4kIYfqAUg&maxResults=20&rel=0&key=${process.env.YOUTUBE_API_KEY}`
    `${URL}${process.env.YOUTUBE_API_KEY}`
  );
  const data = await res.json();
  return {
    props: {
      data,
    }, // will be passed to the page component as props

    revalidate: 60,
  };
}

export default function Home({ data }) {
  const [designSkill, setDesignSkill] = useState(false);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <section className="mx-auto flex flex-wrap items-center justify-center p-4 h-screen">
        <div className="max-w-screen-lg text-primary">
          <p className="text-center text-white bg-blue-500 w-max mx-auto px-8 py-px rounded-md text-lg mb-4">
            Web Developer
          </p>
          <h1 className="font-bold text-7xl mb-6 text-center mx-auto text-header">
            Darnell Sylvain
          </h1>
          <div className="flex mb-2 justify-center">
            <EnvelopeIcon className="w-4 mr-4" />
            <p>Darnellsylvain@gmail.com</p>
          </div>
          <div className="flex mb-2 text-center justify-center">
            <MapMarkerIcon className="w-4 mr-4" />
            <p className="">London</p>
          </div>
          <div className="flex justify-center items-center mt-6">
            <TwitterIcon className="w-5 group-hover:text-blue-500 transition duration-200 mr-4" />
            <InstagramIcon className="w-5 group-hover:text-blue-500 transition duration-200 mr-4" />
            <LinkedInIcon className="w-5 group-hover:text-blue-500 transition duration-200 mr-4" />
            <GithubIcon className="w-5 group-hover:text-blue-500 transition duration-200 mr-4" />
          </div>
        </div>
      </section>

      <section
        className="p-4 mb-8 flex justify-center flex-wrap max-w-screen-lg mx-auto"
        id="about"
      >
        <div className="flex items-center justify-end mb-6 w-full">
          <div className="w-48 bg-blue-300 h-0.5 "></div>
          <h2 className="text-4xl font-semibold text-right ml-6">About</h2>
        </div>
        <div className="flex flex-wrap justify-center items-center lg:flex-nowrap">
          <div className="">
            <div className="shadow-lg rounded-full h-64 w-64 lg:h-80 lg:w-80 flex flex-wrap  content-center mt-8 mx-auto overflow-hidden">
              <Image
                src="/darnellpicture.jpg"
                alt="Picture of the author"
                className=""
                width={400}
                height={600}
              />
            </div>
          </div>

          <p className="max-w-2xl mt-8 text-center md:ml-6" id="about">
            Hey, I'm Darnell, a web developer based in London, UK. I enjoy
            bringing ideas to life on the internet through creation of websites
            and applications.
            <br />
            <br /> After obtaining a bachelors degree in Mechanical Engineering,
            I turned my attention to trying to learn a new skill which led me to
            coding. I soon fell in love with coding, recognising it's ability to
            allow people to innovate, share, solve problems and communicate.
            <br />
            <br /> Other than programming, I love gaming, watching football and
            reading books.
          </p>
        </div>
      </section>

      <div className="w-full p-4" id="skills">
        <div className="max-w-screen-lg mx-auto pt-12">
          <div className="flex items-center  mb-6">
            <h2 className="text-4xl font-semibold mr-6">Skills</h2>
            <div className="w-48 bg-blue-300 h-0.5 "></div>
          </div>
          <div className="grid lg:grid-cols-3 gap-2 md:gap-5 text-center md:grid-cols-2 grid-cols-1 mx-auto">
            {/* Front-End */}
            <div>
              <div className="bg-white p-4 rounded-lg shadow-lg w-96 md:w-full mx-auto">
                <CodeIcon className="h-9 w-9 text-blue-500 mx-auto" />
                <h3 className="text-xl font-semibold my-6">Front-End</h3>
                <p className="">
                  Creating static and dynamic web applications, focusing on good
                  user experiences and great performance. Preference using the
                  React framework.
                </p>

                <div className="grid grid-cols-2">
                  <div className="flex items-center mt-5">
                    <NextIcon className="h-8 w-8 min-w-lg mx-4" />
                    <p>Next.js</p>
                  </div>
                  <div className="flex items-center mt-5">
                    <ReactIcon className="h-8 w-8 min-w-lg mx-4" />
                    <p>React</p>
                  </div>
                  <div className="flex items-center mt-5">
                    <JavascriptIcon className="h-8 w-8 min-w-lg mx-4" />
                    <p>Javascript</p>
                  </div>
                  <div className="flex items-center mt-5">
                    <HTMLIcon className="h-8 w-8 min-w-lg mx-4" />
                    <p>HTML</p>
                  </div>
                  <div className="flex items-center mt-5">
                    <CSSIcon className="h-8 w-8 min-w-lg mx-4" />
                    <p>CSS</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Back-End */}
            <div>
              <div className="bg-white p-4 rounded-lg shadow-lg w-96 md:w-full mx-auto">
                <ServerIcon className="h-9 w-9 text-blue-500 mx-auto" />
                <h3 className="text-xl font-semibold my-6">Back-end</h3>
                <p className="">
                  Building back-end servers to be paired with front-end
                  applications, creating powerful API's, handling data,
                  connecting to databases, and other back-end processes.
                </p>
                <div className="grid grid-cols-2">
                  <div className="flex items-center mt-5">
                    <MongoIcon className="h-8 w-8 min-w-lg mx-4" />
                    <p>MongoDB</p>
                  </div>
                  <div className="flex items-center mt-5">
                    <NodeIcon className="h-8 w-8 min-w-lg mx-4" />
                    <p>Node.js</p>
                  </div>
                </div>
              </div>
            </div>
            {/* // Design */}
            <div className="">
              <div className="bg-white p-4 rounded-lg shadow-lg w-96 md:w-full mx-auto">
                <PencilIcon className="h-9 w-9 text-blue-500 mx-auto" />
                <h3 className="text-xl font-semibold my-6">Design</h3>
                <p className="">
                  Designing good-looking, intuitive and user-friendly designs.
                  Aiming to make every design responsive to fit on all screens.
                </p>
                <div className="grid grid-cols-2">
                  <div className="flex items-center mt-5">
                    <AdobeXdIcon className="h-8 w-8 min-w-lg mx-4" />
                    <p>Adobe Xd</p>
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
          <div className="w-48 bg-blue-300 h-0.5 "></div>
          <h2 className="text-4xl font-semibold text-right ml-6">Projects</h2>
        </div>

        <ul className="mx-auto flex flex-wrap justify-center mb-6">
          <li className="m-4 border-b-2 border-blue-300 pb-3">
            All Categories
          </li>
          <li className="m-4 pb-3">Web Design</li>
          <li className="m-4 pb-3">Web App</li>
          <li className="m-4 pb-3">React</li>
          <li className="m-4 pb-3">Next.js</li>
        </ul>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-max mx-auto">
          <ProjectCard
            bgImage="supercamp"
            color="red"
            image="supercamp.jpg"
            className="absolute top-0"
          />
          <ProjectCard
            bgImage="maynooth"
            color="blue"
            image="maynoothproject.png"
          />
          <ProjectCard color="green" />
          <ProjectCard color="yellow" />
          <ProjectCard color="indigo" />
          <ProjectCard color="purple" />
        </div>
      </div>
      <div id="dashboard">
        <Dashboard data={data} id="dashboard" />
      </div>

      <Footer />
    </div>
  );
}
