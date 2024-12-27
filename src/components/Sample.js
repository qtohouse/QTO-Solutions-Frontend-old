import { Form, Button } from "react-bootstrap";

const Sample = () => {
  return (
    <>
      <div className="register login-p">
        <div>
          <div className="log-back-sample">
            <div>
              <br></br>
            </div>
            <h2 className="pageheading-test">Download Our Samples</h2>
            <p className="top-bar">
              Do you want to see how good our work is? Get our sample for free
              right now.
            </p>

            <div className="container">
              <Form className="form-inline">
                <div className="row">
                  <Form.Group
                    controlId="formBasicName"
                    className="form-group col-5"
                  >
                    <img className="user" alt="" src="./images/search.png" />
                    <span className="location-icon">
                      <i className="fa-solid fa-location-dot" />
                    </span>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      style={{ border: "none", backgroundColor: "#eeeeee" }}
                    >
                      <option value=""> Select Sample</option>
                      <option value="Alabama">New Construction</option>
                      <option value="Alaska">
                        Renovation/Remodeling/Retrofitting
                      </option>
                      <option value="Arizona">New School</option>
                      <option value="Arkansas">
                        Fire Station/Police Station
                      </option>
                      <option value="California">Roofing</option>
                      <option value="Colorado">Site/Civil</option>
                      <option value="Connecticut">Demolition</option>
                      <option value="Delaware">Earthwork/Excavation</option>
                      <option value="District of Columbia">
                        Federal Projects
                      </option>
                      <option value="Florida">Commercial </option>
                      <option value="Georgia">Residential </option>
                      <option value="Hawaii">Electrical</option>
                      <option value="Idaho">Mechanical/HVAC</option>
                      <option value="Illinois">Plumbing</option>
                      <option value="Indiana">Pump Station</option>
                      <option value="Indiana">Drywall and Framing</option>
                      <option value="Indiana">Masonry</option>
                      <option value="Indiana">Concrete</option>
                    </select>
                    {/* <Form.Control
                      className="from-placeholder"
                      type="text"
                      placeholder="Select sample"
                      name="sample"  
                    /> */}
                  </Form.Group>

                  <Form.Group
                    controlId="formBasicPassword"
                    className="form-group col-5"
                  >
                    <img className="user" alt="" src="./images/user.png" />
                    <Form.Control
                      type="text"
                      placeholder="Name"
                      className="from-placeholder"
                      name="name"
                    />
                  </Form.Group>
                  <Form.Group
                    controlId="formBasicPassword"
                    className="form-group col-5"
                  >
                    <img
                      className="user"
                      alt=""
                      src="./images/mail-black.png"
                    />
                    <Form.Control
                      type="email"
                      placeholder="Enter Your Email"
                      className="from-placeholder"
                      name="email"
                    />
                  </Form.Group>
                  <Form.Group
                    controlId="formBasicPassword"
                    className="form-group col-5"
                  >
                    <img className="user" alt="" src="./images/company.png" />
                    <Form.Control
                      type="text"
                      placeholder="Enter Your Company Name"
                      className="from-placeholder"
                      name="text"
                    />
                  </Form.Group>

                  <Button
                    variant="primary"
                    type="submit"
                    className="regist-but"
                  >
                    Request Samples
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

export default Sample;
