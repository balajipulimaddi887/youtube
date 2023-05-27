import React from "react";

const VideoCard = ({ video }) => {
  const { snippet, statistics } = video;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="shadow-lg w-64 m-2">
      <img src={thumbnails?.medium?.url} alt="thumbnail" />
      <h1 className="font-bold text-base">{title}</h1>
      <h2 className="font-medium">{channelTitle}</h2>
      <h3>{statistics?.viewCount} views</h3>
    </div>
  );
};

export default VideoCard;
