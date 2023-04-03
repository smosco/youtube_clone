import React from "react";
import VideoCard from "./VideoCard";

export default function Videos({ videos }) {
  return (
    <>
      {videos && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 w-full px-4">
          {videos.map((video) => (
            <VideoCard
              key={video.id.videoId ? video.id.videoId : video.id.channelId}
              video={video}
              direction="col"
              size="medium"
            />
          ))}
        </ul>
      )}
    </>
  );
}
