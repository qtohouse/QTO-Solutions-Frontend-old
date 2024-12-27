import React, { useState, useEffect } from 'react';
import Weworkwith from "./Weworkwith";
import AdvanceSearch from "./AdvanceSearch";
import CoreValues from "./CoreValues";
import CSIDivisions from "./CSIDivisions";
import Testimonials from "./Testimonials";
// import Faqs from "./Faqs";
import EstmationServices from "./EstmationServices";
// import LatestProjects  from "./LatestProjects ";


const NumberAnimation = () => {
  const [animationPlayed, setAnimationPlayed] = useState(false);

  useEffect(() => {
    if (!animationPlayed) {
      let valueDisplays = document.querySelectorAll(".num");
      let interval = 6000;

      valueDisplays.forEach((valueDisplay) => {
        valueDisplay.textContent = '00';
      });

      valueDisplays.forEach((valueDisplay) => {
        let startValue = 0;
        let endValue = parseInt(valueDisplay.getAttribute("data-val"));
        let duration = Math.floor(interval / endValue);
        
        let counter = setInterval(() => {
          startValue += 1;
          valueDisplay.textContent = startValue.toString().padStart(2, '0');

          if (startValue === endValue) {
            clearInterval(counter);
          }
        }, duration);
      });

      // Set the flag to indicate that the animation has played
      setAnimationPlayed(true);
    }
  },  [animationPlayed]);



  return (
    <>
      <AdvanceSearch />

      <section className=" container">
             <section>
          
          <div className="container qna">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                <ul className="qto-available">
                  <li className="border">
                    <img className="" alt="" src="./images/group1.svg" />
                    <span className="num" data-val={79}>
                   
                   </span>
                   <span className="text">QTO Available</span>
                  </li>
                  <div></div>
                  <li className="border">
                    <img
                      className=""
                      alt=""
                      src="./images/qto-in-progress.png"
                    />
                    <span className="num" data-val={22}>
                 
                    </span>
                   <span className="text">QTO In Progress</span>
                  </li>
                  
                </ul>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                <ul className="qto-available">
                  <li className="border">
                    <img className="" alt="" src="./images/bid-results.png" />
                    <span className="num" data-val={125}>
                  
                   </span>
                   <span className="text">Bid Results</span>
                  </li>
                  {/* <li className="border">
                    <img className="" alt="" src="./images/group1.svg" />
                     <span className="num" data-val={40}>
                   
                     </span>
                     <span className="text">Private</span>
                  </li> */}
                  <li className="border">
                    <img className="" alt="" src="./images/awarded.png" />
                    <span className="num" data-val={66}>
                  
                     </span>
                     <span className="text">Awarded</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section> 

        

   

{/* 
        <section>
        
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                <div className=" ">
                  <div className="border RU">
                    <h2 className="">Recent Updates</h2>
                    <div className="cards">
                      <div className="cardheadingsect">
                        <span className="project_started">Project Started</span>
                        <span className="post_an_hour">Post an hour ago</span>
                        <h2>
                          HS 498 Health Arts Robotics and Technology High School{" "}
                        </h2>
                        <div className="loc">
                          <img
                            className="pdf"
                            alt=""
                            src="./images/location.png"
                          />
                          <span className="">
                            207-01 116th Avenue , Cambria Heights, NY 11411, USA
                          </span>
                        </div>
                      </div>
                      <div className="cardheadingsect">
                        <span className="project_started">Project Started</span>
                        <span className="post_an_hour">Post an hour ago</span>
                        <h2>
                          HS 498 Health Arts Robotics and Technology High School{" "}
                        </h2>
                        <div className="loc">
                          <img
                            className="pdf"
                            alt=""
                            src="./images/location.png"
                          />
                          <span className="">
                            207-01 116th Avenue , Cambria Heights, NY 11411, USA
                          </span>
                        </div>
                      </div>

                      <div className="cardheadingsect">
                        <span className="project_started">Project Started</span>
                        <span className="post_an_hour">Post an hour ago</span>
                        <h2>
                          HS 498 Health Arts Robotics and Technology High School{" "}
                        </h2>
                        <div className="loc">
                          <img
                            className="pdf"
                            alt=""
                            src="./images/location.png"
                          />
                          <span className="">
                            207-01 116th Avenue , Cambria Heights, NY 11411, USA
                          </span>
                        </div>
                      </div>
                      <div className="cardheadingsect">
                        <span className="project_started">Project Started</span>
                        <span className="post_an_hour">Post an hour ago</span>
                        <h2>
                          HS 498 Health Arts Robotics and Technology High School{" "}
                        </h2>
                        <div className="loc">
                          <img
                            className="pdf"
                            alt=""
                            src="./images/location.png"
                          />
                          <span className="">
                            207-01 116th Avenue , Cambria Heights, NY 11411, USA
                          </span>
                        </div>
                      </div>
                      <div className="cardheadingsect">
                        <span className="project_started">Project Started</span>
                        <span className="post_an_hour">Post an hour ago</span>
                        <h2>
                          HS 498 Health Arts Robotics and Technology High School{" "}
                        </h2>
                        <div className="loc">
                          <img
                            className="pdf"
                            alt=""
                            src="./images/location.png"
                          />
                          <span className="">
                            207-01 116th Avenue , Cambria Heights, NY 11411, USA
                          </span>
                        </div>
                      </div>
                      <div className="cardheadingsect">
                        <span className="project_started">Project Started</span>
                        <span className="post_an_hour">Post an hour ago</span>
                        <h2>
                          HS 498 Health Arts Robotics and Technology High School{" "}
                        </h2>
                        <div className="loc">
                          <img
                            className="pdf"
                            alt=""
                            src="./images/location.png"
                          />
                          <span className="">
                            207-01 116th Avenue , Cambria Heights, NY 11411, USA
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-8 col-xl-8 ">
                <div className="border RU JC">
                  <h2 className="">Job Calender</h2>
                  <div className="cards">
                    <div className="cardheadingsect">
                      <span className="bid-date">Bid Date: 29/05/2023</span>
                      <span className="time">2:00 PM</span>
                      <h2>
                        HS 498 Health Arts Robotics and Technology High School{" "}
                      </h2>
                      <div className="loc">
                        <img
                          className="pdf"
                          alt=""
                          src="./images/location.png"
                        />
                        <span className="">
                          207-01 116th Avenue , Cambria Heights, NY 11411, USA
                        </span>
                      </div>
                      <div className="aut-progress">
                        <span className="Authority">
                          {" "}
                          Better Park City Authority
                        </span>
                        <div className="progress-background">
                          <div className="qto-progress">
                            <span>
                              QTO in progress <span>50%</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="cardheadingsect">
                      <span className="bid-date">Bid Date: 29/05/2023</span>
                      <span className="time">2:00 PM</span>
                      <h2>
                        HS 498 Health Arts Robotics and Technology High School{" "}
                      </h2>
                      <div className="loc">
                        <img
                          className="pdf"
                          alt=""
                          src="./images/location.png"
                        />
                        <span className="">
                          207-01 116th Avenue , Cambria Heights, NY 11411, USA
                        </span>
                      </div>
                      <div className="aut-progress">
                        <span className="Authority">
                          {" "}
                          Better Park City Authority
                        </span>
                        <div className="progress-background">
                          <div className="qto-progress">
                            <span>
                              QTO in progress <span>50%</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="cardheadingsect">
                      <span className="bid-date">Bid Date: 29/05/2023</span>
                      <span className="time">2:00 PM</span>
                      <h2>
                        HS 498 Health Arts Robotics and Technology High School{" "}
                      </h2>
                      <div className="loc">
                        <img
                          className="pdf"
                          alt=""
                          src="./images/location.png"
                        />
                        <span className="">
                          207-01 116th Avenue , Cambria Heights, NY 11411, USA
                        </span>
                      </div>
                      <div className="aut-progress">
                        <span className="Authority">
                          {" "}
                          Better Park City Authority
                        </span>
                        <div className="progress-background">
                          <div className="qto-progress">
                            <span>
                              QTO in progress <span>50%</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="cardheadingsect">
                      <span className="bid-date">Bid Date: 29/05/2023</span>
                      <span className="time">2:00 PM</span>
                      <h2>
                        HS 498 Health Arts Robotics and Technology High School{" "}
                      </h2>
                      <div className="loc">
                        <img
                          className="pdf"
                          alt=""
                          src="./images/location.png"
                        />
                        <span className="">
                          207-01 116th Avenue , Cambria Heights, NY 11411, USA
                        </span>
                      </div>
                      <div className="aut-progress">
                        <span className="Authority">
                          {" "}
                          Better Park City Authority
                        </span>
                        <div className="progress-background">
                          <div className="qto-progress">
                            <span>
                              QTO in progress <span>50%</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="cardheadingsect">
                      <span className="bid-date">Bid Date: 29/05/2023</span>
                      <span className="time">2:00 PM</span>
                      <h2>
                        HS 498 Health Arts Robotics and Technology High School{" "}
                      </h2>
                      <div className="loc">
                        <img
                          className="pdf"
                          alt=""
                          src="./images/location.png"
                        />
                        <span className="">
                          207-01 116th Avenue , Cambria Heights, NY 11411, USA
                        </span>
                      </div>
                      <div className="aut-progress">
                        <span className="Authority">
                          {" "}
                          Better Park City Authority
                        </span>
                        <div className="progress-background">
                          <div className="qto-progress">
                            <span>
                              QTO in progress <span>50%</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="cardheadingsect">
                      <span className="bid-date">Bid Date: 29/05/2023</span>
                      <span className="time">2:00 PM</span>
                      <h2>
                        HS 498 Health Arts Robotics and Technology High School{" "}
                      </h2>
                      <div className="loc">
                        <img
                          className="pdf"
                          alt=""
                          src="./images/location.png"
                        />
                        <span className="">
                          207-01 116th Avenue , Cambria Heights, NY 11411, USA
                        </span>
                      </div>
                      <div className="aut-progress">
                        <span className="Authority">
                          {" "}
                          Better Park City Authority
                        </span>
                        <div className="progress-background">
                          <div className="qto-progress">
                            <span>
                              QTO in progress <span>50%</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>  */}
        <section>
          {/* Latest Projects  */}
          {/* <div className="container">
            <div className="row"></div>
          </div> */}
        </section>
        <section>
          {/* why Choose QTo */}
          <div className="container">
            <div className="row"></div>
          </div>
        </section>

        {/* <LatestProjects />
        <Weworkwith />
        <ContainerCardForm />
        <CardContainer /> */}
      </section>
      {/* <LatestProjects /> */}
      <EstmationServices />
 
    
      <CoreValues/>
     
      {/* <Testimonials /> */}
      
      {/* <Faqs /> */}
      <CSIDivisions />
      <Weworkwith />
    </>
  );
}
export default NumberAnimation;