import React from "react";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

export default function Videos({ videos }) {
  return (
    <div>
      {videos.map((video, idx) => (
        <div>
          {video.id.videoId && <VideoCard video={video} />}
          {/* {video.snippet.channelId && (
            <ChannelCard channelId={video.snippet.channelId} />
          )} */}
        </div>
      ))}
    </div>
  );
}
