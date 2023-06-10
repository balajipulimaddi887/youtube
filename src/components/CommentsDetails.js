import React from "react";
import CommentsList from "./CommentsList";

const commentsList = [
  {
    name: "Balaji",
    text: "This is the best youtube channel we can have for react",
    replies: [
      {
        name: "Balaji",
        text: "This is the best youtube channel we can have for react",
        replies: [
          {
            name: "Balaji",
            text: "This is the best youtube channel we can have for react",
            replies: [],
          },
          {
            name: "Balaji",
            text: "This is the best youtube channel we can have for react",
            replies: [
              {
                name: "Balaji",
                text: "This is the best youtube channel we can have for react",
                replies: [
                  {
                    name: "Balaji",
                    text: "This is the best youtube channel we can have for react",
                    replies: [
                      {
                        name: "Balaji",
                        text: "This is the best youtube channel we can have for react",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
              {
                name: "Balaji",
                text: "This is the best youtube channel we can have for react",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "Balaji",
        text: "This is the best youtube channel we can have for react",
        replies: [],
      },
    ],
  },
  {
    name: "Balaji",
    text: "This is the best youtube channel we can have for react",
    replies: [],
  },
  {
    name: "Balaji",
    text: "This is the best youtube channel we can have for react",
    replies: [
      {
        name: "Balaji",
        text: "This is the best youtube channel we can have for react",
        replies: [],
      },
      {
        name: "Balaji",
        text: "This is the best youtube channel we can have for react",
        replies: [],
      },
      {
        name: "Balaji",
        text: "This is the best youtube channel we can have for react",
        replies: [],
      },
    ],
  },
  {
    name: "Balaji",
    text: "This is the best youtube channel we can have for react",
    replies: [],
  },
  {
    name: "Balaji",
    text: "This is the best youtube channel we can have for react",
    replies: [],
  },
];

const CommentsDetails = () => {
  return (
    <div className="lg:p-5">
      <h1 className="font-bold text-2xl">Comments:</h1>
      <CommentsList commentsList={commentsList} />
    </div>
  );
};

export default CommentsDetails;
