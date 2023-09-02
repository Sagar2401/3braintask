import React from "react";

const Button = ({ className, onClick, children, ...rest }) => {
  return (
    <button className={className} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default Button;
