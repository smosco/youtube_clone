import React from "react";
import CommentCard from "./CommentCard";

export default function Comments({ comments }) {
  return (
    <div>
      <p className="text-xl my-4">Comments</p>
      <div className="flex flex-col gap-3 mt-4">
        {comments.map((comment) => (
          <CommentCard key={comment.snippet.id} comment={comment} />
        ))}
      </div>
    </div>
  );
}
