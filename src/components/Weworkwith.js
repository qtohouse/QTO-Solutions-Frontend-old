import React from 'react'
import { Link } from "react-router-dom";
const Weworkwith = () => {
  return (
    <>
      
    <div className=" WWW">
      
      <div className="container">
          <h1 className="pageheading-www">We Work With</h1>
          <p className="wwwparagraph">
            We are a multi-faceted industry leader and through our family of
            companies making up one of the region’s largest Construction
            Estimation Firm.
          </p>
          <div className="row">
            <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3  ">
              <div className="d-flex">
                <img className="" alt="" src="./images/Checkmark.png" />
                <p>General Contractors</p>
              </div>
              <div className="d-flex">
                <img className="" alt="" src="./images/Checkmark.png" />
                <p>Sub-contractors</p>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3  ">
              <div className="d-flex">
                <img className="" alt="" src="./images/Checkmark.png" />
                <p>Remodeling Contractors</p>
              </div>
              <div className="d-flex">
                <img className="" alt="" src="./images/Checkmark.png" />
                <p>Material Suppliers</p>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3  ">
              <div className="d-flex">
                <img className="" alt="" src="./images/Checkmark.png" />
                <p>Architects</p>
              </div>
              <div className="d-flex">
                <img className="" alt="" src="./images/Checkmark.png" />
                <p>Homeowners</p>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3  ">
              <div className="d-flex">
                <img className="" alt="" src="./images/Checkmark.png" />
                <p>Designers</p>
              </div>
              <div className="d-flex">
                <img className="" alt="" src="./images/Checkmark.png" />
                <p>Developers</p>
              </div>
            </div>
          </div>

          <Link to="/quote">
            <button className="NB">Get Free Quote</button>
          </Link>
          
        </div>
      </div>
    </>
  );
}

export default Weworkwith;