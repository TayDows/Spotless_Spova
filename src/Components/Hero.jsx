import React from "react";

export default function Hero({ setPage }) {
  return (
    <>
      <div className="TopRightAuth">
        <button
          className="LoginBtn"
          onClick={() => setPage("login")}
        >
          Login
        </button>

        <button
          className="RegisterBtn"
          onClick={() => setPage("register")}
        >
          Register
        </button>
      </div>

      <div className="Logo">
        <img
          className="Logo_img"
          src="Logo.png"
          alt="Spotless Logo"
        />

        <h1 className="AppName">
          Spotless Spova
        </h1>
      </div>
    </>
  );
}