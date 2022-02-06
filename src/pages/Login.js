import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { doLoginThunk } from "../redux/actions";
import { useDispatch } from "react-redux";
import "../styles/login.css";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [loginError, setLoginError] = useState("");

  const dispatch = useDispatch();

  const submit = (data) => {
    dispatch(doLoginThunk(data)).catch(() =>
      setLoginError("Incorrect credentials")
    );
  };

  return (
    <main className="mainLogin">
      <div className="cardLogin">
        <h2>Jewelry Store</h2>
        <div className="divardLogin">
          <h4>Test data</h4>
          <p>
            <span>
              <i className="far fa-user"></i>
            </span>{" "}
            admin@admin.com
          </p>
          <p>
            <span>
              <i className="fas fa-lock" style={{ fontSize: "1rem" }}></i>
            </span>{" "}
            root
          </p>
        </div>
        <form action="" onSubmit={handleSubmit(submit)}>
          <div className="input-container">
            <p>Enter your email</p>
            <label htmlFor="email">
              <input
                {...register("email")}
                id="email"
                type="email"
                required
                className="inputLogin"
              />
            </label>
          </div>
          <div className="input-container">
            <p>Enter your password</p>
            <label htmlFor="password">
              <input
                {...register("password")}
                id="password"
                type="password"
                required
                className="inputLogin"
              />
            </label>
          </div>
          <button className="buttonLogin">Log In</button>
        </form>
        {loginError}
      </div>
    </main>
  );
};

export default Login;
