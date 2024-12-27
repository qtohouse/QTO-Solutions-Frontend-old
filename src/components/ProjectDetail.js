// import React, { useState } from "react";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
// https://www.npmjs.com/package/react-tabs
export default function ProjectDetail() {
  const { projectId } = useParams();
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const response = await fetch(
          `https://qto.solutions/reactapp/projects/projects/${projectId}/?format=json`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProjectData(data);
      } catch (error) {
        console.error("There was a problem with your fetch operation:", error);
      }
    };
    fetchProjectData();
  }, [projectId]);

  if (!projectData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="container projects project-detail">
        <div className="projectHeading">
          <h2>Project Detail</h2>
          <div>
            <span>Home</span>/<span>projects</span>/<span>Project Detail</span>
          </div>
        </div>
        <div className="pro-heading">
          <div className=" ">
            <div>
              <h2>{projectData.project_name} </h2>
              <span className="location">
                207-01 116th Avenue , Cambria Heights, NY 11411, USA
              </span>
            </div>
          </div>
        </div>
        <div className="container detail">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 head-nav">
              <Tabs>
                <TabList>
                  <Tab className="">
                    <span className="detail-manue">Project Details</span>
                  </Tab>
                  <Tab>
                    <span className="detail-manue">Specs</span> <span>35</span>
                  </Tab>
                  <Tab>
                    <span className="detail-manue">Plans</span> <span>2</span>
                  </Tab>
                  <Tab>
                    <span className="detail-manue">QTOs</span> <span>20</span>
                  </Tab>
                  <Tab>
                    <span className="detail-manue">Addendums</span>{" "}
                    <span>4</span>
                  </Tab>
                  <Tab>
                    <span className="detail-manue">QTO Video</span>{" "}
                    <span>1</span>
                  </Tab>
                  {/* <Tab>
                    <span className="detail-manue">Plan Holders</span>{" "}
                    <span>4</span>
                  </Tab> */}
                </TabList>

                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 content-nav">
                  <TabPanel>
                    <div className="row">
                      <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <div className="row">
                          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <div class="card">
                              {/* <img src="..." class="card-img-top" alt="..."> */}
                              <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </p>
                                <a href="#" class="btn btn-primary">
                                  Go somewhere
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <div class="card">
                              {/* <img src="..." class="card-img-top" alt="..."> */}
                              <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </p>
                                <a href="#" class="btn btn-primary">
                                  Go somewhere
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"></div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-5 col-xl-5 left-detail">
                        <ul>
                          <li className="">
                            <h2>Bid Date</h2>
                            <span>Wednesday, July 20, 2023</span>
                          </li>
                          <li className="">
                            <h2>Bid Date</h2>
                            <span>Wednesday, July 20, 2023</span>
                          </li>
                          <li className="">
                            <h2>Bid Amount</h2>
                            <span>$ 1,000,000</span>
                          </li>

                          <li className="">
                            <h2>Solicitation</h2>
                            <span>46160-C</span>
                          </li>
                          <li className="">
                            <h2>Bidding Method</h2>
                            <span>Advertised Bid</span>
                          </li>
                          <li className="">
                            <h2>Bid Phase</h2>
                            <span>bid_results</span>
                          </li>
                          <li className="">
                            <h2>Completion Time</h2>
                            <span>400 CCDs</span>
                          </li>
                          <li className="">
                            <h2>Liquidated Damages</h2>
                            <span>1000</span>
                          </li>
                          <li className="">
                            <h2>Bid Deposit</h2>
                            <span>24,0000</span>
                          </li>
                        </ul>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-7 col-xl-7 left-detail right-detail">
                        <ul>
                          <li className="">
                            <h2>Bid Location</h2>
                            <span>
                              35th Floor, Corning Tower, Empire State Plaza,
                              Albany, NY 12242.
                            </span>
                          </li>
                          <li className="">
                            <h2>Pre-bid Meeting</h2>
                            <span>
                              2022-07-12 09:00:00 84 Old Orangeburg Road,
                              Orangeburg, NY 10962
                            </span>
                          </li>
                          <li className="CSI-d">
                            <h2>CSI Division</h2>

                            <ul>
                              <li>
                                <span> 01</span>
                                <span>-General Requirements</span>
                              </li>
                              <li>
                                <span> 02</span>
                                <span>-Existing Conditions </span>
                              </li>
                              <li>
                                <span> 03</span>
                                <span>-Concrete</span>
                              </li>
                              <li>
                                <span> 04</span>
                                <span>- Masonry</span>
                              </li>
                            </ul>
                          </li>
                          <li className="bondsandMWS">
                            <ul className="Bonds">
                              <li className="as">
                                <h2>Bonds</h2>
                                <ul>
                                  <li className="progess-heading">
                                    <span>Bid Bonds</span>
                                  </li>
                                  <li>
                                    <div className="dprogress">
                                      <div className="qto-progress">
                                        <span>50%</span>
                                      </div>
                                    </div>
                                  </li>
                                  <li className="progess-heading">
                                    <span>Bid Bonds</span>
                                  </li>
                                  <li>
                                    <div className="dprogress">
                                      <div className="qto-progress">
                                        <span>50%</span>
                                      </div>
                                    </div>
                                  </li>
                                  <li className="progess-heading">
                                    <span>Bid Bonds</span>
                                  </li>
                                  <li>
                                    <div className="dprogress">
                                      <div className="qto-progress">
                                        <span>50%</span>
                                      </div>
                                    </div>
                                  </li>
                                  <li className="progess-heading">
                                    <span>Bid Bonds</span>
                                  </li>
                                  <li>
                                    <div className="dprogress">
                                      <div className="qto-progress">
                                        <span>50%</span>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                              <li className="as">
                                <h2>MWSEBs and SDVOBs</h2>
                                <ul>
                                  <li className="progess-heading">
                                    <span>Bid Bonds</span>
                                  </li>
                                  <li>
                                    <div className="dprogress">
                                      <div className="qto-progress">
                                        <span>50%</span>
                                      </div>
                                    </div>
                                  </li>
                                  <li className="progess-heading">
                                    <span>Bid Bonds</span>
                                  </li>
                                  <li>
                                    <div className="dprogress">
                                      <div className="qto-progress">
                                        <span>50%</span>
                                      </div>
                                    </div>
                                  </li>
                                  <li className="progess-heading">
                                    <span>Bid Bonds</span>
                                  </li>
                                  <li>
                                    <div className="dprogress">
                                      <div className="qto-progress">
                                        <span>50%</span>
                                      </div>
                                    </div>
                                  </li>
                                  <li className="progess-heading">
                                    <span>Bid Bonds</span>
                                  </li>
                                  <li>
                                    <div className="dprogress">
                                      <div className="qto-progress">
                                        <span>50%</span>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                            {/* <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6  as">
                        <div className="border">asdf</div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6  as">
                        <div className="border">asdf</div>
                      </div> */}
                          </li>
                          {/* <li className="MWSEBs"></li> */}
                        </ul>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="specs">
                      <ul>
                        <li>
                          <img className="pdf" alt="" src="./images/pdf.png" />
                          <h2>46160-Drawing</h2>
                          <span className="size">2 MB</span>
                          <span className="date">Mar 10, 2023</span>
                          <img
                            className="read"
                            alt=""
                            src="./images/read.png"
                          />
                          <img
                            className="download"
                            alt=""
                            src="./images/download.png"
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="specs">
                      <ul>
                        <li>
                          <img className="pdf" alt="" src="./images/pdf.png" />
                          <h2>46160-Drawing</h2>
                          <span className="size">2 MB</span>
                          <span className="date">Mar 10, 2023</span>
                          <img
                            className="read"
                            alt=""
                            src="./images/read.png"
                          />
                          <img
                            className="download"
                            alt=""
                            src="./images/download.png"
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="specs">
                      <ul>
                        <li>
                          <img className="pdf" alt="" src="./images/pdf.png" />
                          <h2>46160-Drawing</h2>
                          <span className="size">2 MB</span>
                          <span className="date">Mar 10, 2023</span>
                          <img
                            className="read"
                            alt=""
                            src="./images/read.png"
                          />
                          <img
                            className="download"
                            alt=""
                            src="./images/download.png"
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="specs">
                      <ul>
                        <li>
                          <img className="pdf" alt="" src="./images/pdf.png" />
                          <h2>46160-Drawing</h2>
                          <span className="size">2 MB</span>
                          <span className="date">Mar 10, 2023</span>
                          <img
                            className="read"
                            alt=""
                            src="./images/read.png"
                          />
                          <img
                            className="download"
                            alt=""
                            src="./images/download.png"
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="specs">
                      <ul>
                        <li>
                          <img className="pdf" alt="" src="./images/pdf.png" />
                          <h2>46160-Drawing</h2>
                          <span className="size">2 MB</span>
                          <span className="date">Mar 10, 2023</span>
                          <img
                            className="read"
                            alt=""
                            src="./images/read.png"
                          />
                          <img
                            className="download"
                            alt=""
                            src="./images/download.png"
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="specs">
                      <ul>
                        <li>
                          <img className="pdf" alt="" src="./images/pdf.png" />
                          <h2>46160-Drawing</h2>
                          <span className="size">2 MB</span>
                          <span className="date">Mar 10, 2023</span>
                          <img
                            className="read"
                            alt=""
                            src="./images/read.png"
                          />
                          <img
                            className="download"
                            alt=""
                            src="./images/download.png"
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="specs">
                      <ul>
                        <li>
                          <img className="pdf" alt="" src="./images/pdf.png" />
                          <h2>46160-Drawing</h2>
                          <span className="size">2 MB</span>
                          <span className="date">Mar 10, 2023</span>
                          <img
                            className="read"
                            alt=""
                            src="./images/read.png"
                          />
                          <img
                            className="download"
                            alt=""
                            src="./images/download.png"
                          />
                        </li>
                      </ul>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="specs">
                      <ul>
                        <li>
                          <img className="pdf" alt="" src="./images/pdf.png" />
                          <h2>46160-Plans</h2>
                          <span className="size">2 MB</span>
                          <span className="date">Mar 10, 2023</span>
                          <img
                            className="read"
                            alt=""
                            src="./images/read.png"
                          />
                          <img
                            className="download"
                            alt=""
                            src="./images/download.png"
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="specs">
                      <ul>
                        <li>
                          <img className="pdf" alt="" src="./images/pdf.png" />
                          <h2>46160-Plans</h2>
                          <span className="size">2 MB</span>
                          <span className="date">Mar 10, 2023</span>
                          <img
                            className="read"
                            alt=""
                            src="./images/read.png"
                          />
                          <img
                            className="download"
                            alt=""
                            src="./images/download.png"
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="specs">
                      <ul>
                        <li>
                          <img className="pdf" alt="" src="./images/pdf.png" />
                          <h2>46160-Plans</h2>
                          <span className="size">2 MB</span>
                          <span className="date">Mar 10, 2023</span>
                          <img
                            className="read"
                            alt=""
                            src="./images/read.png"
                          />
                          <img
                            className="download"
                            alt=""
                            src="./images/download.png"
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="specs">
                      <ul>
                        <li>
                          <img className="pdf" alt="" src="./images/pdf.png" />
                          <h2>46160-Plans</h2>
                          <span className="size">2 MB</span>
                          <span className="date">Mar 10, 2023</span>
                          <img
                            className="read"
                            alt=""
                            src="./images/read.png"
                          />
                          <img
                            className="download"
                            alt=""
                            src="./images/download.png"
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="specs">
                      <ul>
                        <li>
                          <img className="pdf" alt="" src="./images/pdf.png" />
                          <h2>46160-Plans</h2>
                          <span className="size">2 MB</span>
                          <span className="date">Mar 10, 2023</span>
                          <img
                            className="read"
                            alt=""
                            src="./images/read.png"
                          />
                          <img
                            className="download"
                            alt=""
                            src="./images/download.png"
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="specs">
                      <ul>
                        <li>
                          <img className="pdf" alt="" src="./images/pdf.png" />
                          <h2>46160-Plans</h2>
                          <span className="size">2 MB</span>
                          <span className="date">Mar 10, 2023</span>
                          <img
                            className="read"
                            alt=""
                            src="./images/read.png"
                          />
                          <img
                            className="download"
                            alt=""
                            src="./images/download.png"
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="specs">
                      <ul>
                        <li>
                          <img className="pdf" alt="" src="./images/pdf.png" />
                          <h2>46160-Plans</h2>
                          <span className="size">2 MB</span>
                          <span className="date">Mar 10, 2023</span>
                          <img
                            className="read"
                            alt=""
                            src="./images/read.png"
                          />
                          <img
                            className="download"
                            alt=""
                            src="./images/download.png"
                          />
                        </li>
                      </ul>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="specs">
                      <ul>
                        <li>
                          <img
                            className="pdf"
                            alt=""
                            src="./images/addendumsheet.png"
                          />
                          <h2>46160-QTO's</h2>
                          <span className="size">2 MB</span>
                          <span className="date">Mar 10, 2023</span>
                          <img
                            className="read"
                            alt=""
                            src="./images/cart.png"
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="specs">
                      <ul>
                        <li>
                          <img
                            className="pdf"
                            alt=""
                            src="./images/addendumsheet.png"
                          />
                          <h2>46160-QTO's</h2>
                          <span className="size">2 MB</span>
                          <span className="date">Mar 10, 2023</span>
                          <img
                            className="read"
                            alt=""
                            src="./images/cart.png"
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="specs">
                      <ul>
                        <li>
                          <img
                            className="pdf"
                            alt=""
                            src="./images/addendumsheet.png"
                          />
                          <h2>46160-QTO's</h2>
                          <span className="size">2 MB</span>
                          <span className="date">Mar 10, 2023</span>
                          <img
                            className="read"
                            alt=""
                            src="./images/cart.png"
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="specs">
                      <ul>
                        <li>
                          <img
                            className="pdf"
                            alt=""
                            src="./images/addendumsheet.png"
                          />
                          <h2>46160-QTO's</h2>
                          <span className="size">2 MB</span>
                          <span className="date">Mar 10, 2023</span>
                          <img
                            className="read"
                            alt=""
                            src="./images/cart.png"
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="specs">
                      <ul>
                        <li>
                          <img
                            className="pdf"
                            alt=""
                            src="./images/addendumsheet.png"
                          />
                          <h2>46160-QTO's</h2>
                          <span className="size">2 MB</span>
                          <span className="date">Mar 10, 2023</span>
                          <img
                            className="read"
                            alt=""
                            src="./images/cart.png"
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="specs">
                      <ul>
                        <li>
                          <img
                            className="pdf"
                            alt=""
                            src="./images/addendumsheet.png"
                          />
                          <h2>46160-QTO's</h2>
                          <span className="size">2 MB</span>
                          <span className="date">Mar 10, 2023</span>
                          <img
                            className="read"
                            alt=""
                            src="./images/cart.png"
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="specs">
                      <ul>
                        <li>
                          <img className="pdf" alt="" src="./images/pdf.png" />
                          <h2>46160-QTO's</h2>
                          <span className="size">2 MB</span>
                          <span className="date">Mar 10, 2023</span>
                          <img
                            className="read"
                            alt=""
                            src="./images/cart.png"
                          />
                        </li>
                      </ul>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="specs">
                      <ul>
                        <li>
                          <img className="pdf" alt="" src="./images/pdf.png" />
                          <h2>46160-Addendums</h2>
                          <span className="size">2 MB</span>
                          <span className="date">Mar 10, 2023</span>
                          <img
                            className="read"
                            alt=""
                            src="./images/read.png"
                          />
                          <img
                            className="download"
                            alt=""
                            src="./images/download.png"
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="specs">
                      <ul>
                        <li>
                          <img className="pdf" alt="" src="./images/pdf.png" />
                          <h2>46160-Addendums</h2>
                          <span className="size">2 MB</span>
                          <span className="date">Mar 10, 2023</span>
                          <img
                            className="read"
                            alt=""
                            src="./images/read.png"
                          />
                          <img
                            className="download"
                            alt=""
                            src="./images/download.png"
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="specs">
                      <ul>
                        <li>
                          <img className="pdf" alt="" src="./images/pdf.png" />
                          <h2>46160-Addendums</h2>
                          <span className="size">2 MB</span>
                          <span className="date">Mar 10, 2023</span>
                          <img
                            className="read"
                            alt=""
                            src="./images/read.png"
                          />
                          <img
                            className="download"
                            alt=""
                            src="./images/download.png"
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="specs">
                      <ul>
                        <li>
                          <img className="pdf" alt="" src="./images/pdf.png" />
                          <h2>46160-Addendums</h2>
                          <span className="size">2 MB</span>
                          <span className="date">Mar 10, 2023</span>
                          <img
                            className="read"
                            alt=""
                            src="./images/read.png"
                          />
                          <img
                            className="download"
                            alt=""
                            src="./images/download.png"
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="specs">
                      <ul>
                        <li>
                          <img className="pdf" alt="" src="./images/pdf.png" />
                          <h2>46160-Addendums</h2>
                          <span className="size">2 MB</span>
                          <span className="date">Mar 10, 2023</span>
                          <img
                            className="read"
                            alt=""
                            src="./images/read.png"
                          />
                          <img
                            className="download"
                            alt=""
                            src="./images/download.png"
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="specs">
                      <ul>
                        <li>
                          <img className="pdf" alt="" src="./images/pdf.png" />
                          <h2>46160-Addendums</h2>
                          <span className="size">2 MB</span>
                          <span className="date">Mar 10, 2023</span>
                          <img
                            className="read"
                            alt=""
                            src="./images/read.png"
                          />
                          <img
                            className="download"
                            alt=""
                            src="./images/download.png"
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="specs">
                      <ul>
                        <li>
                          <img className="pdf" alt="" src="./images/pdf.png" />
                          <h2>46160-Addendums</h2>
                          <span className="size">2 MB</span>
                          <span className="date">Mar 10, 2023</span>
                          <img
                            className="read"
                            alt=""
                            src="./images/read.png"
                          />
                          <img
                            className="download"
                            alt=""
                            src="./images/download.png"
                          />
                        </li>
                      </ul>
                    </div>
                  </TabPanel>
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
