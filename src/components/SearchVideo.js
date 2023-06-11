import React from "react";

const calculateViewCount = (count) => {
  if (count < 1000) {
    return count;
  } else if (count < 1000000) {
    return Math.floor(count / 1000) + "K";
  } else {
    return Math.floor(count / 1000000) + "M";
  }
};

const SearchVideo = ({ video }) => {
  const { snippet, statistics } = video;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="shadow-lg w-5/6 md:w-3/4 flex mb-3 rounded-lg m-auto border border-gray-500">
      <img
        src={thumbnails?.medium?.url}
        alt="thumbnail"
        className="rounded-l-lg w-36 md:w-64 lg:w-80 max-h-[200px]"
      />
      <div className="mx-3">
        <h1 className="font-bold text-base lg:text-2xl line-clamp-4 sm:line-clamp-3 md:line-clamp-2">
          {title}
        </h1>
        <h2 className="font-medium text-sm sm:text-lg lg:text-xl">
          {channelTitle}
        </h2>
        {statistics?.viewCount && (
          <h3>{calculateViewCount(statistics?.viewCount)} views</h3>
        )}
      </div>
    </div>
  );
};

export default SearchVideo;
