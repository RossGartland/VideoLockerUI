import React, { Component } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import UserService from "../../services/user.service";

function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("password", data.password);
    console.log(formData);
    UserService.login(formData)
      .then(() => {
        navigate("/videos");
        window.location.reload();
      })
      .catch((e) => {
        console.log(e);
        alert(JSON.stringify(e.data));
      });
  };

  return (
    <div className="my-container container">
      <h1>Login</h1>
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
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
        </div>
        <input type="submit" value="Login" />
      </form>
      <div>
        <br />
        <Link to={"/signup"}>Don't have an account? Sign up here!</Link>
      </div>
    </div>
  );
}

export default Login;
