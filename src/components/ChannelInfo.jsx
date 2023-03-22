import React, { useState, useEffect } from "react";
import { fakeFetch } from "../utils/fetchFromAPI";

export default function ChannelInfo({ channelId, channelTitle }) {
  const [channelImg, setChannelImg] = useState([]);
  useEffect(() => {
    fakeFetch("/data/channelDetail.json").then((data) =>
      setChannelImg(data[0].snippet.thumbnails.default.url)
    );
  }, [channelId]);

  return (
    <div className="flex my-4 mb-8 items-center">
      <img
        className="rounded-full w-10 h-10 shrink-0"
        src={channelImg}
        alt={channelTitle}
      />
      {/* <p className="text-lg font-medium ml-2">{channelTitle}</p> */}
    </div>
  );
}
