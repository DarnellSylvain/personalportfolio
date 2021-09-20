import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import React from "react";

// https://youtube.googleapis.com/youtube/v3/channels?part=statistics&id=UC_JxE9KiFhLdZa4kIYfqAUg&key=[YOUR_API_KEY]

// const URL = `https://www.googleapis.com/youtube/v3/playlistItems`;
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

const Dashboard = ({ data }) => {
  console.log(data);
  console.log(data.items[0].statistics);
  const { items = {} } = data;
  const { statistics = {} } = items[0];
  const { subscriberCount, videoCount, viewCount } = statistics;
  console.log(subscriberCount, videoCount, viewCount);

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <div>
      <Header />
      <main className="max-w-2xl mx-auto">
        {" "}
        <div className="mt-8 p-4">
          <h1 className="text-5xl font-bold mb-4">Dashboard</h1>
          <p>
            This is my personal dashboard that i use to track metrics across my
            YouTube channel. I plan to add more data.
          </p>
        </div>
        <div className="">
          <div className="grid grid-cols-1 sm:grid-cols-2 p-4 gap-4">
            <div className="border border-1 flex align-items flex-col p-4 rounded-lg">
              <p className="mb-2">Youtube Subscribers</p>
              <h2 className="text-3xl font-bold text-black mb-2">
                {numberWithCommas(subscriberCount)}
              </h2>
            </div>
            <div className="border border-1 flex align-items flex-col p-4 rounded-lg">
              <p className="mb-2">Youtube Views</p>
              <h2 className="text-3xl font-bold text-black mb-2">
                {numberWithCommas(viewCount)}
              </h2>
            </div>
            <div className="border border-1 flex align-items flex-col p-4 rounded-lg">
              <p className="mb-2">Youtube Videos</p>
              <h2 className="text-3xl font-bold text-black mb-2">
                {numberWithCommas(videoCount)}
              </h2>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
