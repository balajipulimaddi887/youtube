import React from "react";
import Button from "./Button";

const buttonList = [
  "All",
  "Music",
  "Mixes",
  "Tamil Cinema",
  "T-series",
  "Filmi",
  "cricket",
  "soccer",
  "kids",
  "romantic",
  "action",
  "adventure",
  "New to you",
];

const ButtonList = () => {
  return (
    <div className="justify-center m-auto overflow-x-auto whitespace-nowrap w-[84vw] md:w-[90vw]">
      {buttonList.map((text, i) => (
        <Button key={i} text={text} />
      ))}
    </div>
  );
};

export default ButtonList;
