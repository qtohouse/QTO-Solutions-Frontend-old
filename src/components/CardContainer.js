import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function ProjectCard({ project }) {
  return (
    <div className="cardcontainer ">
      <div className="new">
        <div>
          <span>New</span>
        </div>
      </div>
      <div className="row border ht">
        <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 cardheadingsect">
          <div>
            <span>Bid Date: {project.Project_Bid_Date}</span>
            <Link to={`/ProjectDetail/${project.project_id}`}>
              <h2>{project.project_name}</h2>
            </Link>

            <div className="loc">
              <img className="pdf" alt="location img" src="./images/location.png" />
              <span className="">{project.city}</span>
            </div>

            <div className="aut-progress">
              <span className="Authority">{project.company}</span>
              <div className="progress-background">
                <div className="qto-progress">
                  <span>
                    QTO in progress <span>{project.progress}%</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 card-right">
          <div className="bid-ammout">
            <span>Bid Amount: ${project.project_bid_amount}</span>
          </div>
          <Link to={`/ProjectDetail/${project.project_id}`}>
            <button className="NB smd">See More Details</button>
          </Link>

          <button className="adtocart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default function CardContainer() {
  const [projectData, setProjectData] = useState(null);
  const [sortedProjects, setSortedProjects] = useState([]);

  useEffect(() => {
    fetch("https://qto.solutions/reactapp/projects/projects/?format=json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setProjectData(data);
      })
      .catch((error) => {
        console.error("Fetch Error:", error);
      });
  }, []);

  useEffect(() => {
    if (projectData) {
      // Ensure projectData is not null before initializing sortedProjects
      setSortedProjects([...projectData]);
    }
  }, [projectData]); // Update sortedProjects qwhen projectData changes

  const sortProjects = (sortBy) => {
    let sortedProjectsCopy = [...sortedProjects];

    switch (sortBy) {
      case "bidDate":
        sortedProjectsCopy.sort(
          (a, b) => new Date(a.bidDate) - new Date(b.bidDate)
        );
        break;
      case "title":
        sortedProjectsCopy.sort((b, a) => a.title.localeCompare(b.title));
        break;
      case "amount":
        sortedProjectsCopy.sort((b, a) => a.amount - b.amount);
        break;
      // Add more sorting options as needed
      default:
        break;
    }

    setSortedProjects(sortedProjectsCopy);
  };

  return (
    <>
      <div>
        <button onClick={() => sortProjects("bidDate")}>
          Sort by Bid Date
        </button>
        <button onClick={() => sortProjects("title")}>Sort by Title</button>
        <button onClick={() => sortProjects("amount")}>Sort by Amount</button>
      </div> 

      <div>
        {/* Conditional rendering to handle projectData being null */}
        {projectData ? (
          sortedProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
  );
}
