import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { getVideosByKeyword } from "../utils/constants";
import SearchVideo from "./SearchVideo";

const Search = () => {
  const [searchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);
  console.log(searchParams.get("search_query"));
  useEffect(() => {
    fetchSuggestions();
  }, [searchParams]);

  const fetchSuggestions = async () => {
    const data = await fetch(
      getVideosByKeyword(searchParams.get("search_query"))
    );
    const json = await data.json();
    setSearchResults(json?.items);
    console.log(json);
  };
  return (
    <div className="w-full flex flex-col overflow-auto h-[86vh]">
      {searchResults?.length > 0 &&
        searchResults?.map((e) => (
          <Link to={"/watch?v=" + e?.id?.videoId} className="w-full">
            <SearchVideo video={e} />
          </Link>
        ))}
    </div>
  );
};

export default Search;
