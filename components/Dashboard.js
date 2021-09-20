export const Dashboard = ({ data }) => {
  const { items = {} } = data;
  const { statistics = {} } = items[0];
  const { subscriberCount, videoCount, viewCount } = statistics;

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <main className="max-w-screen-lg mx-auto">
      {" "}
      <div className="mt-8 p-4">
        <h1 className="text-5xl font-bold mb-4">Dashboard</h1>
        <p>
          This is my personal dashboard that i use to track metrics across my
          YouTube channel. I plan to add more data.
        </p>
      </div>
      <div className="max-w-2xl mx-auto">
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
  );
};
