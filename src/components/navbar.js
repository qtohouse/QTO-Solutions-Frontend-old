import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navbar, Nav, Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbarreact = () => {
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
      "new (1).png",
      "new(1).png",
      "carticon.png",
      "dropdown.png",
      "noti.png",
      "mail.png",
      "QTO SOLUTION LOGO-08.png",
      "search.png",
      "ci1.png",
      "contact.png",
      "QTO  LOGOOOO CHANGED-12.png"
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
          href="https://www.linkedin.com/company/71647097/admin/feed/posts/"
          className="linkedin"
        >
          <img
            className="fixed-sidebar-image"
            alt=""
            src="./images/twitter-circled@2x.png"
          />
        </a>
        <a href="https://www.instagram.com/qto_solutions/" className="instagram">
          <img
            className="fixed-sidebar-image"
            alt=""
            src="./images/instagram@2x.png"
          />
        </a>
        <a href="https://twitter.com/QtoSol" className="twitter">
          <img
            className="fixed-sidebar-image"
            alt=""
            src="./images/twitter-circled@2xx.png"
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
          />
        </a>
      
       
        {/* <a href="#" className="linkedin">
          <i className="fa fa-linkedin" />
        </a>
        <a href="#" className="youtube">
          <i className="fa fa-youtube" />
        </a> */}
      </div>

      <div className="row mininav">
        <div className="NewP col-sm-12 col-md-12 col-lg-12 ">
          <div className="mni ml-auto">
            {images[5] && (
              <div key="image9">
                <a className="" href="tel: 312-544-0023">
                  <img src={images[9]} alt="Image 9" />
                  <div className="newproject">
                    <span>(312)-544-0023</span>
                  </div>
                </a>
              </div>
            )}
          </div>
          <div className="mni ml-auto">
            {images[5] && (
              <div key="image5">
                <a href="mailto:info@qtosol.com">
                  <img src={images[5]} alt="Image 5" />
                  <div className="newproject">
                    <span>info@qtosol.com</span>
                  </div>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      <div>
        <Navbar bg="light" expand="lg">
          <Container fluid>
          <Navbar.Brand>
             <Link to="/">
                <img className="logo nav_logo" src={images[10]} alt="Image 10" />
              </Link >
              </Navbar.Brand>

           {/* <Navbar.Brand>
             <Link to="/">
                <img className="logo nav_logo" src={images[6]} alt="Image 6" />
              </Link >
              </Navbar.Brand> */}
             

            <Navbar.Toggle aria-controls="navbarSupportedContent" />
            <Navbar.Collapse id="navbarSupportedContent">
              {/* <Form className="d-flex ms-auto" onSubmit={handleFormSubmit}>
                <Form.Control
                  type="search"
                  placeholder="Search Projects"
                  aria-label="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button type="submit">
                  {images[7] && (
                    <img className="logo" src={images[7]} alt="Image 7" />
                  )}
                </Button>
              </Form> */}

              {/* <Navbar.Toggle /> */}
              
            <div className="container teal borderYtoX"> 
                 <Navbar.Collapse className="justify-content-end">
                 <Nav>
         
                  <Nav.Link
                    as={Link}
                    to="/"
                    className="nav-link active"
                    data-toggle="tab"
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/AboutUs" className="nav-link">
                    About Us
                  </Nav.Link>
                   {/* <Nav.Link as={Link} to="/Projects" className="nav-link">
                    Projects
                  </Nav.Link>  */}
                  <Nav.Link as={Link} to="/Services" className="nav-link">
                    Solutions
                  </Nav.Link>

                  {/* <Nav.Link as={Link} to="/career" className="nav-link">
                    Career
                  </Nav.Link> */}
                  <Nav.Link as={Link} to="/ContactUs" className="nav-link">
                    Contact Us
                  </Nav.Link>
                  {/* <Nav.Link as={Link} to="/Sample" className="nav-link">
                    Sample
                  </Nav.Link> */}
                  {/* <Nav.Link as={Link} to="/Cart" className="nav-link">
                    Add to Cart
                  </Nav.Link> */}
                  
                  
                </Nav>
                 </Navbar.Collapse>
             </div>
             <Nav.Link as={Link} to="/quote" className="nav-link">
                    <Button
                      type="button"
                      className="btn loginb NB vertical-align-btn"
                      to="/quote"
                    >
                      Get Free Quote
                    </Button>
                    
                  </Nav.Link>
            </Navbar.Collapse>
          </Container>
        </Navbar>
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

export default Navbarreact;
