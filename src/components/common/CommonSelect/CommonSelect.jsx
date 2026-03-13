import React from "react";

const CommonSelect = ({
  label,
  options = [],
  placeholder = "Select option",
  value,
  onChange,
  name,
  disabled = false,
}) => {
  return (
    <div className="common-select">
      {label && <label>{label}</label>}

      <select
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
      >
        <option value="">{placeholder}</option>

        {options.map((item, index) => (
          <option key={index} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CommonSelect;