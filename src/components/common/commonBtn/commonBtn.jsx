import React from "react";

const CommonButton = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  type = "button",
  onClick,
  text
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`common-btn ${variant} ${size} ${
        fullWidth ? "full-width" : ""
      }`}
    >
      {text}
    </button>
  );
};

export default CommonButton;