import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_URL } from "../utils/constants";
import VideoCard from "./VideoCard";
import VideoShimmer from "./VideoShimmer";
import { Link } from "react-router-dom";
import ErrorCard from "./ErrorCard";

const VideoContainer = () => {
  const [videosList, setVideosList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchYoutubeVidoes();
  }, []);

  const fetchYoutubeVidoes = async () => {
    try {
      const data = await fetch(YOUTUBE_VIDEO_URL);
      const json = await data.json();
      if (json?.items) {
        setVideosList(json?.items);
      } else if (json?.error?.errors) {
        setError(json?.error?.errors[0]);
      }
    } catch (e) {
      setError(e);
    }
  };

  if (error) return <ErrorCard error={error} />;

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
