'use client'

import Link from "next/link";
import Breadcrumb from "react-bootstrap/Breadcrumb";

const CustomBreadcrumbs = ({ breadcrumbData }) => {
  return (
    <div className="breadcrumb-wrapper">
      <Breadcrumb>
        {breadcrumbData.map((item, index) => {
          const isActive = !item.path;

          return (
            <Breadcrumb.Item key={index} active={isActive}>
              {!isActive ? (
                <Link href={item.path || "#"}>
                  {item.label}
                </Link>
              ) : (
                item.label
              )}
            </Breadcrumb.Item>
          );
        })}
      </Breadcrumb>
    </div>
  );
};

export default CustomBreadcrumbs;