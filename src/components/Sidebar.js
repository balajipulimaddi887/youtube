import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // early return
  if (!isMenuOpen) return null;
  return (
    <div className="shadow-lg w-36 sm:w-46 rounded-lg border border-gray-400 p-1 text-lg bg-white mx-3 absolute h-[87vh]">
      <ul className="border-gray-500 border-b-2 pl-2">
        <li className="my-2">
          <Link to="/">Home</Link>
        </li>
        <li className="my-2">Shorts</li>
        <li className="my-2">Subscriptions</li>
      </ul>
      <ul className="pl-2 border-gray-500 border-b-2">
        <li className="my-2">Youtube Premium</li>
        <li className="my-2">Youtube Music</li>
        <li className="my-2">Youtube kids</li>
        <li className="my-2">Movies</li>
      </ul>
      <h1 className="font-bold text-lg my-2 pl-2">Explore</h1>
      <ul className="pl-2 border-gray-500 border-b-2">
        <li className="my-2">Trending</li>
        <li className="my-2">Shopping</li>
        <li className="my-2">Music</li>
        <li className="my-2">Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
