import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // early return
  if (!isMenuOpen) return null;
  return (
    <div className="shadow-lg w-56 p-2 fixed">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <ul>
        <li>Youtube Premium</li>
        <li>Youtube Music</li>
        <li>Youtube kids</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold text-lg">Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
