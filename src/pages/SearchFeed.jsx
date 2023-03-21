import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFn";
import axios from "axios";

export default function SearchFeed() {
  const { searchTerm } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["search", searchTerm], async () => {
    const { res } = await axios.get("data/search.json");
    return res.items;
  });
  return (
    <div>
      <></>
    </div>
  );
}
