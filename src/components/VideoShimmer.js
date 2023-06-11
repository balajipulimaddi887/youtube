import React from "react";

const VideoShimmer = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {Array(15)
        .fill(" ")
        .map((e, i) => (
          <div key={i} className="h-72 w-80 bg-gray-200 m-2 rounded-lg"></div>
        ))}
    </div>
  );
};

export default VideoShimmer;
