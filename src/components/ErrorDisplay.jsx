import React from "react";

const ErrorDisplay = ({ error: { message, status } }) => {
  return (
    <>
      <p className="error">{message}, please try again</p>
      <p>(status code {status})</p>
    </>
  );
};

export default ErrorDisplay;
