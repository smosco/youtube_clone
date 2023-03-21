import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Feed from "./pages/Feed";
import NotFound from "./pages/NotFound";
import VideoDetail from "./pages/VideoDetail";
import ChannelDetail from "./pages/ChannelDetail";
import SearchFeed from "./pages/SearchFeed";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Feed /> },
      { path: "/video/:videoId", element: <VideoDetail /> },
      { path: "/search/:searchTerm", element: <SearchFeed /> },
      { path: "/channel/:channelId", element: <ChannelDetail /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<React.StrictMode>
  <RouterProvider router={router} />
  //</React.StrictMode>
);
