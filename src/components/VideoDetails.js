import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { collapseMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsDetails from "./CommentsDetails";
import LiveChat from "./LiveChat";
import { addMessage } from "../utils/liveChatSlice";
import { randomName } from "../utils/randomData";
import { getVideosByVideoId } from "../utils/constants";
import { Link } from "react-router-dom";
import RelatedVideoCard from "./RelatedVideoCard";

const VideoDetails = () => {
  const [searchParams] = useSearchParams();
  const [chat, setChat] = useState("");
  const [relatedVideos, setRelatedVideos] = useState([]);
  const dispatch = useDispatch();
  // const details = useSelector((store) => store.chat);
  // useEffect(() => {
  //   dispatch(collapseMenu());
  //   const id = setInterval(() => {
  //     dispatch(
  //       addMessage({
  //         name: randomName(),
  //         chat: Math.random().toString(36).substring(1, 200),
  //       })
  //     );
  //   }, 1000);
  //   return () => {
  //     clearInterval(id);
  //   };
  // }, []);

  useEffect(() => {
    dispatch(collapseMenu());
    fetchVideosById();
  }, [searchParams]);

  const fetchVideosById = async () => {
    const data = await fetch(getVideosByVideoId(searchParams.get("v")));
    const json = await data.json();
    setRelatedVideos(json?.items);
    console.log(json);
  };

  return (
    <div className="w-screen  overflow-auto h-[86vh]">
      <div className="flex flex-col lg:flex-row w-full mx-1 lg:mx-0">
        <div className="flex flex-col ">
          <div className="p-5 w-full h-[350px] md:h-[500px] lg:w-[680px] xl:w-[800px] 2xl:w-[1000px] lg:h-[500px]">
            <iframe
              width="100%"
              height="100%"
              src={"https://www.youtube.com/embed/" + searchParams.get("v")}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="hidden lg:flex">
            <CommentsDetails />
          </div>
        </div>
        {/* <div className="border border-black w-full h-[500px] m-5 flex flex-col-reverse overflow-y-scroll">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (chat !== "") {
                dispatch(addMessage({ name: "Balu", chat: chat }));
                setChat("");
              }
            }}
          >
            <input
              type="text"
              className="w-4/5 border border-gray-400 rounded-lg mx-2 my-1 p-1"
              placeholder="Chat here..."
              value={chat}
              onChange={(e) => setChat(e.target.value)}
            />
            <button
              type="submit"
              className="border border-gray-400 rounded-lg px-2 py-1"
            >
              Send
            </button>
          </form>
          {details.map((e, i) => (
            <LiveChat key={i} {...e} />
          ))}
        </div> */}
        <div className="w-11/12 lg:w-full flex flex-col m-5 items-stretch">
          {relatedVideos?.length < 1 &&
            Array(10)
              .fill(" ")
              .map((e, i) => (
                <div className="shadow-lg w-full flex rounded-sm mb-2 h-[100px] bg-gray-300"></div>
              ))}
          {relatedVideos?.length > 0 &&
            relatedVideos.map((e, i) => (
              <Link to={"/watch?v=" + e?.id?.videoId} key={e?.id?.videoId}>
                <RelatedVideoCard video={e} key={e?.id?.videoId} />
              </Link>
            ))}
          <div className="flex lg:hidden w-5/6">
            <CommentsDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
