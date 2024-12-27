import React from "react";
import Weworkwith from "./Weworkwith";
import WhyChooseQto from "./WhyChooseQto";
import StatsBoard from "./StatsBoard";
// import Testimonials from "./Testimonials";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
export default function AboutUS() {
  return (
    <>

  <div className="about about-us-img">
    <div className="colorgradientonimage">
      <h2>Welcome to QTO Solutions</h2>
      <p
                // style={{
                //   textAlign: "center",
                //   fontSize: "25px",
                // }}
              >
                "Accuracy Beyound Expectations"
       </p>
    </div>
  </div>
  <section className="container">
    <div className="about-us">
      {/* <img class="hat Img-Disp" alt="" src="{% static 'imagesqtosol/hart 2.png'%}" /> */}
      <div>
        <h2 className="pageheading-test">About Us</h2>
        <p>
        Welcome to QTO Solutions, where innovation meets expertise in the dynamic world of construction. 
        As a premier provider of pre-construction consultancy services, 
        we are your trusted partner in navigating the intricate landscape of project estimation and bidding.
          <br />
          <br />
          At QTO Solutions, we understand the pivotal role accurate cost estimation plays in the success of any construction endeavor. 
          That's why we have assembled a team of versatile estimators equipped with cutting-edge software tools,
          enabling us to deliver precise and competitive estimates tailored to your unique project requirements.
          <br />
          <br />
          Our commitment to professionalism, accuracy, and customer satisfaction is 
          unwavering With coverage spanning across all US states, 
          we are dedicated to supporting general contractors, 
          subcontractors, developers, and private owners alike in achieving their construction goals.
          <br/>
          <br/>
          What sets us apart is our relentless pursuit of excellence.
          We pride ourselves on our ability to streamline operations
          for general contractors,empowering them to win bids with confidence. 
          By harnessing the power of technology and industry-leading insights,
          we provide unparalleled efficiency and accuracy in our estimating and take-off services.
          <br/>
          <br/>
          Experience the QTO Solutions difference and unlock the full potential of your construction projects.
          Partner with us today and let's build a brighter future together.
        </p>
        <br />
      


        {/* <h2 className="pageheading-test pageheading-contact">Our Core Value</h2>
        <div className="container ESL">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 ">
              <div className="ESD ">
                <div className="yellow-border">
                  <img
                    className="ESM"
                    alt=""
                    src="./images/precision-black.png"
                  />
                </div>
                <img
                  className="yellow-img"
                  src="./images/yellow.png"
                />
                <h2 className="">We're precise</h2>
                <p>
                  We reflects our unwavering dedication to delivering accurate
                  and detailed preconstruction estimates. This meticulous
                  approach ensures the foundation of every project is built on
                  reliability and precision.
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
              <div className="ESD ">
                <div className="yellow-border">
                  <img
                    className="ESM"
                    alt=""
                    src="./images/discipline.png"
                  />
                </div>
                <img
                  className="yellow-img"
                  src="./images/yellow.png"
                />
                <h2 className="">We Are Disciplined</h2>
                <p>
                  We highlights our commitment to rigorous and systematic
                  preconstruction estimating. This ensures accuracy and
                  reliability are at the forefront of every project's
                  foundation.
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 ">
              <div className="ESD ">
                <div className="yellow-border">
                  <img
                    className="ESM"
                    alt=""
                    src="./images/accounts.png"
                  />
                </div>
                <img
                  className="yellow-img"
                  src="./images/yellow.png"
                />
                <h2 className="">We are Accountable</h2>
                <p>
                  We signifies our promise to uphold the highest standards of
                  integrity and transparency in preconstruction estimating,
                  ensuring every projection is both accurate and trustworthy.
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 ">
              <div className="ESD ">
                <div className="yellow-border">
                  <img
                    className="ESM"
                    alt=""
                    src="./images/transparent.png"
                  />
                </div>
                <img
                  className="yellow-img"
                  src="./images/yellow.png"
                />
                <h2 className="">We Are Transparent</h2>
                <p>
                  We reflects our commitment to open and honest communication in
                  preconstruction estimating, ensuring clients have clear
                  insights and understandings of every cost and decision.
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
              <div className="ESD ">
                <div className="yellow-border">
                  <img
                    className="ESM"
                    alt=""
                    src="./images/align.png"
                  />
                </div>
                <img
                  className="yellow-img"
                  src="./images/yellow.png"
                />
                <h2 className="">We Are Aligned</h2>
                <p>
                  We embodies our dedication to synchronizing our
                  preconstruction estimating efforts with our clients goals and
                  visions, ensuring every estimate is tailored for project
                  success and client satisfaction.
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 ">
              <div className="ESD ">
                <div className="yellow-border">
                  <img
                    className="ESM"
                    alt=""
                    src="./images/responsible.png"
                  />
                </div>
                <img
                  className="yellow-img"
                  src="./images/yellow.png"
                />
                <h2 className="">We Are Responsible</h2>
                <p>
                  We highlights our commitment to ethical practices and
                  sustainable decision-making in preconstruction estimating,
                  ensuring our actions benefit both our projects and the broader
                  community.
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3  ">
              <div className="ESD ">
                <div className="yellow-border">
                  <img
                    className="ESM"
                    alt=""
                    src="./images/allies-black.png"
                  />
                </div>
                <img
                  className="yellow-img"
                  src="./images/yellow.png"
                />
                <h2 className="">We Are Estimating Allies</h2>
                <p>
                  We Ensure Meticulous and Competitive Estimations, Every Time.
                  - Your trusted partner for precise and competitive
                  estimations, consistently delivering excellence in every
                  project.
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 ">
              <div className="ESD ">
                <div className="yellow-border">
                  <img
                    className="ESM"
                    alt=""
                      src="./images/outsourcing.png"
                  />
                </div>
                <img
                  className="yellow-img"
                  src="./images/yellow.png"
                />
                <h2 className="">We are Outsource Estimating </h2>
                <p>
                  We streamlines the process, minimizing hassles and maximizing
                  efficiency for our clients, ensuring seamless project planning
                  and execution.
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      {/* <div class="pageheading-test pageheading-contact">CSI Divisions</div>
    <div class="csidivsions csdaboutus container">
      <ul>
              <li><span>01&nbsp;</span>-&nbsp;<span>General Requirnments</span></li>
              <li><span>02&nbsp;</span>-&nbsp;<span>Existing Conditions</span></li>
              <li><span>03&nbsp;</span>-&nbsp;<span>Concrete</span></li>
              <li><span>04&nbsp;</span>-&nbsp;<span>Masonry</span></li>
              <li><span>05&nbsp;</span>-&nbsp;<span>Metals</span></li>
              <li><span>06&nbsp;</span>-&nbsp;<span>Wood, Plastics &Composites</span></li>
              <li><span>07&nbsp;</span>-&nbsp;<span>Thermal & Moisture Protection</span></li>
              <li><span>08&nbsp;</span>-&nbsp;<span>Openings</span></li>
              <li><span>09&nbsp;</span>-&nbsp;<span>Finishes</span></li>
              <li><span>10&nbsp;</span>-&nbsp;<span>Specialties</span></li>
              <li><span>11&nbsp;</span>-&nbsp;<span>Equipment</span></li>
              <li><span>12&nbsp;</span>-&nbsp;<span>Furnishings</span></li>
              <li><span>13&nbsp;</span>-&nbsp;<span>Special Construction</span></li>
              <li><span>14&nbsp;</span>-&nbsp;<span>Conveying Equipment</span></li>
              <li><span>15&nbsp;</span>-&nbsp;<span>Fire Suppression</span></li>
              <li><span>16&nbsp;</span>-&nbsp;<span>Plumbing</span></li>
              <li><span>17&nbsp;</span>-&nbsp;<span>Heating, Ventilating, & Air Conditioning (HVAC)</span></li>
              <li><span>18&nbsp;</span>-&nbsp;<span>Electric</span></li>
              <li><span>19&nbsp;</span>-&nbsp;<span>Earth Work</span></li>
              <li><span>20&nbsp;</span>-&nbsp;<span>Utilities</span></li>
              <li><span>21&nbsp;</span>-&nbsp;<span>Waterways & Marine Construction</span></li>
              <li><span>22&nbsp;</span>-&nbsp;<span>Exterior Improvements</span></li>
              <li><span>23&nbsp;</span>-&nbsp;<span>Integrated Automation</span></li>
              <li><span>24&nbsp;</span>-&nbsp;<span>Electronic Safety & Security </span></li>
              <li><span>25&nbsp;</span>-&nbsp;<span>Transportaion</span></li>
              <li><span>26&nbsp;</span>-&nbsp;<span>Wood, Plastics & Composites</span></li>
              <li><span>27&nbsp;</span>-&nbsp;<span>Communications</span></li>
              <li><span>28&nbsp;</span>-&nbsp;<span>Thermal & Moisture Protection</span></li>
              </ul>
      </div> */}
    </div>
    {/* <img class="cal Img-Disp" alt="" src="{% static 'imagesqtosol/Cal 1.png'%}" /> */}
  </section>

<WhyChooseQto/>
{/* <Testimonials /> */}
<br/>
<br/>

<StatsBoard/>



{/* Testimonials */}

<div className="WCUQTO container">
<h2 className="pageheading-test ">Reviews</h2>
<h4 className="testimonial-paragraph">What Our Clients Say About Us</h4>

<OwlCarousel
      className="owl-theme"
      items={3} // Number of items to display
      loop={true} // Enable continuous looping
      autoplay={true} // Enable autoplay
      autoplayTimeout={3000} // Autoplay interval in milliseconds
      autoplayHoverPause={true} // Pause on mouse hover
      responsive={{
        0: {
          items: 1, // Number of items to display on screens smaller than 576px
        },
        576: {
          items: 2, // Number of items to display on screens between 576px and 768px
        },
        768: {
          items: 2, // Number of items to display on screens between 768px and 992px
        },
        992: {
          items: 3, // Number of items to display on screens between 992px and 1200px
        },
        1200: {
          items: 3, // Number of items to display on screens larger than 1200px
        },
        1024: {
          items: 3, // Number of items to display on screens between 1024px and 1200px
          
        },
      }}
      pagination={true} // Show pagination
      navigation={false} // Hide navigation buttons   
    >
      
       

                    <div className="testimonial">
                        <div className="testimonial-content">
                            <div className="testimonial-icon">
                                <i className="fa fa-quote-left"></i>
                            </div>
                            <p className="description">
                                QTO Solutions has been instrumental in helping me streamline my electrical projects with their detailed estimates.
                            </p>
                        </div>
                        
                        <h3 className="title">Michael Davis </h3>
                        <span className="post"> Texas, USA - Electrical Contractor</span>
                    </div>

                    <div className="testimonial">
                        <div className="testimonial-content">
                            <div className="testimonial-icon">
                                <i className="fa fa-quote-left"></i>
                            </div>
                            <p className="description">
                                QTO Solutions has been an invaluable partner for my excavation projects over the years. 
                                Their reliable service has helped me stay on budget and schedule, earning my trust time and again.
                            </p>
                        </div>
                        <h3 className="title">John Smith </h3>
                        <span className="post">Pennsylvania, USA - Excavation Contractor</span>
                    </div>
                    <div className="testimonial">
                        <div className="testimonial-content">
                            <div className="testimonial-icon">
                                <i className="fa fa-quote-left"></i>
                            </div>
                            <p className="description">
                                As a masonry contractor, I rely on QTO Solutions for precise estimates to plan and execute my projects effectively. 
                            </p>
                        </div>
                        <h3 className="title">Michelle Rodriguez </h3>
                        <span className="post">Michigan, USA - Masonry Contractor</span>
                    </div>
                    <div className="testimonial">
                        <div className="testimonial-content">
                            <div className="testimonial-icon">
                                <i className="fa fa-quote-left"></i>
                            </div>
                            <p className="description">
                                QTO Solutions has been my go-to estimation provider for mechanical projects for over eight months. 
                                Their expertise and attention to detail have helped me deliver high-quality results to my clients consistently.
                            </p>
                        </div>
                        <h3 className="title">Ryan Thompson </h3>
                        <span className="post">Illinois, USA - Mechanical Contractor</span>
                    </div>
                    <div className="testimonial">
                        <div className="testimonial-content">
                            <div className="testimonial-icon">
                                <i className="fa fa-quote-left"></i>
                            </div>
                            <p className="description">
                            In Oklahoma, value for money is everything. 
                            That's why we turn to QTO Solutions for all our estimation needs. 
                            Their team of experts delivers precise estimates at a fraction of the cost compared to other local providers.
                            </p>
                        </div>
                        <h3 className="title">Mark Levin</h3>
                        <span className="post"> Oklahoma, USA - General Contractor</span>
                    </div>
                    <div className="testimonial">
                        <div className="testimonial-content">
                            <div className="testimonial-icon">
                                <i className="fa fa-quote-left"></i>
                            </div>
                            <p className="description">
                            Finding cost-effective solutions without compromising quality is crucial. Working with QTO Solutions has been a game-changer.
                            </p>
                        </div>
                        <h3 className="title">Christie Smith </h3>
                        <span className="post">Ohio based, USA - Roofing Contractor</span>
                    </div>
                    <div className="testimonial">
                        <div className="testimonial-content">
                            <div className="testimonial-icon">
                                <i className="fa fa-quote-left"></i>
                            </div>
                            <p className="description">
                            As an electrical contractor in Indiana, partnering with QTO Solutions has been good for our business. 
                            Their diverse team brings a level of expertise and efficiency that has allowed us to manage our workload more effectively. 
                            </p>
                        </div>
                        <h3 className="title">Nick Lamb </h3>
                        <span className="post">Indiana based, USA - Electrical contractor </span>
                    </div>
                    {/* <div className="testimonial">
                        <div className="testimonial-content">
                            <div className="testimonial-icon">
                                <i className="fa fa-quote-left"></i>
                            </div>
                            <p className="description">
                                QTO Solutions has been my go-to estimation provider for mechanical projects for over eight months. 
                                Their expertise and attention to detail have helped me deliver high-quality results to my clients consistently.
                            </p>
                        </div>
                        <h3 className="title">Ryan Thompson </h3>
                        <span className="post">Illinois, USA - Mechanical Contractor</span>
                    </div> */}
     

     
    </OwlCarousel>
    </div>
    
<Weworkwith/>


</>
  );
}
