import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
// import "./TestimonialSlider.css"; // Import your custom CSS for styling
import { Carousel } from "react-bootstrap"; // Import Carousel from react-bootstrap

const testimonialData = [
  {
    name: "Sarah Rodriguez",
    location: "San Francisco, California",
    text: "QTO Estimating has completely changed the game for our construction projects. Their accurate and detailed estimates have helped us to streamline our bidding process and win projects. Their team is always responsive, professional, and a pleasure to work with. We highly recommend QTO Estimating for any construction estimating needs.",
  },
  {
    name: "Rachel Roth",
    location: "California",
    text: "QTO Estimating has completely changed the game for our construction projects. Their accurate and detailed estimates have helped us to streamline our bidding process and win projects. Their team is always responsive, professional, and a pleasure to work with. We highly recommend QTO Estimating for any construction estimating needs.",
  },
  // Add more testimonials as needed
];

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <dif className="container">
      <Carousel activeIndex={index} onSelect={handleSelect} interval={5000}>
        {testimonialData.map((testimonial, idx) => (
          <Carousel.Item key={idx}>
            <div className="row">
              <div className="TC col-3">
                <h2>{testimonial.name}</h2>
                <p>{testimonial.location}</p>
                <div className="TP">
                  <p>{testimonial.text}</p>
                </div>
              </div>
              <div className="TC col-3">
                <h2>{testimonial.name}</h2>
                <p>{testimonial.location}</p>
                <div className="TP">
                  <p>{testimonial.text}</p>
                </div>
              </div>
              <div className="TC col-3">
                <h2>{testimonial.name}</h2>
                <p>{testimonial.location}</p>
                <div className="TP">
                  <p>{testimonial.text}</p>
                </div>
              </div>
                            <div className="TC col-3">
                <h2>{testimonial.name}</h2>
                <p>{testimonial.location}</p>
                <div className="TP">
                  <p>{testimonial.text}</p>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </dif>
  );
};

export default TestimonialSlider;
