import { React, useEffect, useState } from "react";
import "./nav.style.css";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../../services/user.service";
function MyNav() {
  const [showAdmin, setShowAdmin] = useState(false);
  const currentUser = UserService.getCurrentUser();
  const navigate = useNavigate();
  useEffect(() => {
    console.log(currentUser);
    if (currentUser !== null) {
      setShowAdmin(currentUser.isAdmin);
    }
  }, []);
  const logOut = () => {
    UserService.logout();
    navigate("/");
    window.location.reload();
  };

  return (
    <nav className="nav nav-pills flex-column flex-sm-row mynav">
      <Link to={"/videos"} className="flex-sm-fill text-sm-center nav-link">
        Videos
      </Link>
      {showAdmin && (
        <Link to={"/upload"} className="flex-sm-fill text-sm-center nav-link">
          Upload
        </Link>
      )}
      <Link to={"/account"} className="flex-sm-fill text-sm-center nav-link">
        My Account
      </Link>
      <Link
        className="flex-sm-fill text-sm-center nav-link"
        to={"/"}
        onClick={logOut}
      >
        Sign-out
      </Link>
    </nav>
  );
}

export default MyNav;
