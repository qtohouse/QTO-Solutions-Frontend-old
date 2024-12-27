import React from "react";
import Weworkwith from "./Weworkwith";
import { Form, Button } from "react-bootstrap";
import WhyChooseQto from "./WhyChooseQto";

export default function ContactUs() {
  return (
    <>
      <div className="about contact-us-img">
        <div className="colorgradientonimage">
          <h2>Get In Touch</h2>
        </div>
      </div>

      <div className="about-us">
        <img className="hat" alt="" src="./images/hart 2.png" />
        <Form className="form-inline">
          <div className="row">
            <h2 className="pageheading-test pageheading-contact">Contact Us</h2>
            <Form.Group controlId="formBasicName" className="form-group ">
              {/* <Form.Label>Name</Form.Label> */}
              <img className="user" alt="" src="./images/user.png" />
              <Form.Control
                className="from-placeholder"
                type="text"
                placeholder="Name"
              />
            </Form.Group>

            <Form.Group controlId="formBasicName" className="form-group col-5">
              <img className="user" alt="" src="./images/mail-black.png" />
              <Form.Control
                className="from-placeholder"
                type="text"
                placeholder="Email"
              />
            </Form.Group>

            <Form.Group controlId="ContactPhoneNo" className="form-group">
              <img className="user" alt="" src="./images/phone.png" />
              <Form.Control
                type="password"
                placeholder="Phone Number"
                className="from-placeholder"
              />
            </Form.Group>

            <Form.Group controlId="ContactCityName" className="form-group">
              <img className="user" alt="" src="./images/city.png" />
              <Form.Control
                type="password"
                placeholder="City"
                className="from-placeholder"
              />
            </Form.Group>
            <Form.Group controlId="ContactCompanyName" className="form-group">
              <img className="user" alt="" src="./images/Company.png" />
              <Form.Control
                type="password"
                placeholder="Company Name"
                className="from-placeholder"
              />
            </Form.Group>
            <Form.Group
              controlId="formBasicTextarea"
              className="form-group contact-textarea"
            >
              <Form.Control
                as="textarea" // Set the "as" prop to "textarea"
                placeholder="Write your message here ...." // Customize the placeholder text
                className="form-textarea" // Customize the CSS class for the text area
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
        <img className="cal" alt="" src="./images/Cal 1.png" />
      </div>
      <div className="container-fluid aUp">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"></div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"></div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"></div>
        </div>
      </div>
      <WhyChooseQto />
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
