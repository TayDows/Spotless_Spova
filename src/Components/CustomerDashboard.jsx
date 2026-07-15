import React from "react";

export default function CustomerDashboard({ setPage }) {

  return (
    <div className="dashboard">
      <h1>Customer Dashboard</h1>

      <button className="card" onClick={() => setPage("bookCleaning")}>
        Book Shoe Cleaning
      </button>

      <button className="card" onClick={() => setPage("trackOrders")}>
        Track Orders
      </button>

      <button className="card" onClick={() => setPage("pricing")}>
        View Pricing
      </button>

      <button className="BackBtn" onClick={() => setPage("home")}>
        Back Home
      </button>
    </div>

  );
}