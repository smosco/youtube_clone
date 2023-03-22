import React from "react";
import VideoCard from "./VideoCard";

export default function RelatedVideos({ videos }) {
  return (
    <>
      {videos && (
        <ul className="flex flex-col gap-2">
          {videos.map((video) => (
            <VideoCard
              key={video.id.videoId}
              video={video}
              direction="row"
              size="medium"
              display="none"
            />
          ))}
        </ul>
      )}
    </>
  );
}
