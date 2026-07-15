import React from "react";

export default function Navbar({ setPage }) {
  return (
    <nav className="Navbar">
      <div className="Home">
        <button onClick={() => setPage("home")}>
          Home
        </button>

        <button onClick={() => setPage("services")}>
          Services
        </button>

        <button onClick={() => setPage("pricing")}>
          Pricing
        </button>

        <button onClick={() => setPage("contact")}>
          Contact
        </button>
      </div>
    </nav>
  );
}