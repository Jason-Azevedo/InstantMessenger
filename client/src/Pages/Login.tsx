import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="container--middle">
      <form className="form">
        <h2 className="form__subheader">Welcome to I.M.</h2>
        <h1 className="form__header">Login</h1>

        <label htmlFor="" className="form__label">
          Username / Email
        </label>
        <input type="text" className="form__input" required />

        <label htmlFor="" className="form__label">
          Password
        </label>
        <input type="password" className="form__input" required />

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
