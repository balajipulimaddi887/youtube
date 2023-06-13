import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { collapseMenu } from "../utils/appSlice";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const dispatch = useDispatch();
  const location = useLocation();

  // early return
  if (!isMenuOpen) return null;
  return (
    <div className="shadow-lg w-36 sm:w-46 rounded-lg border border-gray-400 p-1 text-lg bg-white mx-3 absolute h-[82vh] lg:h-[86vh]">
      <ul className="border-gray-500 border-b-2 pl-2">
        <li
          className={
            "my-2" +
            (location?.pathname === "/" &&
              " bg-black pl-2 rounded-lg text-white")
          }
        >
          <Link to="/" onClick={() => dispatch(collapseMenu())}>
            Home
          </Link>
        </li>
        <li className="my-2 text-gray-400">Shorts</li>
        <li className="my-2 text-gray-400">Subscriptions</li>
      </ul>
      <ul className="pl-2 border-gray-500 border-b-2">
        <li className="my-2 text-gray-400">Youtube Premium</li>
        <li className="my-2 text-gray-400">Youtube Music</li>
        <li className="my-2 text-gray-400">Youtube kids</li>
        <li className="my-2 text-gray-400">Movies</li>
      </ul>
      <h1 className="font-bold text-lg my-2 pl-2 text-gray-400">Explore</h1>
      <ul className="pl-2 border-gray-500 border-b-2">
        <li className="my-2 text-gray-400">Trending</li>
        <li className="my-2 text-gray-400">Shopping</li>
        <li className="my-2 text-gray-400">Music</li>
        <li className="my-2 text-gray-400">Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
