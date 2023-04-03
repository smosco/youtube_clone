import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function CommentCard({ comment }) {
  const {
    snippet: {
      topLevelComment: {
        snippet: {
          authorChannelId: { value },
          authorDisplayName,
          authorProfileImageUrl,
          likeCount,
          textDisplay,
          textOriginal,
          updateAt,
        },
      },
    },
  } = comment;
  const [fold, setFold] = useState(true);

  return (
    <div className="flex gap-3">
      <Link to={`/channel/${value}`}>
        <img className="rounded-full" src={authorProfileImageUrl} alt="" />
      </Link>
      <div>
        <p className="text-sm mb-1">{authorDisplayName}</p>
        <div>
          <p className="mb-1">
            {fold ? textDisplay.slice(0, 50) + "..." : textDisplay}
          </p>
          <button
            className="text-gray-600 font-semibold"
            onClick={() => {
              setFold((prev) => !prev);
            }}
          >
            {fold ? "Read more" : "Show less"}
          </button>
        </div>
      </div>
    </div>
  );
}
