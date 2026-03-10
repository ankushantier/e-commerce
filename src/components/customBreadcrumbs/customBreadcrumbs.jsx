// components/CustomBreadcrumbs.jsx
import Link from "next/link";
import Breadcrumb from "react-bootstrap/Breadcrumb";

const CustomBreadcrumbs = ({ breadcrumbData }) => {
  return (
    <Breadcrumb>
      {breadcrumbData.map((item, index) => (
        <Breadcrumb.Item key={index} active={!item.path}>
          {item.path ? (
            <Link href={item.path}>{item.label}</Link>
          ) : (
            item.label
          )}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default CustomBreadcrumbs;