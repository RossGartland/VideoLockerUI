import React, { Component } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("emailAddress", data.emailAddress);
    formData.append("forename", data.forename);
    formData.append("surname", data.surname);
    formData.append("password", data.password);
    console.log(formData);
    const res = await axios({
      method: "post",
      url: "https://a2-backend.azurewebsites.net/api/v1.0/auth/signup?",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((res) => {
        if (res?.status === 200) navigate("/");
        else alert(JSON.stringify(res.response.data));
      })
      .catch((e) => {
        console.log(e);
        alert(JSON.stringify(e.response.data));
      });
  };

  return (
    <div className="my-container container">
      <h1>Sign-Up</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <input
            type="username"
            className="form-control"
            id="username"
            placeholder="Username"
            {...register("username", { required: true })}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="emailAddress"
            placeholder="Email Address"
            {...register("emailAddress", { required: true })}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="forename"
            className="form-control"
            id="forename"
            placeholder="Forename"
            {...register("forename", { required: true })}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="surname"
            placeholder="Surname"
            {...register("surname", { required: true })}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
        </div>
        <input type="submit" value="Sign Up" />
      </form>
      <div>
        <br />
        <Link to={"/"}>Already have an account? Login here!</Link>
      </div>
    </div>
  );
}

export default SignUp;
