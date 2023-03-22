import React from "react";
import VideoCard from "./VideoCard";

export default function Videos({ videos }) {
  return (
    <>
      {videos && (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 gap-y-4 w-full px-4">
          {videos.map((video) => (
            <VideoCard
              key={video.id.videoId}
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
