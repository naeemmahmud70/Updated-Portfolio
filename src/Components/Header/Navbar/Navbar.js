import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faEject,
  faTasks,
  faMarker,
  faCode,
  faInbox,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav class="row navbar navbar-expand-lg navbar-light navbar-bg sticky-top t-0 bg-color px-2 py-3">
      <div class="container-fluid">
        <h3 className="text-color fw-bold">
          <FontAwesomeIcon className="text-color" icon={faCode} /> Naeem
        </h3>
        <button
          class="navbar-toggler toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item mx-4 fw-bold nav-hover ">
              <a class="nav-link text-white" href="#home">
                <FontAwesomeIcon className="text-white" icon={faHome} /> Home
              </a>
            </li>
            <li class="nav-item mx-4  fw-bold nav-hover">
              <a class="nav-link text-white" href="#about">
                <FontAwesomeIcon className="text-white" icon={faEject} /> About
              </a>
            </li>
            <li class="nav-item mx-4  fw-bold nav-hover">
              <a class="nav-link text-white" href="#skills">
                <FontAwesomeIcon className="text-white" icon={faCode} /> Skills
              </a>
            </li>
            <li class="nav-item mx-4  fw-bold nav-hover">
              <a class="nav-link text-white" href="#projects">
                <FontAwesomeIcon className="text-white" icon={faTasks} />{" "}
                Projects
              </a>
            </li>
            <li class="nav-item mx-4  fw-bold nav-hover">
              <a class="nav-link text-white" href="#reviews">
                <FontAwesomeIcon className="text-white" icon={faMarker} />{" "}
                Reviews
              </a>
            </li>
            <li class="nav-item mx-4  fw-bold nav-hover">
              <a class="nav-link text-white" href="#contact">
                <FontAwesomeIcon className="text-white" icon={faInbox} />{" "}
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
