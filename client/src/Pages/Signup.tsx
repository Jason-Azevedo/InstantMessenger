import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="container--middle">
      <form className="form">
        <h2 className="form__subheader">Welcome to I.M.</h2>
        <h1 className="form__header">Sign Up</h1>

        <label htmlFor="" className="form__label">
          Username
        </label>
        <input type="text" className="form__input" required />

        <label htmlFor="" className="form__label">
          Email
        </label>
        <input type="email" className="form__input" required />

        <label htmlFor="" className="form__label">
          Password
        </label>
        <input type="password" className="form__input" required />

        <p className="form__text">
          Already have an account? <Link to="/login">Login!</Link>
        </p>

        <button type="submit" className="btn">
          CREATE
        </button>
      </form>
    </div>
  );
}
