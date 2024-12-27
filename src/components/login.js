import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get the CSRF token from the cookie
    const csrfToken = document.cookie.replace(/(?:(?:^|.*;\s*)csrftoken\s*=\s*([^;]*).*$)|^.*$/, "$1");

    const jsonData = JSON.stringify(formData);

    fetch("https://qto.solutions/reactapp/drflogin/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrfToken,
      },
      body: jsonData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <div className="register login-p">
        <div>
          <div className="log-back">
            <h2 className="pageheading">Login</h2>
            <div className="container">
              <Form
                className="form-inline"
                onSubmit={handleSubmit}
                method="post"
              >
                <div className="row">
                  <Form.Group
                    controlId="formBasicName"
                    className="form-group-login"
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
                    controlId="formBasicPassword"
                    className="form-group-login"
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
                  
                  <Button
                    variant="primary"
                    type="submit"
                    className="regist-but"
                  >
                    Login
                  </Button>
                </div>
              </Form>

              <p style={{ textAlign: "center" }}>
                Don't have an account? <Link to="/Register">Register</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
