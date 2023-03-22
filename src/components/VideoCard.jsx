import React from "react";
import { Link } from "react-router-dom";
export default function VideoCard({ video }) {
  const { id, snippet } = video;
  return (
    <div className="card">
      <Link to={id.videoId && `/watch/${id.videoId}`}>
        <div className="cardMedia">
          <img src={snippet?.thumbnails?.high?.url} alt={id.videoId} />
        </div>
      </Link>
      <div className="cardContent">
        <Link to={id.videoId && `/watch/${id.videoId}`}>
          {snippet.title.slice(0, 60)}
        </Link>
        <Link to={snippet.channelId && `/channel/${snippet?.channelId}`}>
          <div>{snippet && snippet.channelTitle}</div>
        </Link>
      </div>
    </div>
  );
}
