import React, { useEffect } from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPhoneAlt,
  faEnvelope,
  faHistory,
  faUserGraduate,
  faMapMarker,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
        <div id="about" className="row about">
          <div className="col-lg-7 text-white px-5">
            <h1 className="fw-bold text-color">ABOUT ME</h1>
            <hr />
            <h2>MERN-Stack Web Developer</h2>
            <p className="txt-justify gradient-text">
              I am a self-motivated, enthusiastic and passionate web developer
              with a deep interest in MERN. I have one year of solid hands-on
              experience on MERN-Stack. Now I am working as a full-time Frontend
              Web Developer at Birds Software Solutions Pvt. Ltd. Amazing UI
              design, responsive and interactive websites, API integration,
              routing, user authentication, making API, secured API with JWT
              token, and smoother crud operation using MERN are the key features
              of the websites that I have created successfully. In addition to
              my knowledge base, I actively seek out new technologies and stay
              up-to-date on industry trends and advancements. My strength and
              interest include, I am a hard-working, self-motivated, and quick
              learner. I can adapt to new technologies easily.
            </p>
            <div className="row py-4 bio-data">
              <div className="col-lg-6">
                <h6>
                  <span className="fws-bold">
                    <FontAwesomeIcon className="f-bio" icon={faUser} /> Name:
                  </span>{" "}
                  Naeem Mahmud
                </h6>
                <h6>
                  <span className="fws-bold">
                    <FontAwesomeIcon className="f-bio" icon={faPhoneAlt} />{" "}
                    Phone:
                  </span>
                  +8801866194595
                </h6>
                <h6>
                  <span className="fws-bold">
                    <FontAwesomeIcon className="f-bio" icon={faEnvelope} />{" "}
                    Email:
                  </span>
                  naeemmahmud370@gmail.com
                </h6>
              </div>

              <div className="col-lg-6">
                <h6>
                  <span className="fws-bold">
                    <FontAwesomeIcon className="f-bio" icon={faHistory} /> Age:
                  </span>
                  20
                </h6>
                <h6>
                  <span className="fws-bold">
                    <FontAwesomeIcon className="f-bio" icon={faUserGraduate} />
                    Education:
                  </span>
                  Bachelors at Political Science
                </h6>
                <h6>
                  <span className="fws-bold">
                    <FontAwesomeIcon className="f-bio" icon={faMapMarker} />{" "}
                    Address:
                  </span>
                  Brahmanbaria, Bangladesh
                </h6>
              </div>
            </div>
          </div>

          <div className="col-lg-5 text-white px-5">
            <div>
              <h1 className="fw-bold text-color">My Experience</h1>
              <hr />
            </div>
            <div>
              <h2>Frontend Web Developer (Remote)</h2>
              <h5 className="mt-3">
                Birds Software Solutions Pvt. Ltd. , India(Singapore based)
              </h5>
              <h6>April, 2022 - Present</h6>
            </div>
            <div>
              <h5 className="mt-4">Responsibility-</h5>
              <ul className="gradient-text">
                <li>Developing new user-facing features using React.js.</li>
                <li>
                  Building reusable components and front-end libraries for
                  future use.
                </li>
                <li>
                  Translating designs and wireframes into high-quality code.
                </li>
                <li>
                  Optimizing components for maximum performance across a vast
                  array of web-capable devices and browsers.
                </li>
              </ul>

              <p className="">
                <span className="fw-bold">Skills :</span> HTML5, CSS3,
                Bootstrap5, JavaScript, ES6, React.js, React Router.
              </p>
            </div>
          </div>
        </div>
  );
};

export default About;
