import React from "react";
import { Link } from "react-router-dom";
import { formatAgo } from "../utils/date";
import ChannelInfo from "./ChannelInfo";

export default function VideoCard({ video, direction, size, display }) {
  const {
    id,
    snippet: { title, channelId, channelTitle, thumbnails, publishedAt },
  } = video;
  return (
    <div
      className={`w-full flex flex-${direction} hover:scale-95 transition-all`}
    >
      <Link
        className={`${
          direction === "row" ? "w-[200px] mr-2" : "w-full mb-2"
        } rounded-xl overflow-hidden shrink-0`}
        to={id.videoId && `/watch/${id.videoId}`}
      >
        <img
          className="w-full"
          src={
            size === "medium"
              ? thumbnails?.medium?.url
              : thumbnails?.default?.url
          }
          alt={id.videoId}
        />
      </Link>
      <div className="flex gap-2">
        <div className={`shrink-0 ${display === "none" && "hidden"}`}>
          <ChannelInfo id={channelId} title={channelTitle} display="none" />
        </div>
        <div className="">
          <Link to={id.videoId && `/watch/${id.videoId}`}>
            <p className="text-md leading-5 line-clamp-2">
              {title.length > 60 ? title.slice(0, 60) + "..." : title}
            </p>
            <p className="text-sm text-gray-500">{formatAgo(publishedAt)}</p>
          </Link>
          <Link className="text-sm text-gray-500" to={`/channel/${channelId}`}>
            {channelTitle}
          </Link>
        </div>
      </div>
    </div>
  );
}
