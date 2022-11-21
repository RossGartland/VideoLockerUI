import { responsiveFontSizes } from "@mui/material";
import axios from "axios";
import UploadVideo from "../components/upload-video/upload-video.component";

class VideoService {
  getAllVideos() {
    const API_URL =
      "https://a2-backend.azurewebsites.net/api/v1.0/videos?code=XDnK65rmY2AA3F1DyjVT5N3jy6-3o3uBIvJFOx8BZ_I6AzFuh5XMLA==";
    return axios.get(API_URL).then((resp) => {
      console.log(resp.data);
      return resp.data;
    });
  }

  getVideoByID(videoID) {
    const API_URL1 = "https://a2-backend.azurewebsites.net/api/v1.0/videos/";
    const API_URL2 =
      "?code=Lq8mcgiQLkSLKT-Q8SZWKMbsbPfOgC61chU0GUHtCerHAzFuifHylg==";
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
