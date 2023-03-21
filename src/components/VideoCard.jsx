import React from "react";
import { Link } from "react-router-dom";
export default function VideoCard({ video }) {
  const { id, snippet } = video;
  return (
    <div>
      <Link to={`/video/${id}`}>{snippet.title}</Link>
    </div>
  );
}
