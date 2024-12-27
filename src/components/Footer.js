import React from "react";
import { Link } from "react-router-dom";

const Footer = ({ images }) => {
  // Use the images array here as needed
  // For example, you can access the first image using `images[0]`

  return (
    <>
      <div className="row footer justify-content-center">
        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 text-center">
          <ul>
            <li className="footer-image">
              <Link to="/">
                <img className="fl" alt="" src="./images/qto logo_new_white.png" />
              </Link>
            </li>
            <br />
            <li>
              <p style={{ textAlign: "justify" }}>
              At QTO Solutions, we specialize in Professional Estimation and Quantity Take-off Services, 
              providing invaluable assistance to clients navigating the complex world of Building Estimation. 
              Our goal is to streamline the bidding process, eliminating the painstaking and time-consuming aspects typically associated with it.
              With QTO Solutions by your side, bidding becomes simple and efficient.
              </p>
            </li>
            <li>
              <p>© 2024 QTO SOLUTIONS - ALL RIGHTS RESERVED.</p>
            </li>
          </ul>
        </div>

        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 text-center">
          <ul>
            <li>
              <p className="follow-us-text">Connect With Us </p>
            </li>
            <li className="social_media_icon">
              <a href="https://www.linkedin.com/company/71647097/admin/feed/posts/">
                <img
                  className="contact_footer_linkedin"
                  alt="linked icon"
                  src="./images/linkedin.png"
                  title="Linkedin"
                />
              </a>
              <a href="https://www.instagram.com/qto_solutions/">
                <img
                  className="contact_footer_instagram"
                  alt="insta icon"
                  src="./images/insta.png"
                  title="Instagram"
                />
              </a>
              <a href="https://twitter.com/QtoSol" className="">
                <img
                  className="contact_footer_twitter"
                  alt="twitter icon"
                  src="./images/twitter.png"
                  title="Twitter"
                />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100064318140416">
                <img
                  className="contact_footer_facebook"
                  alt="facebook icon"
                  src="./images/facebook.png"
                  title="Facebook"
                />
              </a>
            </li>
          </ul>
        </div>

        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 text-center fmac">
          
          <ul>
            <li>
              <img className="mailfooter" alt="mail_footer img" src="./images/mail_footer.png" />
              <a href="mailto:info@qtosol.com">
                <p>info@qtosol.com</p>
              </a>
            </li>
            <br />
            <li>
              <img className="mailfooter" alt="contact_footer img" src="./images/contact_footer.png" />
              <a className="" href="tel: 312-544-0023">
                <p>(312)-544-0023</p>
              </a>
            </li>
          </ul>
        </div>

        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 ">
        <div className="">
            <p className="quicklinks">Quick links</p>
            
            <ul>
                <li><a href="/" className="quicklinks">Home</a></li>
                <li><a href="/AboutUs" className="quicklinks">About Us</a></li>
                <li><a href="/ContactUs" className="quicklinks">Contact Us</a></li>
                <li><a href="/faqPage" className="quicklinks">FAQ</a></li>
                {/* <li><a href="/Candidate_Registration_Form" className="quicklinks">Career</a></li> */}
                {/* <!-- <li><a href="/" class="quicklinks">Testimonials</a></li> --> */}
                
            </ul>
        </div>
        </div>
      </div>
    </>
  );
};

export default Footer;