import React from "react";

const SearchVideoShimmer = () => {
  return (
    <div className="w-full flex flex-col overflow-auto h-[86vh]">
      {Array(5)
        .fill(" ")
        .map((e, i) => (
          <div className="shadow-lg h-[400px] w-4/5 md:w-3/4 flex mb-3 rounded-lg m-auto bg-gray-200"></div>
        ))}
    </div>
  );
};

export default SearchVideoShimmer;
