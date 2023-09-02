import React from "react";

const SocialIcon = ({ icon, i }) => {
  return (
    <a className="btn btn-outline-light btn-social mx-1" href="#!">
      <i className={`fab fa-fw fa-${icon}`}></i>
    </a>
  );
};

export default SocialIcon;
