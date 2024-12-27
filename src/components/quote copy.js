import React from "react";
import { Form, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
const Quote = () => {
  return (
    <>
      <div className="login-p">
        {/* <img className="pdf" alt="" src="./images/register-background.png" /> */}
        <div>
          <div className="register-form-quote">
            <h2 className="pageheading">Get Free Quote</h2>
            <div className="container">
              <Form className="form-inline">
                <div className="row">
                  <Form.Group
                    controlId="formBasicName"
                    className="form-group-quote"
                  >
                    {/* <Form.Label>Name</Form.Label> */}
                    <img className="user" alt="" src="./images/user.png" />
                    <Form.Control
                      className="from-placeholder"
                      type="text"
                      placeholder="First Name"
                    />
                  </Form.Group>

                  <Form.Group
                    controlId="formBasicName"
                    className="form-group-quote "
                  >
                    <img className="user" alt="" src="./images/user.png" />
                    <Form.Control
                      className="from-placeholder"
                      type="text"
                      placeholder="Last Name"
                    />
                  </Form.Group>

                  <Form.Group
                    controlId="formBasicName"
                    className="form-group-quote"
                  >
                    <img
                      className="user"
                      alt=""
                      src="./images/mail-black.png"
                    />
                    <Form.Control
                      className="from-placeholder"
                      type="text"
                      placeholder="Email"
                    />
                  </Form.Group>

                  <Form.Group
                    controlId="formBasicPassword"
                    className="form-group-quote"
                  >
                    <img className="user" alt="" src="./images/phone.png" />
                    <Form.Control
                      type="password"
                      placeholder="Phone Number"
                      className="from-placeholder"
                    />
                  </Form.Group>

                  <Form.Group
                    controlId="formBasicPassword"
                    className="form-group-quote"
                  >
                    <img className="user" alt="" src="./images/address.png" />
                    <Form.Control
                      type="password"
                      placeholder="Address"
                      className="from-placeholder"
                    />
                  </Form.Group>
                  <Form.Group
                    controlId="formBasicPassword"
                    className="form-group-quote"
                  >
                    <img className="user" alt="" src="./images/Company.png" />
                    <Form.Control
                      type="password"
                      placeholder="Company Name"
                      className="from-placeholder"
                    />
                  </Form.Group>
                  <Form.Group
                    controlId="formBasicPassword"
                    className="form-group-quote"
                  >
                    <img className="user" alt="" src="./images/NOF.png" />
                    <Form.Control
                      type="password"
                      placeholder="No Of Drawings"
                      className="from-placeholder"
                    />
                  </Form.Group>

                  <Form.Group
                    controlId="formBasicPassword"
                    className="form-group-quote"
                  >
                    <img className="user" alt="" src="./images/NOF.png" />
                    <Form.Control
                      type="password"
                      placeholder="Target No Of Days"
                      className="from-placeholder"
                    />
                  </Form.Group>
                  <Form.Group
                    controlId="formBasicPassword"
                    className="form-group-quote-file "
                  >
                    <img
                      className="upload-img"
                      alt=""
                      src="./images/upload.png"
                    />
                    <Form.Control
                      type="password"
                      placeholder="Drag your Specification Files Here"
                      className="from-placeholder"
                    />
                    <span>only pdf fiels ar allowed</span>
                  </Form.Group>

                  <Button
                    variant="primary"
                    type="submit"
                    className="regist-but-quote"
                  >
                    Get Free Quote
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quote;
