import React from "react";

const Button = ({ className, content, ...rest }) => {
  return (
    <button
      {...rest}
      className={`${className} p-2 rounded-full text-white transition-colors`}
    >
      {content}
    </button>
  );
};

export default Button;
