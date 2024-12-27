import React from 'react';


function BlogComponent() {
  return (
    <>
      <div class="blog">
        <section className="blog-listing gray-bg">
          <div className="container">
            <div className="row align-items-start">
              <div className="col-lg-8 m-15px-tb">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="blog-grid">
                      <div className="blog-img">
                        <div className="date">
                          <span>04</span>
                          <label>FEB</label>
                        </div>
                        <a href="/Blog_Detail">
                          <img src="./images/socialpic.png" title="" alt="social pic img" />
                        </a>
                      </div>
                      <div className="blog-info">
                        <h5>
                          <a href="/Blog_Detail">
                            Optimizing social media interaction with clients
                          </a>
                        </h5>
                        <p>
                          Optimizing social media interaction with potential
                          clients as a construction company .
                        </p>
                        <div className="btn-bar">
                          <a href="/Blog_Detail" className="px-btn-arrow">
                            <span>Read More</span>
                            <i className="arrow" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="blog-grid">
                      <div className="blog-img">
                        <div className="date">
                          <span>04</span>
                          <label>DEC</label>
                        </div>
                        <a href="/Blog_Detail2">
                          <img src="./images/laborhealth.png" title="" alt="labor health img" />
                        </a>
                      </div>
                      <div className="blog-info">
                        <h5>
                          <a href="/Blog_Detail2">
                            How contractor can ensure labor health for better
                            progress?
                          </a>
                        </h5>
                        <p>
                          Contractors make their living by performing
                          construction projects.
                        </p>
                        <div className="btn-bar">
                          <a href="/Blog_Detail2" className="px-btn-arrow">
                            <span>Read More</span>
                            <i className="arrow" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="blog-grid">
                      <div className="blog-img">
                        <div className="date">
                          <span>09</span>
                          <label>DEC</label>
                        </div>
                        <a href="/Blog_Detail3">
                          <img
                            src="./images/businessplans.png"
                            title=""
                            alt="business plans img"
                          />
                        </a>
                      </div>
                      <div className="blog-info">
                        <h5>
                          <a href="/Blog_Detail3">
                            Why Writing the Business Plan is Necessary for
                            Construction Businesses?
                          </a>
                        </h5>
                        <p>
                          Businesses are created and cared for growth over the
                          years. Among...
                        </p>
                        <div className="btn-bar">
                          <a href="/Blog_Detail3" className="px-btn-arrow">
                            <span>Read More</span>
                            <i className="arrow" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="blog-grid">
                      <div className="blog-img">
                        <div className="date">
                          <span>25</span>
                          <label>DEC</label>
                        </div>
                        <a href="/Blog_Detail4">
                          <img
                            src="./images/businessperformance.png"
                            title=""
                            alt="business performance img"
                          />
                        </a>
                      </div>
                      <div className="blog-info">
                        <h5>
                          <a href="/Blog_Detail4">
                            5 Factors of Construction Companies’ Business
                            Performance
                          </a>
                        </h5>
                        <p>
                          Construction businesses are vital for societies to
                          function...
                        </p>
                        <div className="btn-bar">
                          <a href="/Blog_Detail4" className="px-btn-arrow">
                            <span>Read More</span>
                            <i className="arrow" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="blog-grid">
                      <div className="blog-img">
                        <div className="date">
                          <span>04</span>
                          <label>JAN</label>
                        </div>
                        <a href="/Blog_Detail5">
                          <img
                            src="./images/leadgeneration.png"
                            title=""
                            alt="lead generation img"
                          />
                        </a>
                      </div>
                      <div className="blog-info">
                        <h5>
                          <a href="/Blog_Detail5">
                            Lead Generation Platforms – Their Role in the Growth
                            of Construction Businesses
                          </a>
                        </h5>
                        <p>
                          Construction businesses operate on winning and
                          completing jobs...
                        </p>
                        <div className="btn-bar">
                          <a href="Blog_Detail5" className="px-btn-arrow">
                            <span>Read More</span>
                            <i className="arrow" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="blog-grid">
                      <div className="blog-img">
                        <div className="date">
                          <span>09</span>
                          <label>JAN</label>
                        </div>
                        <a href="/Blog_Detail6">
                          <img src="./images/bidding.png" title="" alt="bidding img" />
                        </a>
                      </div>
                      <div className="blog-info">
                        <h5>
                          <a href="/Blog_Detail6">
                            How to Effectively Place Bids for Construction
                            Projects?
                          </a>
                        </h5>
                        <p>
                          Bid placing is an important part of any contracting
                          business...
                        </p>
                        <div className="btn-bar">
                          <a href="/Blog_Detail6" className="px-btn-arrow">
                            <span>Read More</span>
                            <i className="arrow" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <ul className="pagination justify-content-center">
                      <li className="page-item disabled">
                        <a className="page-link" href="#" tabIndex={-1}>
                          <i className="fas fa-chevron-left" />
                        </a>
                      </li>
                      <li className="page-item active">
                        <a className="page-link" href="#">
                          1 <span className="sr-only">(current)</span>
                        </a>
                      </li>
                      <li className="page-item ">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          <i className="fas fa-chevron-right" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 m-15px-tb blog-aside">
                {/* Trending Post */}
                <div className="widget widget-post">
                  <div className="widget-title">
                    <h3>Trending Now</h3>
                  </div>
                  <div className="widget-body">
                    <div className="latest-post-aside media">
                      <div className="lpa-left media-body">
                        <div className="lpa-title">
                          <h5>
                            <a href="#">
                              How to Prepare Your New Year (2024) as a
                              Construction Company?
                            </a>
                          </h5>
                        </div>
                        <div className="lpa-meta">
                          <a className="name" href="#">
                            Rachel Roth
                          </a>
                          <a className="date" href="#">
                            26 FEB 2020
                          </a>
                        </div>
                      </div>
                      <div className="lpa-right">
                        <a href="#">
                          <img src="./images/sercivcesbg.png" title="" alt="service bg img" />
                        </a>
                      </div>
                    </div>
                    <div className="latest-post-aside media">
                      <div className="lpa-left media-body">
                        <div className="lpa-title">
                          <h5>
                            <a href="#">
                              Construction Material for Exterior and Interior
                              Usage
                            </a>
                          </h5>
                        </div>
                        <div className="lpa-meta">
                          <a className="name" href="#">
                            Rachel Roth
                          </a>
                          <a className="date" href="#">
                            2 JAN 2020
                          </a>
                        </div>
                      </div>
                      <div className="lpa-right">
                        <a href="#">
                          <img src="./images/sercivcesbg.png" title="" alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="latest-post-aside media">
                      <div className="lpa-left media-body">
                        <div className="lpa-title">
                          <h5>
                            <a href="#">
                              What are Freelance Electrical Estimators and How
                              Do They Affect Electrical Systems?
                            </a>
                          </h5>
                        </div>
                        <div className="lpa-meta">
                          <a className="name" href="#">
                            Rachel Roth
                          </a>
                          <a className="date" href="#">
                            5 NOV 2020
                          </a>
                        </div>
                      </div>
                      <div className="lpa-right">
                        <a href="#">
                          <img src="./images/sercivcesbg.png" title="" alt="service bg img" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Trending Post */}
                {/* Latest Post */}
                <div className="widget widget-latest-post">
                  <div className="widget-title">
                    <h3>Latest Post</h3>
                  </div>
                  <div className="widget-body">
                    <div className="latest-post-aside media">
                      <div className="lpa-left media-body">
                        <div className="lpa-title">
                          <h5>
                            <a href="Blog_Detail4">
                              5 Factors of Construction Companies’ Business
                              Performance
                            </a>
                          </h5>
                        </div>
                        <div className="lpa-meta">
                          <a className="name" href="#">
                            Rachel Roth
                          </a>
                          <a className="date" href="#">
                          25 DEC 2023 
                          </a>
                        </div>
                      </div>
                      <div className="lpa-right">
                        <a href="#">
                          <img src="./images/businessperformance.png" title="" alt="business performance img" />
                        </a>
                      </div>
                    </div>
                    <div className="latest-post-aside media">
                      <div className="lpa-left media-body">
                        <div className="lpa-title">
                          <h5>
                            <a href="Blog_Detail6">
                              How to Effectively Place Bids for Construction
                              Projects?
                            </a>
                          </h5>
                        </div>
                        <div className="lpa-meta">
                          <a className="name" href="#">
                            Rachel Roth
                          </a>
                          <a className="date" href="#">
                            09 JAN 2024
                          </a>
                        </div>
                      </div>
                      <div className="lpa-right">
                        <a href="#">
                          <img src="./images/bidding.png" title="" alt="bidding img" />
                        </a>
                      </div>
                    </div>
                    <div className="latest-post-aside media">
                      <div className="lpa-left media-body">
                        <div className="lpa-title">
                          <h5>
                            <a href="Blog_Detail5">
                              Lead Generation Platforms – Their Role in the
                              Growth of Construction Businesses
                            </a>
                          </h5>
                        </div>
                        <div className="lpa-meta">
                          <a className="name" href="#">
                            Rachel Roth
                          </a>
                          <a className="date" href="#">
                            04 JAN 2024
                          </a>
                        </div>
                      </div>
                      <div className="lpa-right">
                        <a href="#">
                          <img
                            src="./images/leadgeneration.png"
                            title=""
                            alt="lead generation img"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Latest Post */}
                {/* widget Tags */}
                <div className="widget widget-tags">
                  <div className="widget-title">
                    <h3>Categories</h3>
                  </div>
                  <div className="widget-body">
                    <div className="nav tag-cloud">
                      <a href="#">Construction</a>
                      <a href="#">Renovation</a>
                      {/* <a href="#">Concrete</a>
                      <a href="#">Masonry</a>
                      <a href="#">Metals</a>
                      <a href="#">Equipment</a>
                      <a href="#">Furnishings</a> */}
                    </div>
                  </div>
                </div>
                {/* End widget Tags */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default BlogComponent;
