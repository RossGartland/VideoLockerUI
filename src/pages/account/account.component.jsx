import React from "react";
import { useEffect, useState } from "react";
import UserService from "../../services/user.service";

const Account = () => {
  const currentUser = UserService.getCurrentUser();

  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    UserService.getUserDetails(currentUser.userID)
      .then((userDetails) => setUserDetails(userDetails))
      .catch((error) => {});
    console.log(userDetails);
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong> Hi {currentUser.username}</strong>
        </h3>
        <p>You account details are:</p>
        {userDetails.map((item, index) => {
          return (
            <React.Fragment>
              <p>
                <b>Username:</b> {item.username} <br />
                <b>Email Address:</b> {item.emailAddress}
                <br />
                <b>Forename:</b> {item.forename}
                <br />
                <b>Surname:</b> {item.surname}
              </p>
            </React.Fragment>
          );
        })}
      </header>
    </div>
  );
};

export default Account;
