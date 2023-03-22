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
    <div className={`w-full flex flex-${direction}`}>
      <Link
        className={`${
          direction === "row" ? "w-[200px] mr-2" : "w-full"
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
      <div
        className={`flex items-start gap-2${
          direction === "row" ? "w-[200px]" : "w-full mt-2"
        } rounded-xl overflow-hidden shrink-0`}
      >
        <div className={`shrink-0 ${display === "none" && "hidden"}`}>
          <ChannelInfo id={channelId} title={channelTitle} display="none" />
        </div>
        <div className="">
          <Link to={id.videoId && `/watch/${id.videoId}`}>
            <p className="font-semibold text-lg leading-5 line-clamp-2">
              {title}
            </p>
            <p className="text-md text-gray-500">{formatAgo(publishedAt)}</p>
          </Link>
          <Link className="text-md text-gray-500" to={`/channel/${channelId}`}>
            {channelTitle}
          </Link>
        </div>
      </div>
    </div>
  );
}
