import React, { useEffect } from "react";
import "./ProjectCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectCard = ({ project }) => {
  const { image, name, description, preview, github } = project;
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div
      data-aos="fade-up"
      className="project-card d-flex flex-column justify-content-between rounded px-2"
    >
      <div>
        <div className="">
          <img className="project-img rounded" src={image} alt="" />
        </div>

        <div className="text-white">
          <div>
            <h2 className="text-color fw-bold py-1">{name}</h2>
          </div>
          <p className="txt-justify">{description}</p>
        </div>
      </div>
      <div className="mb-3">
        <div className="d-flex justify-content-between align-items-end">
          <div>
            <a href={preview} target="_blank">
              <button className="card-btn fw-bold">
                <FontAwesomeIcon className="font-awesome" icon={faEye} />{" "}
                preview
              </button>
            </a>
          </div>
          <div>
            <a href={github} target="_blank">
              <button className="card-btn fw-bold">
                <FontAwesomeIcon className="font-awesome" icon={faGithub} />{" "}
                github
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
