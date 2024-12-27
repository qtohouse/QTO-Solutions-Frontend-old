import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
// import { Link } from "react-router-dom";
const Quote = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    address: "",
    company_name: "",
    website_url: "",  
    project_title: "",
    project_location:"",
    estimated_value_of_a_project: "",
    project_required_date:"",
    scope_of_project:"",
    select_csi_divisions:"",
    specification_files: null,
  });
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://qto.solutions/reactapp/create-quote/",
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
    }
     catch (error) {
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
      <div className="login-p">
        {/* <img className="pdf" alt="" src="./images/register-background.png" /> */}
        <div>
          <div className="register-form-quote">
          <h2 class="pageheading">Get Free Quote</h2>
            <h6 class="quote-sub">Company Details</h6>
            <div className="container">
              <Form className="form-inline" onSubmit={handleSubmit}>
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
                      placeholder="Full Name"
                      name="full_name"
                      value={formData.full_name}
                      onChange={handleChange}
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
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group
                    controlId="formBasicPassword"
                    className="form-group-quote"
                  >
                    <img className="user" alt="" src="./images/phone.png" />
                    <Form.Control
                      type="text"
                      placeholder="Phone Number"
                      className="from-placeholder"
                      name="phone_number"
                      value={formData.phone_number}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group
                    controlId="formBasicPassword"
                    className="form-group-quote"
                  >
                    <img className="user" alt="" src="./images/address.png" />
                    <Form.Control
                      type="text"
                      placeholder="Address"
                      className="from-placeholder"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group
                    controlId="formBasicPassword"
                    className="form-group-quote"
                  >
                    <img className="user" alt="" src="./images/Company.png" />
                    <Form.Control
                      type="text"
                      placeholder="Company Name"
                      className="from-placeholder"
                      name="company_name"
                      value={formData.company_name}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group
                    controlId="formBasicName"
                    className="form-group-quote "
                  >
                    <img className="user" alt="" src="./images/web.png" />
                    <Form.Control
                      className="from-placeholder"
                      type="text"
                      placeholder="Website Url"
                      name="website_url"
                      value={formData.website_url}
                      onChange={handleChange}
                    />
                  </Form.Group>
                
                  <h6 class="quote-sub">Project Details</h6>

                  <Form.Group
                    controlId="formBasicName"
                    className="form-group-quote"
                  >
                    {/* <Form.Label>Name</Form.Label> */}
                    <img className="user" alt="" src="./images/title.png" />
                    <Form.Control
                      className="from-placeholder"
                      type="text"
                      placeholder="Project Title"
                      name="project_title"
                      value={formData.project_title}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group
                    controlId="formBasicName"
                    className="form-group-quote "
                  >
                    <img className="user" alt="" src="./images/address.png" />
                    <Form.Control
                      className="from-placeholder"
                      type="text"
                      placeholder="Project Location"
                      name="project_location"
                      value={formData.project_location}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group
                       controlId="formBasicEstimatedValue"
                       className="form-group-quote"
                  >
                  <img className="user" alt="User Icon" src="./images/value.png" />

                     {/* Select dropdown for estimated value range */}
                  <Form.Select
                       className="from-placeholder"
                       name="estimated_value_of_a_project"
                       value={formData.estimated_value_of_a_project}
                       onChange={handleChange}
                   >
                           <option value="" disabled selected > Estimated Value of a Project</option>
                                <option value="residential">Less than 1 Million</option>
                                <option value="commercial">More than 1 Million</option>
                                <option value="industrial">Between 1-10 Million</option>
                  </Form.Select>

                  </Form.Group>

                  <Form.Group
                    controlId="formBasicName"
                    className="form-group-quote "
                  >
                    <img className="user" alt="" src="./images/required.png" />
                    <Form.Control
                      className="from-placeholder"
                      type="text"
                      placeholder="Project Required Date"
                      name="project_required_date"
                      value={formData.project_required_date}
                      onChange={handleChange}
                    />
                    
                  </Form.Group>
                  <Form.Group
                    controlId="formBasicName"
                    className="form-group-quote "
                  >
                    <img className="user" alt="" src="./images/scope.png" />
                    <Form.Control
                      className="from-placeholder"
                      type="text"
                      placeholder="Scope of Project"
                      name="scope_of_project"
                      value={formData.scope_of_project}
                      onChange={handleChange}
                    />
                    
                  </Form.Group>
                  <Form.Group
                        controlId="formBasicName"
                         className="form-group-quote"
                      >
                     <img className="user" alt="" src="./images/NOF.png" />
  
                 <Form.Select
                   className="from-placeholder"
                   name="select_csi_divisions"
                   value={formData.select_csi_divisions}
                   onChange={handleChange}
                  >
                               <option value="" disabled selected>Select CSI Divisions</option>
                                <option value="residential">Existing Conditions</option>
                                <option value="commercial">Concrete</option>
                                <option value="industrial">Masonry</option>
                                <option value="infrastructure">Metals</option>
                                <option value="infrastructure">Wood, Plastics, and Composites</option>
                                <option value="infrastructure">Thermal and Moisture Protection</option>
                                <option value="infrastructure">Openings</option>
                                <option value="infrastructure">Finishes</option>
                                <option value="infrastructure">Specialties</option>
                                <option value="infrastructure">Equipment</option>
                                <option value="infrastructure">Furnishings</option>
                                <option value="infrastructure">Special Construction</option>
                                <option value="infrastructure">Conveying Equipment</option>
                                <option value="infrastructure">Plumbing + HVAC</option>
                                <option value="infrastructure">Electrical + Lighting</option>
                                <option value="infrastructure">Mechanical Support</option>
                                <option value="infrastructure">Fire Suppression</option>
                                <option value="infrastructure">Plumbing</option>
                                <option value="infrastructure">Heating Ventilating and Air Conditioning</option>
                                <option value="infrastructure">Integrated Automation</option>
                                <option value="infrastructure">Electrical</option>
                                <option value="infrastructure">Communications</option>
                                <option value="infrastructure">Electronic Safety and Security</option>
                                <option value="infrastructure">Earthwork</option>
                                <option value="infrastructure">Exterior Improvements</option>
                                <option value="infrastructure">Utilities</option>
                                <option value="infrastructure">Transportation</option>
                                <option value="infrastructure">Waterways and Marine Construction</option>
                                <option value="infrastructure"> Electrical Power Generation</option>

    
  </Form.Select>
  
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
                      type=""
                      placeholder="Drag your Specification Files Here"
                      className="from-placeholder"
                      name="specification_files"
                      value={formData.specification_files}
                      onChange={handleChange}
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
