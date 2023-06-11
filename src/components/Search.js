import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { getVideosByKeyword } from "../utils/constants";
import SearchVideo from "./SearchVideo";
import SearchVideoShimmer from "./SearchVideoShimmer";
import ErrorCard from "./ErrorCard";

const Search = () => {
  const [searchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState(null);
  const [error, setError] = useState(null);
  console.log(searchParams.get("search_query"));
  useEffect(() => {
    fetchSuggestions();
  }, [searchParams]);

  const fetchSuggestions = async () => {
    try {
      const data = await fetch(
        getVideosByKeyword(searchParams.get("search_query"))
      );
      const json = await data.json();
      if (json?.items) {
        setSearchResults(json?.items);
        setError(null);
      } else if (json?.error?.errors) {
        setError(json?.error?.errors[0]);
      }
    } catch (e) {
      setError(e);
    }
  };

  if (error) return <ErrorCard error={error} />;

  if (searchResults == null) return <SearchVideoShimmer />;

  if (searchResults?.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[85vh] w-[85vw] m-auto">
        <h1 className="font-medium text-xl lg:text-2xl text-center">
          No Search results found for{" "}
          <span className="font-bold">{searchParams.get("search_query")}</span>,
          Go to
          <Link to="/" className="text-green-300">
            {" "}
            Home
          </Link>
        </h1>
      </div>
    );
  }

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
