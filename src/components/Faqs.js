import React from "react";

const Faqs = () => {
  return (
    <>
      {/* <div className="csidivsions container"> */}
      <div className="faqs about">
        <div className="colorgradientonimage">
          <h2>Collaborate With QTO Solutions</h2>
          <p
                
              >
                "Explore our collection of helpful FAQs"
              </p>
        </div>
      </div>

        <h2 className="pageheading-faq">FAQs</h2>
        <div className="accordion faq" id="accordionExample">
        <br></br>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
           
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                What information is needed to provide an accurate estimation?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                  Detailed project plans, specification, site surveys, material requirements, labor rates, 
                  project timelines, and any relevant historical data are essential for accurate estimation.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                How do you ensure accuracy in your estimate?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                  Accurate estimates are achieved through careful analysis, 
                  using industry standard softwares, leveraging historical data,
                  coordinate with subcontractors, and considering all project variables.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Why is accurate estimation is crucial in construction?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                  Accurate estimation is vital to ensure project stay within the budget,
                  meet financial goals, and allow for proper resource allocation and planning.
                </p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                How long does it take to receive a project estimate?
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                  The time for estimating varies based on project complexity.
                  Simple estimates might be produced quickly, 
                  While complex project may take longer due to detailed analysis required.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                What sets your estimation services apart from others?
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                Our company emphasizes accuracy, transparency, and a commitment to client satisfaction.
                We have a dedicated team with extensive industry experience and a track record of delivering reliable estimates on time.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingSix">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSix"
                aria-expanded="false"
                aria-controls="collapseSix"
              >
                How are your charges determined?
              </button>
            </h2>
            <div
              id="collapseSix"
              className="accordion-collapse collapse"
              aria-labelledby="headingSix"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                Our charges vary based on project complexity, specific requirements, and the number of working drawings involved.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingSeven">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSeven"
                aria-expanded="false" 
                aria-controls="collapseSeven"
              >
                How do you handle addenda to projects?
              </button>
            </h2>
            <div
              id="collapseSeven"
              className="accordion-collapse collapse"
              aria-labelledby="headingSeven"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                We diligently monitor project portals until the deadline ends and incorporate addenda seamlessly without imposing additional charges.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingEight">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseEight"
                aria-expanded="false" 
                aria-controls="collapseEight"
              >
                What software do you use for estimation?
              </button>
            </h2>
            <div
              id="collapseEight"
              className="accordion-collapse collapse"
              aria-labelledby="headingEight"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                We use Planswift for quantity take-off, RSMeans for unit pricing cost estimation, and Kubla for cut/fill mapping.
                </p>
              </div>
            </div>
          </div>

          {/* <div className="accordion-item">
            <h2 className="accordion-header" id="headingNine">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseNine"
                aria-expanded="false" 
                aria-controls="collapseNine"
              >
                What's the difference between quantity take-off and estimate?
              </button>
            </h2>
            <div
              id="collapseNine"
              className="accordion-collapse collapse"
              aria-labelledby="headingNine"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                Quantity take-off involves determining the quantities of materials required for a project,
                While estimation involves calculating the costs associated with those quantities.
                </p>
              </div>
            </div>
          </div> */}

          {/* <div className="accordion-item">
            <h2 className="accordion-header" id="headingTen">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTen"
                aria-expanded="false" 
                aria-controls="collapseTen"
              >
                Do you provide a breakdown of estimated costs?
              </button>
            </h2>
            <div
              id="collapseTen"
              className="accordion-collapse collapse"
              aria-labelledby="headingTen"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                Yes, our estimates typically include a detailed breakdown of costs, such as materials, 
                labor, equipment, permits, overhead, and contingencies.
                </p>
              </div>
            </div>
          </div> */}
          
          
        </div>
      {/* </div> */}
    </>
  );
};

export default Faqs;
