import React, { useState } from "react";

export default function RegisterSection({ setPage }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("customer");

  const handleRegister = () => {

    const user = {
      name,
      email,
      password,
      role,
    };

    localStorage.setItem(
      "spotlessUser",
      JSON.stringify(user)
    );

    alert("Registered Successfully!");

    setPage("login");
  };

  return (
    <section className="RegisterSection">

      <div className="RegisterCard">

        <h2>Create Account</h2>

        <input
          type="text"
          placeholder="Full Name"
          onChange={(e) => setName(e.target.value)}
        />

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

        <select
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="customer">
            Customer
          </option>

          <option value="provider">
            Service Provider
          </option>
        </select>

        <button onClick={handleRegister}>
          Register
        </button>

      </div>

    </section>
  );
}