import React from "react";
import Comment from "./Comment";

const CommentsList = ({ commentsList }) => {
  return commentsList.map((data, i) => (
    <div key={i}>
      <Comment data={data} />
      <div className="ml-5">
        <CommentsList commentsList={data.replies} />
      </div>
    </div>
  ));
};

export default CommentsList;
