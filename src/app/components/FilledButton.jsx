/** @format */

import React from "react";

const FilledButton = ({ children, classes, ...props }) => {
  return (
    <button
      className={`bg-primary ${classes} text-white rounded-full  px-4 md:px-8 py-2`}
      {...props}
    >
      {children}
    </button>
  );
};

export default FilledButton;
