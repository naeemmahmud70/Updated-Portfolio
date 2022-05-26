import React, { useEffect } from "react";
import "./MainHeader.css";
import headerImg from "../../../images/header-image.png";
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import { useSpring, animated } from "react-spring";
import Wave from "react-wavify";
import AOS from "aos";
import "aos/dist/aos.css";

const MainHeader = () => {
  const styles = useSpring({
    loop: { reverse: true },
    from: { y: 0 },
    to: { y: 15 },
    delay: 400,
  });

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div id="home"className="bg-color">
       <div className="top-wave row">
         <Wave fill="#203170d5" mask="url(#mask)" className="wave-height" id="wave-padding">
            <defs>
              <linearGradient id="gradient" gradientTransform="rotate(90)">
                <stop offset="0" stopColor="white" />
                <stop offset="0.5" stopColor="black" />
              </linearGradient>
              <mask id="mask">
                <rect
                  x="0"
                  y="0"
                  width="2560"
                  height="200"
                  fill="url(#gradient)"
                />
              </mask>
            </defs>
          </Wave>
         </div>
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center align-items-center p-5">
          <div data-aos="fade-right" className="text-white">
            <h3 className="text-white">
              <span>
                <i>HI THERE</i>
              </span>
            </h3>
            <h2 className="text-white">
              I'M <span id="name-style">NAEEM MAHMUD</span>
            </h2>
            <div className="type-writer">
              <Typewriter
                options={{
                  strings: [
                    "I am a Frontend Developer",
                    "React Developer",
                    "MERN-Stack Developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <a
              href="https://drive.google.com/file/d/13Ky3nsUPtlDc6naSlSldO9_7RiVNEvTp/view?usp=drivesdk"
              target="_blank"
            >
              <button className="download-btn fw-bold">
                Download Resume <FontAwesomeIcon icon={faFileDownload} />{" "}
              </button>
            </a>
          </div>
        </div>
        <div className="col-md-6 p-5">
          <animated.div style={styles}>
            <img className="img-fluid header-image" src={headerImg} alt="" />
          </animated.div>
        </div>
      </div>

      <div className="row">
         <Wave fill="#203170d5" mask="url(#mask)" className="wave-height">
            <defs>
              <linearGradient id="gradient" gradientTransform="rotate(90)">
                <stop offset="0" stopColor="white" />
                <stop offset="0.5" stopColor="black" />
              </linearGradient>
              <mask id="mask">
                <rect
                  x="0"
                  y="0"
                  width="2560"
                  height="200"
                  fill="url(#gradient)"
                />
              </mask>
            </defs>
          </Wave>
         </div>
    </div>
  );
};

export default MainHeader;
