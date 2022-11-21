import React from "react";
import { Player } from "video-react";
import "../../../node_modules/video-react/dist/video-react.css";
import Comment from "../comment/comment.component";
import "./video.style.css";
function VideoContent(props) {
  return (
    <div>
      <div className="d-flex justify-content-center video-container">
        <Player
          playsInline
          width={600}
          height={400}
          fluid={false}
          src={props.videoPath}
        />
      </div>
    </div>
  );
}

export default VideoContent;
