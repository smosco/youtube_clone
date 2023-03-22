import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fakeFetch, fetchFromAPI } from "../utils/fetchFromAPI";
import Videos from "../components/Videos";
import ChannelCard from "../components/ChannelCard";

export default function ChannelDetail() {
  const { channelId } = useParams();
  const [channelDetail, setChannelDetail] = useState([]);
  const [channelVideos, setChannelVideos] = useState([]);

  useEffect(() => {
    //   fetchFromAPI(`channels?part=snippet%2Cstatistics&id=${channelId}`).then(
    //     (data) => setChannelDetail(data)
    //   );
    // 이것때문에 없다고 나왔구나 [{}]이 상태로 받으니까 자꾸 없다고 뜬거다. 그냥 {}상태로 받아야함
    // 초기를 null로 해도 어차피 data.items를 반환해서 배열이기 때문에 [0]써줘야 한다.

    //이건 또 경로를 이렇게 잡아줘야 하는건가? => 차라리 이럴바에 data를 src 안에 넣는게 더 낫다.
    // fakeFetch("/data/channelDetail.json").then((data) =>
    //   setChannelDetail(data[0])
    // );

    // fakeFetch("../data/channelVideo.json").then((data) =>
    //   setChannelVideos(data)
    // );

    //2개를 한번에 하는 함수가 필요했다.? 확실한가?

    const fetchResults = async () => {
      // const data = await fetchFromAPI(`channels?part=snippet%2Cstatistics&id=${channelId}`);
      const data = await fakeFetch("/data/channelDetail.json");

      setChannelDetail(data[0]);

      // const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);
      const videosData = await fakeFetch("/data/channelVideo.json");

      setChannelVideos(videosData);
    };

    fetchResults();
  }, [channelId]);

  // console.log(channelDetail, channelVideos);
  return (
    <div>
      <ChannelCard channelDetail={channelDetail} />
      <Videos videos={channelVideos} />
    </div>
  );
}
