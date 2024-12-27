import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function AdvanceSearch() {
  const [moreoptions, setmoreoptions] = useState();

  const togglemoreoptions = () => {
    setmoreoptions(!moreoptions);
    console.log(moreoptions);
  };

  return (
    <>
      <section>
        <div class="background-img-2">
          <div className="color_gradient" id="grad1">
            <section
              className="search"
              style={{
                backgroundImage:
                  'url("{% static "assets/img/carousel2.jpg"%} ")',
              }}
            >
              <div className="container-fluid">
                <div className="search-background main-image-text">
                  <div className="text-center">
                    <span className="heading" >QTO Solutions</span>
                    <p >
                      "Empowering your project with detailed and accurate takeoff, <br/> simplifying estimation and amplifying bidding success"
                    </p>
                    <Link to="/Sample">
                      <button className="NB-search">Get Free Sample</button>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
