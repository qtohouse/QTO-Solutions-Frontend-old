import React, { useState, useEffect } from "react";
import CardContainer from "./CardContainer";
import axios from "axios";
//
import TakeoffCompleted from "./TakeoffCompleted";
import TakeOffInProgress from "./TakeOffInProgress";
import ToBeStarted from "./ToBeStarted";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import ContainerCardForm from './ContainerCardForm';

const Projects = ({ onFilterChange }) => {
  // const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLocationOpen, setLocationOpen] = useState(true); // State to control submenu visibility

  // const handleCategoryChange = (category) => {
  //   setSelectedCategory(category);
  //   onFilterChange(category);
  // };

  const toggleLocationMenu = () => {
    console.log("Toggle Location Menu called");
    setLocationOpen(!isLocationOpen);
  };

  const [daterange, setdaterange] = useState(true);

  const toggleDropdown = () => {
    setdaterange(!daterange);
  };
  const [searchresult, setsearchresult] = useState(true);

  const togglesearchresult = () => {
    setsearchresult(!searchresult);
  };
  const [bidamount, setbidamount] = useState(true);

  const togglebidamount = () => {
    setbidamount(!bidamount);
  };
  const [status, setstatus] = useState(true);

  const togglestatus = () => {
    setstatus(!status);
  };
  const [division, setdivision] = useState(true);

  const toggledivision = () => {
    setdivision(!division);
  };

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Make a GET request to your DRF API endpoint
    axios
      // .get("http://localhost:8000/api/projects/")
      .get("http://localhost:8000/api/projects/")
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  }, []);


  return ( 
    <>
      <div className="container projects">
        <div className="projectHeading">
          {/* Projects */}
          <h2>Projects</h2>
          <span>Home</span>/<span>projects</span>
        </div>
        <div className="container aUp">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 sidnav ">
              <div className="sidenavecontent border">
                <div className="heading">
                  <span>Show Results By</span>
                </div>
                <div>
                  <nav className="sidebar card">
                    <ul className="nav flex-column">
                      <li>
                        <span onClick={togglesearchresult}>
                          Search Results by Keyword
                        </span>
                      </li>
                      {searchresult && (
                        <li
                          className="dropdown-manue"
                          // onClick={() => handleCategoryChange("Location 1")}
                        >
                          <input type="text" placeholder="Window, roof, etc" />
                        </li>
                      )}
                      <li className="nav-item has-submenu">
                        <span onClick={toggleLocationMenu}>Location</span>
                      </li>
                      {isLocationOpen && (
                        <li
                          className="dropdown-manue"
                          // onClick={() => handleCategoryChange("Location 1")}
                        >
                          <input type="text" placeholder="Location" />
                        </li>
                      )}

                      <li>
                        <span onClick={toggleDropdown}>Date Range</span>
                      </li>
                      {daterange && (
                        <li
                          className="dropdown-manue"
                          // onClick={() => handleCategoryChange("date-range")}
                        >
                          <div className="date">
                            <form action="/action_page.php">
                              <input
                                className="left-input"
                                type="date"
                                id="birthday"
                                name="birthday"
                              />
                              <span className="center-span">to</span>
                              <input
                                className="right-input"
                                type="date"
                                id="birthday"
                                name="birthday"
                              />
                            </form>
                          </div>
                        </li>
                      )}
                      <li>
                        <span onClick={togglebidamount}>Bid Amount</span>
                      </li>
                      {bidamount && (
                        <li
                          className="dropdown-manue"
                          // onClick={() => handleCategoryChange("date-range")}
                        >
                          <div className="amount">
                            <input
                              className="left-input"
                              type="number"
                              placeholder="100   $"
                            />
                            <span className="center-span">to</span>
                            <input
                              className="right-input"
                              type="number"
                              placeholder="5000000  $"
                            />
                          </div>
                        </li>
                      )}

                      <li>
                        <span onClick={togglestatus}>Status</span>
                      </li>
                      {status && (
                        <li
                          className="dropdown-manue"
                          // onClick={() => handleCategoryChange("date-range")}
                        >
                          <div className="status">
                            <select
                              className="form-select"
                              aria-label="Default select example"
                            >
                              <option value="">Solicicated</option>
                              <option value="Alabama">UnSolicicated</option>
                              <option value="Alaska">None</option>
                            </select>
                          </div>
                        </li>
                      )}
                      <li>
                        <span onClick={toggledivision}>Division</span>
                      </li>
                      {division && (
                        <li
                          className="dropdown-manue"
                          // onClick={() => handleCategoryChange("date-range")}
                        >
                          Division
                        </li>
                      )}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-9 projectSection">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-12 col-xl-12 sort  detail">
                  <Tabs>
                    <TabList>
                      <Tab className="">
                        <span className="detail-manue">Active Projects</span>
                      </Tab>
                      <Tab>
                        <span className="detail-manue">Past Projects</span>
                        {/* {" "} */}
                        {/* <span>35</span> */}
                      </Tab>
                      <Tab>
                        <span className="detail-manue">Featured Projects</span>
                        {/* {" "} */}
                        {/* <span>2</span> */}
                      </Tab>
                      <Tab>
                        <span className="detail-manue">Favorites</span>{" "}
                        {/* <span>20</span> */}
                      </Tab>
                    </TabList>
                    <TabPanel>
                      <CardContainer/>
                    </TabPanel>
                    <TabPanel>
                      <TakeOffInProgress />
                    </TabPanel>
                    <TabPanel>
                      <TakeoffCompleted />
                    </TabPanel>
                    <TabPanel>
                      <ToBeStarted />
                    </TabPanel>
                  </Tabs>

                </div>
                {/* <div className="col-12 col-sm-12 col-md-6 col-lg-12 col-xl-12  project-card ">
                  <ul>
                    {projects.map((project) => (
                      <li key={project.project_id}>
                        {project.project_name} - {project.status}
                      </li>
                    ))}
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
