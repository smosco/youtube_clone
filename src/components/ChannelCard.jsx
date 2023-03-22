// import React from "react";
// import { Link } from "react-router-dom";

// export default function ChannelCard({ channelDetail }) {
//   return (
//     <div>
//       <Link to={`/channel/${channelDetail?.id}`}>
//         <div>
//           <div>
//             <img
//               src={channelDetail?.snippet?.thumbnails?.high?.url}
//               alt={channelDetail?.snippet?.title}
//             />
//           </div>
//           <div>{channelDetail?.snippet?.title}</div>
//           {channelDetail?.statistics?.subscriberCount && (
//             <div>
//               {parseInt(
//                 channelDetail?.statistics?.subscriberCount
//               ).toLocaleString("en-US")}{" "}
//               Subscribers
//             </div>
//           )}
//         </div>
//       </Link>
//     </div>
//   );
// }
