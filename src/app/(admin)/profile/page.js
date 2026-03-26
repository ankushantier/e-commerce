"use client";

import React from "react";
import { useSelector } from "react-redux";

const Profilepage = () => {
  const adminData = useSelector((state) => state.admin.adminData);

  return (
    <div className="profile-page">
      <div className="profile-card">
        <h2 className="profile-title">Admin Profile</h2>

        <div className="profile-info">
          <div className="profile-field">
            <span>Username</span>
            <p>{adminData?.name || "--"}</p>
          </div>

          <div className="profile-field">
            <span>Email</span>
            <p>{adminData?.email || "--"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profilepage;