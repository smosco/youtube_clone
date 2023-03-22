import React from "react";
import CommentCard from "./CommentCard";

export default function Comments({ comments }) {
  return (
    <div>
      {comments.map((comment) => (
        <CommentCard comment={comment} />
      ))}
    </div>
  );
}
