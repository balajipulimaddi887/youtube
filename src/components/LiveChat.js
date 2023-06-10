import React from "react";

const LiveChat = ({ name, chat }) => {
  return (
    <div className="flex items-center flex-wrap my-1 border-b-2 border-gray-300 mx-2 py-1">
      <img
        src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png"
        alt="logo"
        className="w-10 px-2"
      />
      <h1 className="font-bold text-xl px-2">{name}</h1>
      <h1>{chat}</h1>
    </div>
  );
};

export default LiveChat;
