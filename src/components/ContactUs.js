import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Weworkwith from "./Weworkwith";
// import WhyChooseQto from "./WhyChooseQto";
import axios from "axios";
export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    city: "",
    company_name: "",
    message: "",
  });

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(
      "https://qto.solutions/reactapp/create-contact/",
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 201) {
      // Successful response, you can handle success here
      console.log("Form submitted successfully");
    } else {
      // Handle errors here
      console.error("Form submission failed");
    }
  } catch (error) {
    // Handle network errors here
    console.error("Network error:", error);
  }
};
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="about contact-us-img">
        <div className="colorgradientonimage">
        <h2>Get in Touch</h2>
      <p
                // style={{
                //   textAlign: "center",
                //   fontSize: "25px",
                // }}
              >
                "We're Just a Click Away-Reach Out Now "
       </p>
        </div>
      </div>
      {/* <section className="container"> */}
      <div className="about-us">
        <img className="hat" alt="hat img" src="./images/hart 2.png" />
        <Form className="form-inline" onSubmit={handleSubmit}>
          
          <div className="row">
            <h2 className="pageheading-test ">Contact Us</h2>
            <Form.Group controlId="formBasicName" className="form-group ">
              {/* <Form.Label>Name</Form.Label> */}
              <img className="user" alt="user img" src="./images/user.png" />
              <Form.Control
                className="from-placeholder"
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formBasicName" className="form-group col-5">
              <img className="user" alt="mail-black img" src="./images/mail-black.png" />
              <Form.Control
                className="from-placeholder"
                type="text"
                placeholder="Email"
                name="email"
                value={formData.email} // Update value to reflect formData.email
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="ContactPhoneNo" className="form-group">
              <img className="user" alt="phone img" src="./images/phone.png" />
              <Form.Control
                type="text"
                placeholder="Phone Number"
                className="from-placeholder"
                name="phone_number"
                value={formData.phone_number} // Update value to reflect formData.phone_number
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="ContactCityName" className="form-group">
              <img className="user" alt="city img" src="./images/city.png" />
              <Form.Control
                type="text"
                placeholder="City"
                className="from-placeholder"
                name="city"
                value={formData.city} // Update value to reflect formData.city
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="ContactCompanyName" className="form-group">
              <img className="user" alt="company img" src="./images/Company.png" />
              <Form.Control
                type="text"
                placeholder="Company Name"
                className="from-placeholder"
                name="company_name"
                value={formData.company_name} // Update value to reflect formData.company_name
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group
              controlId="formBasicTextarea"
              className="form-group contact-textarea"
            >
              <Form.Control
                as="textarea"
                placeholder="Write your message here...."
                className="form-textarea"
                name="message"
                value={formData.message} // Update value to reflect formData.message
                onChange={handleChange}
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="regist-but-contactus"
            >
              Submit
            </Button>
          </div>
        </Form>
        <img className="cal" alt="cal-1 img" src="./images/Cal 1.png" />
      </div>
      {/* </section> */}
      <div className="container-fluid aUp">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"></div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"></div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"></div>
        </div>
      </div>

      {/* <WhyChooseQto /> */}
      <Weworkwith />
      {/* <div className=" WWW">
        <div className="container">
          <h1 className="pageheading">We Work With</h1>
          <p>
            We are a multi-faceted industry leader and through our family of
            companies making up one of the region’s largest Construction
            Estimation Firm.
          </p>
          <ul>
            <li>
              <img className="" alt="" src="./images/Checkmark.png" />
              <p>General Contractors</p>
            </li>
            <li>
              <img className="" alt="" src="./images/Checkmark.png" />
              <p>General Contractors</p>
            </li>
            <li>
              <img className="" alt="" src="./images/Checkmark.png" />
              <p>General Contractors</p>
            </li>

            <li>
              <img className="" alt="" src="./images/Checkmark.png" />
              <p>General Contractors</p>
            </li>
            <li>
              <img className="" alt="" src="./images/Checkmark.png" />
              <p>General Contractors</p>
            </li>
          </ul>
          <button className="NB">Get quote</button>
        </div>
      </div> */}
    </>
  );
}
