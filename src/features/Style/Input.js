import React from "react";

const Input = ({ type, placeholder, value, handleOnChange }) => {
  return (
    <div className="input-style">
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={e => handleOnChange(e)}
      />
    </div>
  );
};

export default Input;
