"use client"
import { useEffect } from "react";
import { useSelector } from "react-redux";

const DashboardPage = () => {
  const totalUserCount= useSelector((state) => state.users.totalUser)

  return (
    <div className="dashboard">
      <div className="dashboard-card">
        <div className="card-info">
          <p>Total Users</p>
          <h2>{totalUserCount}</h2>
        </div>
      </div>

      <div className="dashboard-card">
        <div className="card-info">
          <p>Active Users</p>
          <h2>980</h2>
        </div>
      </div>

      <div className="dashboard-card">
        <div className="card-info">
          <p>Total Products</p>
          <h2>320</h2>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;