import React from "react";
import { Outlet } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navbar from "./components/Navbar";
import Feed from "./pages/Feed";
import NotFound from "./pages/NotFound";
import VideoDetail from "./pages/VideoDetail";
import ChannelDetail from "./pages/ChannelDetail";
import SearchFeed from "./pages/SearchFeed";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Feed /> },
      { path: "/watch/:videoId", element: <VideoDetail /> },
      { path: "/search/:searchTerm", element: <SearchFeed /> },
      { path: "/channel/:channelId", element: <ChannelDetail /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
