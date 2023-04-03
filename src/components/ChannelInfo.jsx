import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { fakeFetch, fetchFromAPI } from "../utils/fetchFromAPI";
import { numFormat } from "../utils/count";
import Loader from "./Loader";

export default function ChannelInfo({ id, title, display }) {
  const [channelDetail, setChannelDetail] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    // 특정 channelId의 채널 정보를 받아옴
    // fetchFromAPI(`channels?part=snippet%2Cstatistics&id=${id}`) //
    //   .then((data) => setChannelDetail(data[0]));
    fakeFetch("/data/channelDetail.json").then((data) =>
      setChannelDetail(data[0])
    );
  }, [id]);

  // channelDetail은 []로 초기값이 있으니 받아와야 있을수있는 snippet이 있는지 확인하고 없으면 로더를 보여준다.
  !channelDetail?.snippet && <Loader />;

  const {
    snippet: {
      thumbnails: {
        default: { url },
      },
    },
    statistics: { subscriberCount },
  } = channelDetail;

  return (
    <Link
      to={`/channel/${id}`}
      className="flex my-2 items-center cursor-pointer"
    >
      <img className="rounded-full w-10 h-10" src={url} alt={title} />
      <div className={`ml-2 ${display === "none" && "hidden"}`}>
        <p className="text-lg font-semibold">{title}</p>
        <p className="text-sm text-gray-500">
          {numFormat(parseInt(subscriberCount))}&nbsp;subscribers
        </p>
      </div>
    </Link>
  );
}
