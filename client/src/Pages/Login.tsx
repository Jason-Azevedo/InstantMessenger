import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="container--center">
      <form className="form">
        <h1 className="form__header">Please Login</h1>

        <label htmlFor="" className="form__label">
          Username
        </label>
        <input type="text" className="form__input" />

        <label htmlFor="" className="form__label">
          Password
        </label>
        <input type="password" className="form__input" />

        <p className="form__text">
          Don't have an account? <Link to="/signup">Create one!</Link>
        </p>

        <button type="submit" className="btn">
          LOGIN
        </button>
      </form>
    </div>
  );
}
