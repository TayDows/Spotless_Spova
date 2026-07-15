import React, { useState } from "react";

export default function LoginSection({ setPage }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {

    const savedUser = JSON.parse(
      localStorage.getItem("spotlessUser")
    );

    if (
      savedUser &&
      email === savedUser.email &&
      password === savedUser.password
    ) {

      if (savedUser.role === "customer") {
        setPage("customerDashboard");
      } else {
        setPage("providerDashboard");
      }

    } else {
      alert("Wrong Login Details");
    }
  };

  return (
    <section className="LoginSection">

      <div className="LoginCard">

        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>
          Login
        </button>

      </div>

    </section>
  );
}