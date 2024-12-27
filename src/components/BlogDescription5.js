import React from 'react';

function BlogDetail5 () {
  return (
    <>
      <div className="blog-single gray-bg">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-lg-8 m-15px-tb">
              <article className="article">
                <div className="article-img">
                  <img
                    src="./images/leadgeneration.png"
                    title=""
                    alt="lead generation img"
                  />
                </div>
                <div className="article-title">
                  {/* <h6>
                    <a href="#">Lifestyle</a>
                  </h6> */}
                  <h2>Lead Generation Platforms – Their Role in the Growth of Construction Businesses</h2>
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
                      <span>04 JAN 2024</span>
                    </div>
                  </div>
                </div>
                <div className="article-content">
                  <p>
                  Construction businesses operate on winning and completing jobs. 
                  Through these, they put together intended profits and livelihood. 
                  But before that, these businesses need leads to bid (this is generated 
                  through estimation against the project plan.You can contact us for that.) and start the process of winning projects.
                  Finding leads include various methods such as looking around in the neighborhood,
                  asking for referrals or future work, and many others. Among the different means, 
                  the most effective one is the lead generation platform. These are virtual locations
                  where both projects and bidders come together. These locations are very vital and useful for construction projects.
                  </p>
                  <p>
                  Let us understand these platforms with deep knowledge and their working.
                  </p>
                  <h4>What Are Lead Generation Platforms?</h4>
                  <p>
                  Like traditional marketplaces where buyers and sellers would come together 
                  and negotiate to finalize buying agreements, these platforms operate.
                  The main difference to understand them is their working location; which is online.
                  These operate through websites and domains to provide a place where all the concerned
                  ones can join and be present during negotiations and agreements. 
                  Next, the difference is mass bidding rather than private dealing as in traditional markets. 
                  Through this bidding, project owners hire contractors or construction businesses.
                  </p>
                  <h4>How Do They Work?</h4>
                  <p>
                  These platforms provide a place of interaction for all the related individuals. 
                  Both project owners (as buyers for construction services) and contractors (as sellers of their services) come together. 
                  The owners present their product (project idea presented with its plan drawings) 
                  and contractors bid (as the supposed price of their services against the plan).
                  The bidding continues for a certain period of time and after the closure, the owner (buyer) 
                  hands over the product (project or job) for the intended (construction) services to some 
                  contractors (services seller) whom he finds worthy and reasonable. Then the winning contractor
                  completes the project and receives the agreed amount from the owner (buyer of the services) while the contractor (seller of services) makes a profit
                  </p>
                  <h4>What Are Common Lead Platforms?</h4>
                  <p>
                  Different lead generation platforms are operating in the construction industry. 
                  All these operate to provide lead generation for construction businesses and outreach
                  for project owners. Some of the commonly used platforms include:
                  </p>
                  <h4> Google Business Profile</h4>
                  <h4> Angie’s List</h4>
                  <h4> Yelp</h4>
                  <h4> Bing Places for Business</h4>
                  <h4> Facebook Business</h4>
                  
                  
                  

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
                  Construction business required leads to bid and 
                  complete projects to make profits. For finding leads, these businesses
                  can go different ways with lead generation platforms as the most
                  effective one. these platforms act as the place of interaction between contractors and project owners.
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

export default BlogDetail5 ;
