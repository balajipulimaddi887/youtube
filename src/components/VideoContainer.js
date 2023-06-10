import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_URL } from "../utils/constants";
import VideoCard from "./VideoCard";
import VideoShimmer from "./VideoShimmer";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videosList, setVideosList] = useState([]);

  useEffect(() => {
    fetchYoutubeVidoes();
  }, []);

  const fetchYoutubeVidoes = async () => {
    const data = await fetch(YOUTUBE_VIDEO_URL);
    const json = await data.json();
    setVideosList(json?.items);
  };

  if (videosList?.length < 1) return <VideoShimmer />;

  return (
    <div className="flex p-5 flex-wrap justify-center overflow-auto h-[78vh]">
      {videosList?.map((video) => (
        <Link to={"/watch?v=" + video?.id} key={video?.id}>
          <VideoCard video={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
