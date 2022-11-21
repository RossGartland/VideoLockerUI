import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserService from "../../services/user.service";

function UploadVideo() {
  const currentUser = UserService.getCurrentUser();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("description", data.description);
    formData.append("videoTitle", data.videoTitle);
    formData.append("publisher", currentUser.username);
    formData.append("producer", data.producer);
    formData.append("genre", data.genre);
    formData.append("age", data.age);
    formData.append("video", data.video[0]);

    const res = await axios({
      method: "post",
      url:
        "https://a2-backend.azurewebsites.net/api/v1.0/videos?code=xQX1ntswzMaJJcrsMeuFiSq88IY-M6unxUiYg6ijYhzyAzFu7UFacA==",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((res) => {
        alert(JSON.stringify(res.data));
        navigate("/videos");
        window.location.reload();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="container">
      <h1>Upload Video</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Title"
            {...register("videoTitle", { required: true })}
          />
        </div>
        <div className="form-group">
          <input
            type="description"
            className="form-control"
            id="description"
            placeholder="Description"
            {...register("description", { required: true })}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="producer"
            placeholder="Producer"
            {...register("producer", { required: true })}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="genre"
            placeholder="Genre"
            {...register("genre", { required: true })}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="age"
            placeholder="Age Rating"
            {...register("age", { required: true })}
          />
        </div>
        <div className="form-group">
          <input
            type="file"
            className="form-control-file"
            id="exampleFormControlFile1"
            {...register("video", { required: true })}
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default UploadVideo;
