"use client"
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {

  const pathname = usePathname();

  const sideBarLinks = [
    { path: "/dashboard", label: "Dashboard" },
    { path: "/users", label: "Users" },
    { path: "/products", label: "Products" },
    { path: "/settings", label: "Settings" },
  ]
  return (
    <aside className="sidebar">
      <div className="logo">
        <h2>Logo</h2>
      </div>

      <ul className="menu">
        {
          sideBarLinks.map((item, index) => {
            return (
              <li key={index}>
                <Link href={item.path}
                  className={pathname === item.path ? "active" : ""}
                >
                  {item.label}
                </Link>
              </li>
            )
          })
        }
      </ul>
    </aside>
  );
};

export default Sidebar;