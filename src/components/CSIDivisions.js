import React from "react";

const CSIDivisions = () => {
  
  return (
    <>
        <div className="csidivsions container">
          {/* CSI Divisions */}
          <div className="vision-container">
            <img className="vision-image" alt="vision img" src="./images/vision.png" />
            <h2 className="pageheading-vision">Our Vision</h2>
            <div className="vision-content">
              <p>
                Our vision at QTO Solutions is to redefine the landscape of 
                construction estimation services. We aim to continually innovate
                and expand our offerings, integrating advanced technologies like 
                BIM , VBM & Submittal to provide comprehensive and dynamic solutions. 
                By pioneering new standards in accuracy and efficiency,
                we envision becoming the go-to partner for construction 
                companies seeking unparalleled precision in their project estimations.
              </p>
            </div>
          </div>

          <div className="mission-container">
            <img className="vision-image" alt="mission img" src="./images/mission.png" />
            <h2 className="pageheading-mission">Our Mission</h2>
            <div className="vision-content">
              <p>
                Our mission is to empower construction companies in Northern
                America with precise material quantity take-offs and cost
                estimations. Through our commitment to accuracy and detail, we
                provide tailored and comprehensive solutions to our clients.
                Additionally, we're excited to announce that we'll now be offering
                project leads to our clients, further enhancing our suite of
                services to support their project management needs.
              </p>
            </div>
          </div>
        </div>
    </>
  );
};

export default CSIDivisions;
