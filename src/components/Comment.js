import React from "react";

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex flex-row shadow-lg rounded-lg items-center px-3 py-2 border-l-black border mt-2">
      <img
        className="w-7 h-7 lg:w-10 lg:h-10"
        src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png"
        alt="user"
      />
      <div className="ml-3 lg:ml-5">
        <p className="font-bold text-base lg:text-xl">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
