import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://qto.solutions/reactapp/register/",
        formData
      );

      console.log(response.data); // Handle the response as needed
    } catch (error) {
      console.error(error.response.data); // Handle errors
    }
  };

  return (
    <>
      <div className="register">
        <div>
          <div className="register-form">
            <h2 className="pageheading">Register Now</h2>
            <div className="container">
              <Form className="form-inline" onSubmit={handleSubmit}>
                <div className="row">
                  <Form.Group
                    controlId="formBasicName"
                    className="form-group-register"
                  >
                    <img className="user" alt="" src="./images/user.png" />
                    <Form.Control
                      className="from-placeholder"
                      type="text"
                      placeholder="User Name"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group
                    controlId="formBasicEmail"
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
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
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
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group
                    controlId="formBasicPassword"
                    className="form-group-register"
                  >
                    <img className="user" alt="" src="./images/user.png" />
                    <Form.Control
                      type="password"
                      placeholder="Confirm Password"
                      className="from-placeholder"
                      name="confirm_password"
                      value={formData.confirm_password}
                      onChange={handleChange}
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
