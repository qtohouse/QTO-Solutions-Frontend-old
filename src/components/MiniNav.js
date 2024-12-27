import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const MiniNav = () => {
  // Replace 'your-api-endpoint' with the actual URL
  const apiUrl = "search.json";
  const [searchQuery, setSearchQuery] = useState("");
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Create a JSON object with the search query
    const jsonData = {
      searchQuery: searchQuery,
    };

    try {
      // Send the JSON data to the correct API endpoint
      const response = await axios.post(apiUrl, jsonData);
      // Handle the response as needed
      console.log(response.data);
    } catch (error) {
      // Handle errors here
      console.error(error);
    }
  };

  const [images, setImages] = useState([]);

  useEffect(() => {
    const imageNames = [
      "icon2.png",
      "new(1).png",
      "carticon.png",
      "dropdown.png",
      "noti.png",
      "mail.png",
      "logo1.png",
      "search.png",
      "ci1.png",
    ];

    Promise.all(
      imageNames.map((imageName) =>
        import(`./images/${imageName}`)
          .then((module) => module.default)
          .catch((error) => {
            console.error(`Error loading image "${imageName}":`, error);
            return null; // Return null in case of error to avoid breaking the layout
          })
      )
    )
      .then((imageModules) => setImages(imageModules))
      .catch((error) => console.error("Error loading images:", error));
  }, []);

  return (
    <>
      <div className="icon-bar">
        <a
          href="https://www.instagram.com/qto_solutions/"
          className="instagram"
        >
          <img
            className="fixed-sidebar-image"
            alt=""
            src="./images/instagram@2x.png"
            title="Instagram"
          />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100064318140416"
          className="facebook"
        >
          <img
            className="fixed-sidebar-image"
            alt=""
            src="./images/facebook@2x.png"
            title="Facebook"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/qto-solutions-9a689a204/"
          className="linkedin"
        >
          <img
            className="fixed-sidebar-image"
            alt=""
            src="./images/twitter-circled@2x.png"
            title="linkedin"
          />
        </a>
        {/* <a href="#" className="linkedin">
          <img
            className="fixed-sidebar-image"
            alt=""
            src="./images/twitter-circled@2x.png"
            title="Linkedin"
          />
        </a> */}
        {/* <a href="#" className="linkedin">
          <i className="fa fa-linkedin" />
        </a>
        <a href="#" className="youtube">
          <i className="fa fa-youtube" />
        </a> */}
      </div>

      <div className="row mininav">
        <div className="NewP col-sm-12 col-md-6 col-lg-7 ">
          <div className="">
            {images[0] && (
              <div key="image0">
                <img src={images[0]} alt="Image 0" />
              </div>
            )}
          </div>
          <div className="newproject">
            <span>
              Coney Island Head Start Daycare Center (Brooklyn) : Bid Date :
              02-06-2023
            </span>
          </div>
          <div className=""></div>
          <div className=""></div>
        </div>
        <div className="NewPR col-sm-12 col-md-6 col-lg-5 ">
          <div className="navul">
            <Link className="nav-link " to="/Login">
              <button type="button" class="btn loginb vertical-align-btn">
                Login
              </button>
            </Link>
          </div>
          <div className="">
            <button type="button" class="btn cartb vertical-align-btn ">
              {images[2] && (
                <div key="image1" className="CI">
                  <img src={images[2]} alt="Image 2" />
                </div>
              )}
              <span>No Item</span>
              {images[3] && (
                <div key="image1">
                  <img src={images[3]} alt="Image 3" />
                </div>
              )}
            </button>
          </div>
          <div className="mni bdg">
            {images[4] && (
              <div key="image4">
                <img src={images[4]} alt="Image 4" />
                <span className="notifi">4</span>
              </div>
            )}
          </div>
          <div className="mni">
            {images[5] && (
              <div key="image5">
                <img src={images[5]} alt="Image 5" />
                <div className="newproject">
                  <span>info@qtosol.com</span>
                </div>
              </div>
            )}
          </div>
          <div className=""></div>
        </div>
      </div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <div className="nav_logo">
              <img src="./images/QTO SOLUTION LOGO MAIN.png" title="" alt="" />
              {/* <img className="logo" src={images[6]} alt="Image 6" /> */}
            </div>
            <form className="d-flex navf" onSubmit={handleFormSubmit}>
              <input
                // style={{ border: "1.5px solid #Fdc002" }}
                className="form-control me-2"
                type="search"
                placeholder="Search Projects"
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="btn" type="submit">
                {images[7] && (
                  <div key="image7" className="">
                    <img className="logo" src={images[7]} alt="Image 7" />
                  </div>
                )}
              </button>
            </form>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  {/* <form className="d-flex">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form> */}
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" data-toggle="tab" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="/AboutUs">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="/Services">
                    Solutions
                  </Link>
                </li>
                <li className="nav-item">
                  {/* <Link className="nav-link " to="/Projects">
                    Projects
                  </Link> */}
                  <div className="project-dropdown">
                    {/* <span className="project-label">Project</span> */}
                    <Link className="nav-link " to="/Projects">
                      Projects
                    </Link>
                    {/* <ul className="options">
                      <li>Search project by location</li>
                      <li>QTO Available</li>
                      <li>QTO in progress</li>
                      <li>Private Project</li></ul> */}
                    {/* <option >Search project by location</option>
                              <option >QTO- available</option>
                              <option >QTO- in progress</option>
                              <option >Private Projects</option> */}
                  </div>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="/Blog">
                    Blogs
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="/career">
                    Career
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="/ContactUs">
                    Contact Us
                  </Link>
                </li>

                <li className="nav-item registernow">
                  <Link to="/Register">
                    <button
                      type="button"
                      className="btn loginb NB vertical-align-btn"
                    >
                      Register Now
                    </button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/quote">
                    <button
                      type="button"
                      className="btn loginb NB vertical-align-btn"
                    >
                      Get Free Quote
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <section>
        {/* Carousel section */}
        <div className="container_fluid">
          <div
            id="myCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            {/* Carousel background image */}
            <div className="carousel-inner">
              <div className="carousel-item ">
                {/* {images[8] && (
                  <div key="image8" className="crim">
                    <img className="opacity-75" src={images[8]} alt="Image 8" />
                  </div>
                )} */}
                <div className="carousel-caption">
                  {/* Search bar with location selection */}
                  <div className="search-bar-container">
                    <div>
                      <span className="srchspn">Keywords</span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Windows,Roof etc '"
                      />
                    </div>
                    <div>
                      <span className="srchspn">Locations</span>
                      <select
                        className="form-select"
                        aria-label="Location Select"
                      >
                        <option value={1}>Select Regin</option>
                        <option value={2}>Location 2</option>
                        {/* Add more options for locations as needed */}
                      </select>
                    </div>
                    <div>
                      <button type="button" class="btn loginb">
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MiniNav;
