import React from "react";
import SocialIcon from "./SocialIcon";

const Footer = () => {
  const btnData = ["facebook-f", "twitter", "linkedin-in", "dribbble"];
  return (
    <div>
      <footer className="footer text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Location</h4>
              <p className="lead mb-0">
                2215 John Daniel Drive
                <br />
                Clark, MO 65243
              </p>
            </div>

            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Around the Web</h4>
              {btnData.map((data, i) => {
                return <SocialIcon icon={data} key={i} />;
              })}
            </div>

            <div className="col-lg-4">
              <h4 className="text-uppercase mb-4">About Freelancer</h4>
              <p className="lead mb-0">
                Freelance is a free to use, MIT licensed Bootstrap theme created
                by
                <a href="http://startbootstrap.com">Start Bootstrap</a>.
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright py-4 text-center text-white">
        <div className="container">
          <small>Copyright &copy; Your Website 2023</small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
