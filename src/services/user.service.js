import { responsiveFontSizes } from "@mui/material";
import axios from "axios";
import jwt_decode from "jwt-decode";
import UploadVideo from "../components/upload-video/upload-video.component";

const login = (formData) => {
  return axios
    .post(
      "https://a2-backend.azurewebsites.net/api/v1.0/auth/login?",
      formData,
      {
        "Content-Type": "multipart/form-data",
      }
    )
    .then((response) => {
      if (response.data) {
        const user = jwt_decode(response.data);
        localStorage.setItem("user", JSON.stringify(user));
        return user;
      }
      return response.data;
    });
};

const getUserDetails = (userID) => {
  const url = "https://a2-backend.azurewebsites.net/api/v1.0/auth/user/";
  return axios.get(url + userID).then((res) => {
    return res.data;
  });
};
const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const logout = () => {
  localStorage.removeItem("user");
};

const UserService = {
  login,
  logout,
  getCurrentUser,
  getUserDetails,
};

export default UserService;
