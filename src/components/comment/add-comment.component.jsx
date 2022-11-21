import React from "react";
import VideoService from "../../services/video.service";
import { useForm } from "react-hook-form";

function AddComment(props) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("userID", props.userID);
    formData.append("username", props.username);
    formData.append("commentData", data.commentData);
    console.log(formData);
    VideoService.addComment(props.videoID, formData)
      .then(() => {
        window.location.reload();
      })
      .catch((e) => {
        console.log(e);
        alert(JSON.stringify(e.data));
      });
  };

  return (
    <div>
      <h4>Add a comment</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <input
            type="commentData"
            className="form-control"
            id="commentData"
            placeholder="Comment"
            {...register("commentData", { required: true })}
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default AddComment;
