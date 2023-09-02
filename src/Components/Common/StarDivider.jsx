import React from "react";

const StarDivider = ({ label, light = false }) => {
  return (
    <>
      <h2
        className={`page-section-heading text-center text-uppercase ${
          light && "text-white"
        }`}
      >
        {label}
      </h2>
      <div className={`divider-custom ${light && "divider-light"}`}>
        <div className="divider-custom-line"></div>
        <div className="divider-custom-icon">
          <i className="fas fa-star"></i>
        </div>
        <div className="divider-custom-line"></div>
      </div>
    </>
  );
};

export default StarDivider;
