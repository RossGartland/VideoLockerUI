import React from "react";
import { useEffect, useState } from "react";
import VideoService from "../../services/video.service";
import Moment from "react-moment";

function Comment(props) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    VideoService.getComments(props.videoID)
      .then((comments) => setComments(comments))
      .catch((error) => {});
  }, [props.videoID]);

  return (
    <div>
      <div className="card">
        <div class="container">
          <hr class="my-0" />
          {comments.map((item, index) => {
            return (
              <React.Fragment key={item.id}>
                <div class="card-body p-4">
                  <div class="d-flex flex-start">
                    <div>
                      <h6 class="fw-bold mb-1">{item.username}</h6>
                      <div class="d-flex align-items-center mb-3">
                        <p class="mb-0">
                          {" "}
                          <Moment>{item.sentDate}</Moment>
                        </p>
                        <a href="#!" class="link-muted">
                          <i class="fas fa-pencil-alt ms-2"></i>
                        </a>
                        <a href="#!" class="link-muted">
                          <i class="fas fa-redo-alt ms-2"></i>
                        </a>
                        <a href="#!" class="link-muted">
                          <i class="fas fa-heart ms-2"></i>
                        </a>
                      </div>
                      <p class="mb-0">{item.commentData}</p>
                    </div>
                  </div>
                </div>
                <hr class="my-0" />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Comment;
