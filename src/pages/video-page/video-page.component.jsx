import React from "react";
import { useState, useEffect } from "react";
import VideoContent from "../../components/video/video.component";
import VideoService from "../../services/video.service";
import { useLocation } from "react-router-dom";
import Comment from "../../components/comment/comment.component";
import "./video-page.style.css";
import AddComment from "../../components/comment/add-comment.component";
import UserService from "../../services/user.service";

function VideoPage(props) {
  const currentUser = UserService.getCurrentUser();
  const [videos, setVideos] = useState([]);
  const location = useLocation();
  const { videoID } = location.state;

  useEffect(() => {
    VideoService.getVideoByID(videoID)
      .then((videos) => setVideos(videos))
      .catch((error) => {});
  }, []);

  console.log(videos);
  return (
    <div className="container">
      {videos.map((item, index) => {
        return (
          <React.Fragment key={item.id}>
            <h2 className="video-title">{item.videoTitle}</h2>
            <VideoContent videoPath={item.filePath} />
            <div className="video-description">
              <p>{item.description}</p>
              <p>
                <b>Age Rating: </b>
                {item.age}
              </p>
              <p>
                <b>Genre: </b>
                {item.genre}
              </p>
              <p>
                <b>Publisher: </b>
                {item.publisher}
              </p>
              <p>
                <b>Producer: </b>
                {item.producer}
              </p>
            </div>
            <br />
            <div className="add-comment">
              <AddComment
                videoID={item.id}
                userID={currentUser.userID}
                username={currentUser.username}
              />
            </div>
            <div className="comment-container">
              <Comment videoID={item.id} />
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default VideoPage;
