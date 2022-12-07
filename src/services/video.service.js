import { responsiveFontSizes } from "@mui/material";
import axios from "axios";
import UploadVideo from "../components/upload-video/upload-video.component";

class VideoService {
  getAllVideos() {
    const API_URL =
      "https://a2-backend.azurewebsites.net/api/v1.0/videos?code=p00QulcvNEgpjiG2UO-gshPMYPnS22QNnYng7rPoFBNtAzFu6MtCbg==";
    return axios.get(API_URL).then((resp) => {
      console.log(resp.data);
      return resp.data;
    });
  }

  getVideoByID(videoID) {
    const API_URL1 = "https://a2-backend.azurewebsites.net/api/v1.0/videos/";
    const API_URL2 =
      "?code=FovacDFVriiz6RJzohGD8EfEINeDhL8bBKr37Dlt015QAzFuHMvLSQ==";
    console.log(API_URL1 + videoID + API_URL2);
    return axios.get(API_URL1 + videoID + API_URL2).then((resp) => {
      return resp.data;
    });
  }

  getComments(videoID) {
    const API_URL1 = "https://a2-backend.azurewebsites.net/api/v1.0/videos/";
    const API_URL2 = "/comments?";

    return axios.get(API_URL1 + videoID + API_URL2).then((resp) => {
      console.log(resp.data);
      return resp.data;
    });
  }
  addComment(videoID, formData) {
    const API_URL1 = "https://a2-backend.azurewebsites.net/api/v1.0/videos/";
    const API_URL2 = "/comments";
    return axios
      .post(API_URL1 + videoID + API_URL2, formData, {
        "Content-Type": "multipart/form-data",
      })
      .then((response) => {
        if (response.data) {
          return response.data;
        }
        return response.data;
      });
  }
}

export default new VideoService();
