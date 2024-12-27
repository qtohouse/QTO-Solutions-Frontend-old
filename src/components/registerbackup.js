import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <>
      <div className="register">
        {/* <img className="pdf" alt="" src="./images/register-background.png" /> */}
        <div>
          <div className="register-form">
            <h2 className="pageheading">Register Now</h2>
            <div className="container">
              <Form className="form-inline">
                <div className="row">
                  <Form.Group
                    controlId="formBasicName"
                    className="form-group-register "
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
                    className="form-group-register"
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
                    className="form-group-register"
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
                    className="form-group-register"
                  >
                    <img className="user" alt="" src="./images/user.png" />
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      className="from-placeholder"
                    />
                  </Form.Group>

                  <Form.Group
                    controlId="formBasicPassword"
                    className="form-group-register"
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
                    className="form-group-register"
                  >
                    <img className="user" alt="" src="./images/city.png" />
                    <Form.Control
                      type="password"
                      placeholder="City"
                      className="from-placeholder"
                    />
                  </Form.Group>
                  <Form.Group
                    controlId="formBasicPassword"
                    className="form-group-register"
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
                    className="form-group-register"
                  >
                    <img className="user" alt="" src="./images/state.png" />
                    <Form.Control
                      type="password"
                      placeholder="State"
                      className="from-placeholder"
                    />
                  </Form.Group>

                  <Button
                    variant="primary"
                    type="submit"
                    className="regist-but-register"
                  >
                    Register Now
                  </Button>
                </div>
              </Form>

              <p style={{ textAlign: "center" }}>
                Already have an account? <Link to="/Login">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
