import React from "react";
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

  // const {
  //   snippet: { title, channelId, channelTitle },
  //   statistics: { viewCount, likeCount },
  // } = videoDetail;
  return (
    <div className="flex">
      <Link to={`/channel/${value}`}>
        <img src={authorProfileImageUrl} alt="" />
      </Link>
      <div>
        <p>{authorDisplayName}</p>
        <p>{textDisplay}</p>
      </div>
    </div>
  );
}
