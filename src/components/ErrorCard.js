import React from "react";

const ErrorCard = ({ error }) => {
  return (
    <div className="flex flex-col items-center justify-center h-[85vh] w-[85vw] m-auto">
      <img
        alt="oops"
        className="h-60 w-60 lg:h-80 lg:w-80"
        src="https://previews.123rf.com/images/arcady31/arcady311303/arcady31130300032/18519959-vector-oops-symbol.jpg"
      />
      <h1 className="font-bold text-xl lg:text-2xl text-center">
        Failed due to
        <span className="text-red-400">{" " + error.message + " "}</span>
        Could you please check it after some time.
      </h1>
    </div>
  );
};

export default ErrorCard;
