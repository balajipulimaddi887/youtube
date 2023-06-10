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

const RelatedVideoCard = ({ video }) => {
  const { snippet, statistics } = video;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="shadow-lg w-full flex rounded-sm mb-2">
      <img
        src={thumbnails?.medium?.url}
        alt="thumbnail"
        className="rounded-l-lg h-28 lg:w-36 xl:w-48"
      />
      <div className="ml-1 xl:ml-2">
        <h1 className="font-bold text-base line-clamp-2">{title}</h1>
        <h2 className="font-medium">{channelTitle}</h2>
        {statistics?.viewCount && (
          <h3>{calculateViewCount(statistics?.viewCount)} views</h3>
        )}
      </div>
    </div>
  );
};

export default RelatedVideoCard;
