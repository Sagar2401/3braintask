import React from "react";
import StarDivider from "../Common/StarDivider";

const Model = ({ key, image, title, modelID, show, item, setShow }) => {
  const handleClick = () => {
    setShow({
      show: false,
      data: null,
    });
  };
  return (
    <div
      className={
        show === true
          ? "portfolio-modal modal fade show"
          : "portfolio-modal modal fade"
      }
      id={modelID}
      tabindex="-1"
      aria-labelledby={modelID}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header border-0">
            <button
              className="btn-close"
              type="button"
              onClick={handleClick}
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body text-center pb-5">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <StarDivider label={title} />

                  <img
                    className="img-fluid rounded mb-5"
                    src={image}
                    alt="..."
                  />

                  <p className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Mollitia neque assumenda ipsam nihil, molestias magnam,
                    recusandae quos quis inventore quisquam velit asperiores,
                    vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                    Nam.
                  </p>
                  <button
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                    onClick={handleClick}
                  >
                    <i className="fas fa-xmark fa-fw"></i>
                    Close Window
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
