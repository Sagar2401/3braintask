import React from "react";
import TextField from "../Common/TextField";
import Button from "../Common/Button";
import StarDivider from "../Common/StarDivider";

const Contact = () => {
  return (
    <section className="page-section" id="contact">
      <div className="container">
        <StarDivider label={" Contact Me"} />

        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-7">
            <form id="contactForm" data-sb-form-api-token="API_TOKEN">
              <TextField
                type="text"
                label="Full name"
                name="name"
                placeholder="Enter your name..."
              />

              <TextField
                type="email"
                label="Email address"
                name="email"
                placeholder="name@example.com"
              />
              <TextField
                type="tel"
                label="Phone number"
                name="phone"
                placeholder="(123) 456-7890"
              />

              <div className="form-floating mb-3">
                <textarea
                  className="form-control"
                  id="message"
                  type="text"
                  placeholder="Enter your message here..."
                  style={{ height: "10rem" }}
                  data-sb-validations="required"
                ></textarea>
                <label htmlFor="message">Message</label>
                <div
                  className="invalid-feedback"
                  data-sb-feedback="message:required"
                >
                  A message is required.
                </div>
              </div>

              <div className="d-none" id="submitSuccessMessage">
                <div className="text-center mb-3">
                  <div className="fw-bolder">Form submission successful!</div>
                  To activate this form, sign up at
                  <br />
                  <a href="https://startbootstrap.com/solution/contact-forms">
                    https://startbootstrap.com/solution/contact-forms
                  </a>
                </div>
              </div>

              <div className="d-none" id="submitErrorMessage">
                <div className="text-center text-danger mb-3">
                  Error sending message!
                </div>
              </div>

              <Button
                className="btn btn-primary btn-xl disabled"
                id="submitButton"
                type="submit"
              >
                Send
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
