"use client";

import { useRouter } from "next/navigation";
import { logoutAdmin } from "./../../redux/Slices/admin.slice";
import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const router = useRouter()
  const adminData = useSelector((state) => state.admin.adminData)
  const handleLogout = () => {
    dispatch(logoutAdmin())
    router.push("/login")
  }

  return (
    <header className="header">
      <h2 className="page-title">Dashboard</h2>

      <Dropdown align="end" className="profile-dropdown">
        <Dropdown.Toggle className="profile-toggle">
          <div className="avatar">{adminData?.name?.charAt(0).toUpperCase()}</div>

          <div className="user-info">
            <span className="name">{adminData?.name}</span>
            <span className="email">{adminData?.email}</span>
          </div>
        </Dropdown.Toggle>

        <Dropdown.Menu className="dropdown-menu-custom">
          <Dropdown.Item href="/profile">Profile</Dropdown.Item>
          <Dropdown.Item href="/settings">Settings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item className="logout" onClick={handleLogout}>Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </header>
  );
};

export default Header;