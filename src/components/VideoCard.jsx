import React from "react";
import { Link } from "react-router-dom";
import { formatAgo } from "../utils/date";
import ChannelInfo from "./ChannelInfo";

export default function VideoCard({ video, direction, size }) {
  const { id, snippet } = video;
  return (
    <div className={`w-full flex flex-${direction}`}>
      <Link to={id.videoId && `/watch/${id.videoId}`}>
        <div className="w-full rounded-xl overflow-hidden">
          <img
            className="w-full"
            src={
              size === "medium"
                ? snippet?.thumbnails?.medium?.url
                : snippet?.thumbnails?.default?.url
            }
            alt={id.videoId}
          />
        </div>
      </Link>
      <div className="flex items-center gap-8 mx-4 mt-2">
        <Link
          className="text-sm opacity-80"
          to={snippet.channelId && `/channel/${snippet?.channelId}`}
        >
          <ChannelInfo
            channelId={snippet.channelId}
            channelTitle={snippet.channelTitle}
          />
          {/* <div>{snippet && snippet.channelTitle}</div> */}
        </Link>
        <Link
          className="font-semibold line-clamp-2"
          to={id.videoId && `/watch/${id.videoId}`}
        >
          {/* {snippet.title.slice(0, 60)} */}
          <p>{snippet.title}</p>
          <p>{formatAgo(snippet.publishedAt, "ko")}</p>
        </Link>
      </div>
    </div>
  );
}
