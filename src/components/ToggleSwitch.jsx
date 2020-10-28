import React from "react";

const ToggleSwitch = (props) => {
  const { toggleTempUnit } = props;
  return (
    <label className="switch">
      <input type="checkbox" id="togBtn" onClick={toggleTempUnit} />
      <div className="slider round"></div>
    </label>
  );
};

export default ToggleSwitch;
