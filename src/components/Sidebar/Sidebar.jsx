import React from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">
        <h2>Logo</h2>
      </div>

      <ul className="menu">
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>

        <li>
          <Link href="/users">Users</Link>
        </li>

        <li>
          <Link href="/products">Products</Link>
        </li>

        <li>
          <Link href="/settings">Settings</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;