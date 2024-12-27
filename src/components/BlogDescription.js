import React from 'react';

function BlogDetail() {
  return (
    <>
      <div className="blog-single gray-bg">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-lg-8 m-15px-tb">
              <article className="article">
                <div className="article-img">
                  <img
                    src="./images/socialpic.png"
                    title=""
                    alt="social pic img"
                  />
                </div>
                <div className="article-title">
                  {/* <h6>
                    <a href="#">Lifestyle</a>
                  </h6> */}
                  <h2>Optimizing social media interaction with clients</h2>
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
                  Social media is a highly effective means to reach out and 
                  respond to interested individuals for the growth of any business. 
                  This requires utilizing the different social media platforms to their fullest. 
                  To do so, construction companies and their representatives need to carry out and 
                  ensure different efforts. All of this contributes to the overall outcome and facilitates the company’s growth.
                  </p>
                  <p>
                  Some of the vital efforts that companies and their representatives can ensure include:
                  </p>
                  <h4>Give Some Advice For Free</h4>
                  <p>
                  Out of all the individuals that contact some businesses,
                   only a few actually avail of the services. Most just go for some information.
                    While giving out this information has no apparent value, in the long run,
                     it can facilitate to a great extent.Social media is massively used and a huge number of people contact it.
                      As the company responds to the queries and questions, it gives out a good impression of the company. 
                      In other words, the ones contacting will make a good impression with a great probability of contact in the future for actual services acquisition.
                  </p>
                  <h4>Offer Something For Contact Information (Lead Magnet)</h4>
                  <p>
                  As any potential client contacts, he or she provides contact information. 
                  This information is vital for everyone and needs some reward. Construction
                   companies can accomplish this through a brochure or some other marketing material.
                    This can be almost anything related to the achievements of the company, upcoming industry news, and any other information.
                    This material will act as a lead magnet and assist in changing the person’s mind.
                     It acts as a tool of communication between the two parties to convince potential clients into actual clients.
                  </p>
                  <h4>Advertise On Different Social Media Platforms</h4>
                  <p>
                  Social media is composed of various platforms that operate on different algorithms. 
                  Therefore, construction companies need to work on all of them to optimize the interaction. 
                  These platforms mainly include Instagram, Twitter, LinkedIn, Facebook, etc. For this, you need to hire the right
                   experts (called social media handlers) who understand these platforms and algorithms. 
                   These experts carry out all the work to facilitate the company’s interaction.
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
                  Optimizing social media interaction with clients is an important 
                  part of businesses and their work. Construction companies too can
                   gain too much from this. They can achieve it through proper optimization.
                    To do so, they need to carry out the right efforts. The article discusses these efforts.
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
                            alt=""
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
                            alt=" services bg img"
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

export default BlogDetail;
