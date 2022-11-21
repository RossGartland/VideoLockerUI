import React from "react";
import { useState, useEffect } from "react";
import "../../../node_modules/video-react/dist/video-react.css";
import VideoService from "../../services/video.service";
import { Link } from "react-router-dom";
import "./dashboard.style.css";

function Dashboard(props) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    VideoService.getAllVideos()
      .then((videos) => setVideos(videos))
      .catch((error) => {});
  }, []);

  return (
    <div className="dashboard">
      <h1>All Videos</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Genre</th>
            <th scope="col">Age</th>
            <th scope="col">Publisher</th>
            <th scope="col">Producer</th>
          </tr>
        </thead>
        {videos.map((item, index) => {
          return (
            <tbody>
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>
                  <Link to={item.id} state={{ videoID: item.id }}>
                    {item.videoTitle}
                  </Link>
                </td>
                <td>{item.description}</td>
                <td>{item.genre}</td>
                <td>{item.age}</td>
                <td>{item.publisher}</td>
                <td>{item.producer}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default Dashboard;

// import React from "react";
// import { Player } from "video-react";
// import "../../../node_modules/video-react/dist/video-react.css";
// import Videos from "../video/video.component";
// import VideoService from "../../services/video.service";
// class Dashboard extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       video: VideoService.getVideoByID(
//         "JTJmdmlkZW9zJTJmS29rbytWb2NhbGl6ZXMrYStXaG8rU291bmQubXA0"
//       ),
//       allVideos: [],
//     };
//   }

//   componentDidMount() {
//     this.state = {
//       allVideos: VideoService.getAllVideos(),
//     };
//   }

//   render() {
//     const { video } = this.state;
//     return (
//       <div>
//         <table class="table">
//           <thead>
//             <tr>
//               <th scope="col">ID</th>
//               <th scope="col">Name</th>
//               <th scope="col">Path</th>
//               <th scope="col">LastModified</th>
//               <th scope="col">Size</th>
//               <th scope="col">FileLocator</th>
//             </tr>
//           </thead>
//           {allVideos.map((video, index) => {
//             return (
//               <tbody>
//                 <tr key={video.Id}>
//                   <th scope="row">{video.Id}</th>
//                   <td>{video.Name}</td>
//                   <td>{video.Path}</td>
//                   <td>{video.LastModified}</td>
//                   <td>{video.Size}</td>
//                   <td>{video.FileLocator}</td>
//                 </tr>
//               </tbody>
//             );
//           })}
//         </table>
//       </div>
//     );
//   }
// }

// export default Dashboard;
