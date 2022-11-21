import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/dashboard/dashboard.component";
import MyLayout from "./components/layout/layout.component";
import CreatorDashboard from "./pages/creator-board/creator-board.component";
import Login from "./pages/login/login.component";
import SignUp from "./pages/sign-up/sign-up.component";
import VideoPage from "./pages/video-page/video-page.component";
import Account from "./pages/account/account.component";
import UserService from "./services/user.service";

const App = () => {
  const currentUser = UserService.getCurrentUser();

  return (
    <div>
      {currentUser && <MyLayout />}
      <Routes>
        <Route exact path="/videos" element={<Dashboard />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/" element={<Login />} />
        <Route exact path="/upload" element={<CreatorDashboard />} />
        <Route exact path="videos/:id" element={<VideoPage />} />
        <Route exact path="/account" element={<Account />} />
      </Routes>
    </div>
  );
};

export default App;
