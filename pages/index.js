import Head from "next/head";
import Image from "next/image";
import { Header } from "../components/Header";
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
} from "../components/Icons";

import { PencilIcon, CodeIcon, ServerIcon } from "@heroicons/react/solid";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main>
        <section className="max-w-screen-lg mx-auto flex items-center justify-center my-52 p-4">
          <div>
            <h1 className="font-bold text-5xl mb-6 text-center">
              Hey, I'm Darnell Sylvain
            </h1>
            <p className="max-w-2xl">
              I'm web developer based in London, UK. I enjoy bringing ideas to
              life on the internet through creation of websites and
              applications. After obtaining a bachelors degree in Mechanical
              Engineering, I turned my attention to trying to learn a new skill
              which led me to coding. I soon fell in love with coding,
              recognising it's ability to allow people to innovate, share, solve
              problems and communicate. Other than programming, I love gaming,
              watching football and reading books.
            </p>
          </div>
          <div>
            <div className="shadow-lg rounded-full overflow-hidden h-64 w-64 flex flex-wrap justify-center content-center ml-4 relative">
              <Image
                src="/darnellpicture.jpg"
                alt="Picture of the author"
                className="absolute top-0"
                width={400}
                height={600}
              />
            </div>
          </div>
        </section>
      </main>
      <div className="w-full bg-blue-500 p-4">
        <div className="max-w-screen-lg mx-auto pt-12">
          <h2 className="text-4xl text-white font-semibold mb-6">Skills</h2>
          <div className="grid grid-cols-3 gap-5 text-center ">
            {/* Front-End */}
            <div>
              <div className="bg-white p-4 rounded-lg shadow-lg">
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
              <div className="bg-white p-4 rounded-lg shadow-lg">
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
            <div>
              <div className="bg-white p-4 rounded-lg shadow-lg">
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
      <div className="max-w-screen-lg mx-auto my-20 p-4">
        <div className="flex relative items-center justify-end mb-6">
          <div className="w-48 bg-blue-300 h-0.5 "></div>

          <h2 className="text-4xl font-semibold text-right ml-6">Skills</h2>
        </div>

        <ul className="mx-auto w-full flex justify-center mb-6">
          <li className="m-4 border-b-2 border-blue-300 pb-3">
            All Categories
          </li>
          <li className="m-4 pb-3">Web Design</li>
          <li className="m-4 pb-3">Web App</li>
          <li className="m-4 pb-3">React</li>
          <li className="m-4 pb-3">Next.js</li>
        </ul>

        <div className="grid grid-cols-3 gap-5 text-center ">
          <div className="">
            <div className="group bg-supercamp bg-center bg-cover bg-no-repeat rounded-lg relative hover:bg-gray-900">
              <div className="mix-blend-hard-light bg-gradient-to-r from-red-400 to-red-500 p-4 rounded-lg shadow-lg h-48 group-hover:bg-gray-900 "></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-2/4 -translate-y-2/4 text-white opacity-0 group-hover:opacity-100">
                <h1 className="">Hello</h1>
                <p>Super Camp</p>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-maynooth bg-center bg-cover bg-no-repeat rounded-lg relative">
              <div className="mix-blend-hard-light bg-gradient-to-r from-blue-400 to-blue-500 p-4 rounded-lg shadow-lg h-48"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-2/4 -translate-y-2/4 text-white">
                <h1 className="">Hello</h1>
                <p>Super Camp</p>
              </div>
            </div>
          </div>
          <div>
            <div className="mix-blend-hard-light bg-center bg-cover bg-no-repeat rounded-lg relative">
              <div className="bg-gradient-to-r from-green-400 to-green-500 p-4 rounded-lg shadow-lg h-48"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-2/4 -translate-y-2/4 text-white">
                <h1 className="">Hello</h1>
                <p>Super Camp</p>
              </div>
            </div>
          </div>
          <div>
            <div className="mix-blend-hard-light bg-center bg-cover bg-no-repeat rounded-lg relative">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-white p-4 rounded-lg shadow-lg h-48"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-2/4 -translate-y-2/4 text-white">
                <h1 className="">Hello</h1>
                <p>Super Camp</p>
              </div>
            </div>
          </div>
          <div>
            <div className="mix-blend-hard-light bg-center bg-cover bg-no-repeat rounded-lg relative">
              <div className="bg-gradient-to-r from-indigo-400 to-indigo-500 bg-white p-4 rounded-lg shadow-lg h-48"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-2/4 -translate-y-2/4 text-white">
                <h1 className="">Hello</h1>
                <p>Super Camp</p>
              </div>
            </div>
          </div>
          <div>
            <div className="mix-blend-hard-light bg-center bg-cover bg-no-repeat rounded-lg relative">
              <div className="bg-gradient-to-r from-purple-400 to-purple-500 bg-white p-4 rounded-lg shadow-lg h-48"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-2/4 -translate-y-2/4 text-white">
                <h1 className="">Hello</h1>
                <p>Super Camp</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
