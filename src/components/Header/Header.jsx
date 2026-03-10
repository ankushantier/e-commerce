"use client";

import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const Header = () => {
  return (
    <header className="header">
      <h2 className="page-title">Dashboard</h2>

      <Dropdown align="end" className="profile-dropdown">
        <Dropdown.Toggle className="profile-toggle">
          <div className="avatar">A</div>

          <div className="user-info">
            <span className="name">Ankush Singh</span>
            <span className="email">ankush@email.com</span>
          </div>
        </Dropdown.Toggle>

        <Dropdown.Menu className="dropdown-menu-custom">
          <div className="dropdown-user">
            <div className="avatar">A</div>

            <div>
              <p className="name">Ankush Singh</p>
              <p className="email">ankush@email.com</p>
            </div>
          </div>

          <Dropdown.Item href="/profile">Profile</Dropdown.Item>
          <Dropdown.Item href="/settings">Settings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item className="logout">Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </header>
  );
};

export default Header;