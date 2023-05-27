import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();

  const handleMenu = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-3 m-3 shadow-lg">
      <div className="flex col-span-1">
        <img
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png"
          alt="hamburger icon"
          className="w-12 h-10 cursor-pointer"
          onClick={() => handleMenu()}
        />
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
            alt="youtube logo"
            className="h-10 mx-2"
          />
        </a>
      </div>
      <div className="col-span-10 text-center">
        <input
          type="text"
          className="border border-gray-400 w-1/3 rounded-l-full p-1"
        />
        <button className="rounded-r-full border border-gray-400 py-1 px-2">
          Search
        </button>
      </div>
      <div className="col-span-1">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png"
          alt="user"
          className="h-10"
        />
      </div>
    </div>
  );
};

export default Header;
