import React from 'react';

function BlogDetail3() {
  return (
    <>
      <div className="blog-single gray-bg">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-lg-8 m-15px-tb">
              <article className="article">
                <div className="article-img">
                  <img
                    src="./images/businessplans.png"
                    title=""
                    alt="business plans img"
                  />
                </div>
                <div className="article-title">
                  {/* <h6>
                    <a href="#">Lifestyle</a>
                  </h6> */}
                  <h2>Why Writing the Business Plan is Necessary for Construction Businesses?</h2>
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
                      <span>26 FEB 2020</span>
                    </div>
                  </div>
                </div>
                <div className="article-content">
                  <p>
                  Businesses are created and cared for growth over the years. 
                  Among the various aspects of ensuring its growth include making the business plan. 
                  This can be for some specific construction businesses such as the home builder business 
                  plan and for some general ones. Either way, it helps the business in various ways.
                  </p>
                  <p>
                  The article will present various reasons why writing the plan is helpful.
                  </p>
                  <h4>What Is A Business Plan?</h4>
                  <p>
                  Businesses are created and cared for growth over the years.
                  Among the various aspects of ensuring its growth include making the business plan.
                  This can be for some specific construction businesses such as the home builder
                  business plan and for some general ones. Either way, it helps the business in various ways.
                  <p> 
                  All of these documents contribute to your concerned construction business and its working.
                  Their roles are vital for the well-being of businesses. 5 of these roles are:
                  </p>  
                  </p>
                  <h4>It creates the image of the business</h4>
                  <p>
                  Before you start your own construction business,
                  you need some image for representation.
                  This image needs to have some important information
                  regarding the concerned business. The plan is the best possibility for this.
                  </p>
                  <h4>Explaining the business prospect</h4>
                  <p>
                  Businesses are made with intentions and desires. 
                  But its future prospects are different. Explaining this requires certain information.
                  Business prospects are vital for attracting people to invest themselves in the business. 
                  If the prospect is good, it carries strong interest, and vice versa.
                  </p>
                  <h4>It provides a direction very focused one</h4>
                  <p>
                   Direction is vital for business to work.
                   They guide someone associated with work and contribute to the final goal. 
                   This helps along the time and deliver the required outcome.
                   The plan keeps everyone in the business in the considered direction.
                   It can help with mending ways if anything goes wrong. The principles and goals are the principal ideas
                  </p>
                  <h4>It provides for short-term and long-term objectives</h4>
                  <p>
                  To achieve the final goal, short-term and long-term objectives are made.
                  This divides the overall goal into easy-to-achieve objectives. Short-term 
                  objectives are subject to a matter of months while long-term objectives are over one year.
                  </p>
                  <h4>Gives a clear understanding for the existing competition</h4>
                  <p>
                  Businesses are not as simple as the theory of buying and selling.
                  It includes various other things such as facing the competition. 
                  But before facing it, businesses need to have some understanding of it. 
                  This eases up the completion in favorable conditions.
                  </p>
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
                  Construction businesses take a lot of time to grow and deliver their intended profits. 
                  During this time different factors come together to provide for the business. 
                  Among them is writing the required business plan. This plan consists of a number 
                  of different documents such as the business goals and road maps. It helps with various 
                  manners to facilitate managing a construction company and its overall growth. 
                  The article includes 5 of them while many more also exist.
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

export default BlogDetail3;
