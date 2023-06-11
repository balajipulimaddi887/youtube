import React from "react";
import CommentsList from "./CommentsList";

const commentsList = [
  {
    name: "Balaji",
    text: "This is react project and you can watch youtube videos here",
    replies: [
      {
        name: "Balaji",
        text: "This is react project and you can watch youtube videos here",
        replies: [
          {
            name: "Balaji",
            text: "This is react project and you can watch youtube videos here",
            replies: [],
          },
          {
            name: "Balaji",
            text: "This is react project and you can watch youtube videos here",
            replies: [
              {
                name: "Balaji",
                text: "This is react project and you can watch youtube videos here",
                replies: [
                  {
                    name: "Balaji",
                    text: "This is react project and you can watch youtube videos here",
                    replies: [
                      {
                        name: "Balaji",
                        text: "This is react project and you can watch youtube videos here",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
              {
                name: "Balaji",
                text: "This is react project and you can watch youtube videos here",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "Balaji",
        text: "This is react project and you can watch youtube videos here",
        replies: [],
      },
    ],
  },
  {
    name: "Balaji",
    text: "This is react project and you can watch youtube videos here",
    replies: [],
  },
  {
    name: "Balaji",
    text: "This is react project and you can watch youtube videos here",
    replies: [
      {
        name: "Balaji",
        text: "This is react project and you can watch youtube videos here",
        replies: [],
      },
      {
        name: "Balaji",
        text: "This is react project and you can watch youtube videos here",
        replies: [],
      },
      {
        name: "Balaji",
        text: "This is react project and you can watch youtube videos here",
        replies: [],
      },
    ],
  },
  {
    name: "Balaji",
    text: "This is react project and you can watch youtube videos here",
    replies: [],
  },
  {
    name: "Balaji",
    text: "This is react project and you can watch youtube videos here",
    replies: [],
  },
];

const CommentsDetails = () => {
  return (
    <div className="mb-3 lg:p-5">
      <h1 className="font-bold text-2xl">Comments:</h1>
      <CommentsList commentsList={commentsList} />
    </div>
  );
};

export default CommentsDetails;
