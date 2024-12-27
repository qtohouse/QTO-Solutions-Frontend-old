import React from 'react';

function BlogDetail4() {
  return (
    <>
      <div className="blog-single gray-bg">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-lg-8 m-15px-tb">
              <article className="article">
                <div className="article-img">
                  <img
                    src="./images/businessperformance.png"
                    title=""
                    alt="business performance img"
                  />
                </div>
                <div className="article-title">
                  {/* <h6>
                    <a href="#">Lifestyle</a>
                  </h6> */}
                  <h2> 5 Factors of Construction Companies’ Business Performance</h2>
                  <div className="media">
                    <div className="avatar">
                      <img
                        src="https://www.bootdey.com/image/400x200/FFB6C1/000000"
                        title=""
                        alt=""
                      />
                    </div>
                    <div className="media-body">
                      <label>Rachel Roth</label>
                      <span>25 DEC 2023</span>
                    </div>
                  </div>
                </div>
                <div className="article-content">
                  <p>
                  Construction businesses are vital for societies to function.
                  But in turn for them to perform, they need certain factors to ensure
                  proper performance and the right outcome like other businesses. 
                  These factors or pillars cover everything for the well-being of the business for a very long time. 
                  Therefore, they need to be in the right proportion so that the business can operate and deliver aptly.
                  </p>
                  {/* <p>
                  They constitute the working of the business by dividing the whole functioning into easy handling. These factors include these essential 5 factors. 
                  </p> */}
                  <h4>Means To Attract A Sufficient Amount Of Project Leads</h4>
                  <p>
                   Construction businesses depend on the number
                   of leads they can find. This is the very thing 
                   to rely on and hang the future of the business.
                   The number of leads predicts the possible profits 
                   as the number of jobs for the business is directly 
                   proportional to the number of leads available.
                  <p> 
                  All of these documents contribute to your concerned construction business and its working.
                  Their roles are vital for the well-being of businesses. 5 of these roles are:
                  </p>  
                  </p>
                  <h4>Have A Team For Estimation That Facilitate Timely Bidding</h4>
                  <p>
                  After having leads, every business needs to bid for them.
                  Bidding provides winning jobs to perform and make some profit out of them. 
                  Placing them accurately and on a large scale increases the 
                  chances of the business to grow and make profits.
                  </p>
                  <h4>A System Or Team For Follow-Up, Negotiation, And Deal Closing</h4>
                  <p>
                   After bidding, lies the need to follow up, make the necessary dealings, 
                   and close the deal. This too requires this specialized team. This team
                   deals with the matter that follows up after bidding. The dealing needs
                   to be the most professional as possible. 
                   Their behavior and mannerisms play a vital role in the final dealings that leave their impact even after the project is complete.
                  </p>
                  <h4>Something For Project Management For Smooth Working</h4>
                  <p>
                   Construction projects have a vast range of reasons and 
                   purposes but all of them require durable and lasting outcomes.
                   To do so, the project needs to be carried out in the most fruitful
                   manner possible. This depends on the materials, labor, tools, and most importantly management.
                  </p>
                  <h4>A Team For Performing All The Won Jobs</h4>
                  <p>
                   In addition to management staff, having a labor force for the construction
                   activities for the long term is good for the construction businesses.
                   A labor force is needed for all and every project. Their skills and
                   dedication contribute to the project and define its outcome.
                  </p>
                  {/* <h4>Gives a clear understanding for the existing competition</h4>
                  <p>
                  Businesses are not as simple as the theory of buying and selling.
                  It includes various other things such as facing the competition. 
                  But before facing it, businesses need to have some understanding of it. 
                  This eases up the completion in favorable conditions.
                  </p> */}
                  {/* <blockquote>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam.
                    </p>
                    <p className="blockquote-footer">
                      Someone famous in{" "}
                      <cite title="Source Title">Dick Grayson</cite>
                    </p>
                  </blockquote> */}
                    <h4>Conclusion</h4>
                  <p>
                   Construction businesses like other businesses have certain
                   fundamental aspects that facilitate their working.
                   There are five fundamental factors in regard to construction
                   businesses. These need to be in the most fruitful manner for the business to work in the right manner.
                  </p>
                </div>
                <div className="nav tag-cloud">
                  <a href="#">Construction</a>
                  <a href="#">Renovation</a>
                  {/* <a href="#">Travel</a>
                  <a href="#">Web Design</a>
                  <a href="#">Marketing</a>
                  <a href="#">Research</a>
                  <a href="#">Managment</a> */}
                </div>
              </article>
              <div className="contact-form article-comment">
                <h4>Leave a Reply</h4>
                <form id="contact-form" method="POST">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="">
                        <input
                          name="Name"
                          id="name"
                          placeholder="Name *"
                          className="form-control"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="">
                        <input
                          name="Email"
                          id="email"
                          placeholder="Email *"
                          className="form-control"
                          type="email"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="">
                        <textarea
                          name="message"
                          id="message"
                          placeholder="Your message *"
                          rows={4}
                          className="form-control"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="send">
                        <button className="px-btn theme">
                          <span>Submit</span> <i className="arrow" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4 m-15px-tb blog-aside">
              {/* Author */}
              <div className="widget widget-author">
                <div className="widget-title">
                  <h3>Author</h3>
                </div>
                <div className="widget-body">
                  <div className="media align-items-center">
                    <div className="avatar">
                      <img
                       src="https://www.bootdey.com/image/400x200/FFB6C1/000000"
                        title=""
                        alt=""
                      />
                    </div>
                    <div className="media-body">
                      <h6>
                        Hello, I'm
                        <br /> Rachel Roth
                      </h6>
                    </div>
                  </div>
                  <p>
                   Specializing in pre-construction estimation services,
                   I leverage social media platforms to engage with clients 
                   in the early stages of project planning.
                  </p>
                </div>
              </div>
              {/* End Author */}
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
                            How to Prepare Your New Year (2024) as a Construction Company?
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
                          <img
                           src="./images/sercivcesbg.png"
                            title=""
                            alt="services bg img"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="latest-post-aside media">
                      <div className="lpa-left media-body">
                        <div className="lpa-title">
                          <h5>
                            <a href="#">
                            Construction Material for Exterior and Interior Usage
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
                          <img
                            src="./images/sercivcesbg.png"
                            title=""
                            alt="services bg img"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="latest-post-aside media">
                      <div className="lpa-left media-body">
                        <div className="lpa-title">
                          <h5>
                            <a href="#">
                            What are Freelance Electrical Estimators and How Do They Affect Electrical Systems?
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
                          <img
                             src="./images/sercivcesbg.png"
                            title=""
                            alt="services bg img"
                          />
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
                          5 Factors of Construction Companies’ Business Performance
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
                      <a href="Blog_Detail4">
                        <img
                          src="./images/businessperformance.png"
                          title=""
                          alt="business performance img"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="latest-post-aside media">
                    <div className="lpa-left media-body">
                      <div className="lpa-title">
                        <h5>
                          <a href="Blog_Detail6">
                          How to Effectively Place Bids for Construction Projects?
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
                      <a href="Blog_Detail6">
                        <img
                          src="./images/bidding.png"
                          title=""
                          alt="bidding img"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="latest-post-aside media">
                    <div className="lpa-left media-body">
                      <div className="lpa-title">
                        <h5>
                          <a href="Blog_Detail5">
                          Lead Generation Platforms – Their Role in the Growth of Construction Businesses
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
                      <a href="Blog_Detail5">
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
      </div>
    </>
  );
}

export default BlogDetail4;
