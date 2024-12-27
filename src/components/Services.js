import React from "react";
// import ContainerCardForm from "./ContainerCardForm";
// import { Link } from "react-router-dom";
import Weworkwith from "./Weworkwith";
// import CSIDivisions from "./CSIDivisions";
// import WhyChooseQto from "./WhyChooseQto";

export default function Services() {
  return (
    <>
      <section className="services">
        <div className="main-div">
          <div className="backimg">
            <div className="colorgradientonimage">
              <h2>Welcome to QTO Solutions</h2>
              <p
                // style={{
                //   textAlign: "center",
                //   fontSize: "25px",
                // }}
              >
                "Trust QTO Solutions to fine-tune your estimates, providing the
                edge you need to win lucrative contracts confidently"
              </p>
            </div>
          </div>
          <div className="container what-is-qto">
            <div className="row border-2">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-5 WIQTO">
                <h1>What is QTO Solutions?</h1>
                <p style={{ textAlign: "justify" }}>
                Empowering Your Construction Success Through Accuracy.
                QTO Solutions is your trusted partner in navigating the 
                complexities of construction estimation and bidding. 
                We are a premier provider of pre-construction consultancy
                services, dedicated to delivering  detailed and accurate takeoffs,  
                simplifying the estimation process, and  amplifying your bidding success.
                  <br />
                  <br />
                  Our team collaborates closely with clients, offering personalized support and 
                  tailored solutions to meet your unique project requirements. From initial concept 
                  to final bid submission, we streamline the estimation journey, empowering you to make informed decisions and maximize profitability. 
                  Trust QTO Solutions to be your strategic ally in achieving construction excellence, every step of the way.
                </p>
              </div>
              <div
                className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-7
               qto_benifits"
              >
                <div className="row benifit-container">
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 benifit-container">
                    <div className="benifit-a">
                      <img className="fl" alt="" src="./images/savemoney.png" />
                      <h2>Save Money</h2>
                    </div>

                    <p style={{textAlign:'justify'}}>
                      You can save money by getting help with estimating your
                      construction costs from us instead of hiring a full-time
                      estimator. Our services are offered at a nominal fee for
                      both full and trade-specific estimates, allowing you to
                      save money.
                    </p>
                  </div>

                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 benifit-container">
                    <div className="benifit-a">
                      <img className="fl" alt="" src="./images/fasturn.png" />
                      <h2>Fast Turnaround</h2>
                    </div>

                    <p style={{textAlign:'justify'}}>
                      Our team of certified estimators specializes in preparing
                      construction estimates. Working collaboratively allows us
                      to deliver estimates in a timely manner, ensuring that you
                      meet your deadline.
                    </p>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 benifit-container">
                    <div className="benifit-a">
                      <img className="fl" alt="" src="./images/quicksupport.png" />
                      <h2>Quick Support</h2>
                    </div>

                    <p style={{textAlign:'justify'}}>
                      Our team of professional cost estimators is available 24/7
                      to address any inquiries you may have via phone or email.
                      We offer ongoing support and revisions, even after
                      delivering the estimates to ensure your satisfaction.
                    </p>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 benifit-container">
                    <div className="benifit-a">
                      <img className="fl" alt="" src="./images/accuracy.png" />
                      <h2>Accuracy Insured</h2>
                    </div>

                    <p style={{textAlign:'justify'}}>
                      Our estimates comply with local construction
                      specifications, material, and labor rates. By utilizing
                      state-of-the-art software such as PlanSwift and Bluebeam,
                      we guarantee our clients receive the most precise cost
                      estimates for their project.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"></div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"></div>
          </div>
        </div> */}
        <br></br>
        <br></br>
        <br></br>
        <div className="ourServices container">
          <h2 className="pageheading">Our Solutions</h2>
          <p >
            QTO Solutions provides a range of accurate and affordable quantity
            takeoff services and construction estimating support services to
            organizations across the construction industry. We specialize in all
            construction trades and CSI divisions related to:
          </p>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 OSThree ">
              <div className="commercial-construction cc"></div>
              <div className="fedral-construction cc"></div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4  OSThree">
              <div className="residential-construction cc"></div>
              <div className="hcivil-construction cc"></div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 OSThree ">
              <div className="indust-construction col-larg"></div>
            </div>
          </div>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        {/* <CSIDivisions /> */}
        

        <div className="hiv container">
          
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6  ">
            <h1>How Our Process Works</h1>
              <p style={{fontSize:'20px' , marginBottom:'10px'}}>
                Our certified take-off specialists use a structured process to
                accurately calculate the quantities of various construction
                materials required for each project. Here's a brief overview of
                how our construction take-off services work:
              </p>
              {/* <img className="" alt="" src="./images/hiw.png" /> */}
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 WCUS p-estimates">
                <ul>
                <li>
                <div className="imghead"> 
                  <img className="WCUSimg" alt="" src="./images/Project Management.png" />
                  <h2>Strategic Analysis of Project Plans:</h2>
                </div>

                <p className="p-estimates">
                Our certified take-off specialists meticulously examine all pertinent project plans and drawings, 
                including civil, architectural, structural, and MEP plans, as well as specifications.
                We thoroughly review the take-off scope and bid form to ensure accuracy.
                </p>
                </li>
              <li>
                <div className="imghead">
                  <img
                    className="WCUSimg"
                    alt=""
                    src="./images/quantity.png"
                  />
                  <h2>Streamlined Quantity Take-Off:</h2>
                </div>

                <p className="p-estimates" >
                Using advanced take-off software like Planswift or Bluebeam, our specialists load 
                the PDF plans and scale them appropriately. They then proceed to measure, count, 
                and quantify various construction materials required for the project. This includes concrete, masonry, 
                structural steel, lumber framing, roofing, siding, painting, flooring, and more.
                </p>
              </li>
              <li>
                <div className="imghead">
                  <img
                    className="WCUSimg"
                    alt=""
                    src="./images/savemoney.png"
                  />
                  <h2>Project Cost Overview:</h2>
                </div>

                <p className="p-estimates">
                Once the quantities are determined, we compile them into an Excel spreadsheet, organized by CSI trades. 
                We also consider stable wastage factors for each material. 
                If requested, we can also provide pricing for materials, labor, and equipment costs to give a comprehensive overview of project expenses. 
                </p>
              </li>
              <li>
                <div className="imghead">
                  <img className="WCUSimg" alt="" src="./images/deliverables.png" />
                  <h2>Construction Take-Off Deliverables:</h2>
                </div>

                <p  className="p-estimates">
                The final deliverables include a detailed material estimate in Excel format, color-coded 
                markups in PDF showing the quantities on the plans, and any relevant notes or RFIs related to the project. 
                These files are fully editable, allowing for easy modifications or sharing as needed by the client. 
                </p>
              </li>
            </ul>
          </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 estimator">
     
              <img className="f1" alt="" src="./images/glasses.jpg" />
           
              <br/>
              <br/>
          
              <img className="f2" alt="" src="./images/cost-construction.png" />
      
            </div>
          </div>
        </div>
        <div className="WCU">{/* Why Chose US */}</div>

        {/* <WhyChooseQto /> */}
        <Weworkwith />
      </section>
    </>
  );
}
