import React from "react";

export default function ProviderDashboard({ setPage }) {

  return (
    <div className="dashboard">
      <h1>Service Provider Dashboard</h1>

      <button className="card" onClick={() => setPage("pendingOrders")}>
        Pending Orders
      </button>

      <button className="card" onClick={() => setPage("pickupRequests")}>
        Pickup Requests
      </button>

      <button className="card" onClick={() => setPage("completedJobs")}>
        Completed Jobs
      </button>

      <button className="BackBtn" onClick={() => setPage("home")}>
        Back Home
      </button>
    </div>

  );
}