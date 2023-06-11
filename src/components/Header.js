import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { collapseMenu, toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SUGGESTSIONS_URL } from "../utils/constants";
import { cacheItems } from "../utils/searchSlice";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const dispatch = useDispatch();

  const cache = useSelector((store) => store.search.cacheItems);
  const navigate = useNavigate();

  useEffect(() => {
    const id = setTimeout(() => {
      if (cache[searchQuery]) {
        setSuggestions(cache[searchQuery]);
      } else {
        fetchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(id);
    };
  }, [searchQuery]);

  const navigateToResultsPage = (searchQuery) => {
    setShowSuggestions(false);
    setSearchQuery(searchQuery);
    setSuggestions(false);
    navigate("/results?search_query=" + searchQuery);
  };

  const fetchSuggestions = async () => {
    try {
      const data = await fetch(YOUTUBE_SUGGESTSIONS_URL + searchQuery);
      const json = await data.json();
      setSuggestions(json[1]);
      dispatch(cacheItems({ [searchQuery]: json[1] }));
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <div className="w-full">
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-400 w-1/2 rounded-l-full px-5 py-1"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => {
            dispatch(collapseMenu());
            setShowSuggestions(true);
          }}
          onBlur={() => setShowSuggestions(false)}
        />
        <button
          className="rounded-r-full border border-gray-400 py-1 px-2"
          onClick={() => navigateToResultsPage(searchQuery)}
        >
          Search
        </button>
      </div>
      {showSuggestions && suggestions?.length !== 0 && (
        <div className="absolute w-full">
          <ul className="bg-white p-2 mt-1 border border-gray-400 shadow-lg rounded-lg w-3/4 sm:w-1/2">
            {suggestions?.length > 0 &&
              suggestions?.map((data, i) => (
                <li
                  key={i}
                  className="flex items-center hover:bg-gray-100 text-lg px-2 py-1 cursor-pointer"
                  onMouseDown={() => navigateToResultsPage(data)}
                >
                  <img
                    className="w-4 mr-2"
                    src="https://img.freepik.com/premium-vector/search-icon-magnifying-glass-symbol-outline-icon_543062-139.jpg"
                    alt="search"
                  />
                  {data}
                </li>
              ))}
          </ul>
        </div>
      )}
    </>
  );
};

const Header = () => {
  const dispatch = useDispatch();
  const [isSearchIconClicked, setIsSearchIconClicked] = useState(false);
  const handleMenu = () => {
    dispatch(toggleMenu());
  };
  return (
    <>
      {isSearchIconClicked && (
        <div className="sm:hidden p-3 m-3 shadow-lg lg:h-[10vh] grid grid-flow-col">
          <img
            className="h-9 w-9 cursor-pointer mr-5"
            src="https://i.pinimg.com/736x/63/d9/a0/63d9a0f0ca26a6a3da699c91132aa03d.jpg"
            alt="back"
            onClick={() => setIsSearchIconClicked(false)}
          />
          <div>
            <Search />
          </div>
        </div>
      )}
      <div
        className={
          (isSearchIconClicked ? "hidden sm:grid " : "grid ") +
          "grid-flow-col p-3 m-3 shadow-lg lg:h-[10vh]"
        }
      >
        <div className="flex col-span-1">
          <img
            src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png"
            alt="hamburger icon"
            className="w-12 h-7 md:h-10 cursor-pointer"
            onClick={() => handleMenu()}
          />
          <Link to="/" onClick={() => dispatch(collapseMenu())}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
              alt="youtube logo"
              className="h-7 md:h-10 mx-2"
            />
          </Link>
        </div>
        <div className="col-span-10 px-3 hidden sm:block">
          <Search />
        </div>
        <div className="col-span-10 sm:hidden">
          <div className="flex items-center justify-end mx-2">
            <img
              className="mt-1 mr-4 w-6 h-6 cursor-pointer hover:mt-1"
              src="https://img.freepik.com/premium-vector/search-icon-magnifying-glass-symbol-outline-icon_543062-139.jpg"
              alt="search"
              onClick={() => {
                dispatch(collapseMenu());
                setIsSearchIconClicked(true);
              }}
            />
          </div>
        </div>
        <div className="col-span-1">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png"
            alt="user"
            className="h-7 md:h-10"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
