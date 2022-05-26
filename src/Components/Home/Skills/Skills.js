import React, { useEffect } from "react";
import "./Skills.css";
import ProgressBar from "@ramonak/react-progress-bar";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import vs from "../../../images/rsz_vscode.jpg";
import git from "../../../images/rsz_git.png";
import firebase from "../../../images/rsz_firebase.png";
import heroku from "../../../images/rsz_heroku.png";
import js from "../../../images/js.png";
import node from "../../../images/nodejs.png";
import mongodb from "../../../images/rsz_images.png";
import react from "../../../images/react.png";
import express from "../../../images/express.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const percentage1 = "SASS";
  const percentage2 = "TypeScript";
  const percentage3 = "Redux";

  return (
    <section id="skills" className="row skills mt-5">
      <div className="d-flex justify-content-center">
        <div className="text-center ">
          <h1 className="text-color fw-bold">MY SKILLS</h1>
          <span className="animate-border"></span>
        </div>
      </div>

      <div data-aos="fade-right" className="col-md-6 p-5">
        <div className="text-white">
          <h3 className="text-color fw-bold">Frontend</h3>
          <hr />
        </div>
        <div className="text-white m-3">
          <h5>HTML</h5>
          <ProgressBar height="17px" bgColor="#48AE2C" completed={95} />
        </div>
        <div className="text-white m-3">
          <h5>CSS</h5>
          <ProgressBar height="17px" bgColor="#00BFFF" completed={90} />
        </div>
        <div className="m-3 text-white">
          <h5>BootStrap</h5>
          <ProgressBar height="17px" bgColor="#48AE2C" completed={95} />
        </div>
        <div className="m-3 text-white">
          <h5>JavaScript</h5>
          <ProgressBar height="17px" bgColor="#00BFFF" completed={90} />
        </div>
        <div className="m-3 text-white">
          <h5>React</h5>
          <ProgressBar height="17px" bgColor="#33ff47" completed={90} />
        </div>
        <div className="text-white">
          <h3 className="text-color fw-bold">Backend</h3>
          <hr />
        </div>
        <div className="m-3 text-white">
          <h5>Node JS</h5>
          <ProgressBar height="17px" bgColor="#FF6700" completed={60} />
        </div>
        <div className="m-3 text-white">
          <h5>Express JS</h5>
          <ProgressBar height="17px" bgColor=" #8033ff" completed={75} />
        </div>
        <div className="m-3 text-white">
          <h5>MongoDB</h5>
          <ProgressBar height="17px" bgColor="#ff3375" completed={80} />
        </div>
      </div>

      <div data-aos="fade-up" className="col-md-6 p-5">
        <div className="text-white">
          <h3 className="text-color fw-bold">Familiar</h3>
          <hr />
        </div>

        <div className="d-flex justify-content-center pt-3">
          <div className="w-25 m-2">
            <CircularProgressbar
              value={percentage1}
              text={percentage1}
              styles={buildStyles({
                rotation: 0.5,
                strokeLinecap: "butt",
                textSize: "20px",
                pathTransitionDuration: 0.5,
                pathColor: `#00BFFF, ${percentage1 / 70})`,
                textColor: "white",
                trailColor: "gray",
                backgroundColor: "red",
              })}
            />
            ;
          </div>
          <div className="w-25 m-2">
            <CircularProgressbar
              value={percentage2}
              text={percentage2}
              styles={buildStyles({
                rotation: 0.5,
                strokeLinecap: "butt",
                textSize: "17px",
                pathTransitionDuration: 0.5,
                pathColor: `#00BFFF, ${percentage2 / 100})`,
                textColor: "white",
                trailColor: "gray",
                backgroundColor: "",
              })}
            />
            ;
          </div>
          <div className="w-25 m-2">
            <CircularProgressbar
              value={percentage3}
              text={percentage3}
              styles={buildStyles({
                rotation: 0.5,
                strokeLinecap: "butt",
                textSize: "20px",
                pathTransitionDuration: 0.5,
                pathColor: `#00BFFF, ${percentage3 / 100})`,
                textColor: "white",
                trailColor: "gray",
                backgroundColor: "",
              })}
            />
            ;
          </div>
        </div>

        <div>
        <div className="text-white">
              <h3 className="text-color fw-bold">My Stacks</h3>
              <hr />
            </div>
          <div className="d-flex justify-content-center">
            <div className="stack-img">
              <img className="img-fluid rounded" src={js} alt="" />
            </div>
            <div className="stack-img">
              <img className="img-fluid rounded" src={react} alt="" />
            </div>
            <div className="stack-img">
              <img className="img-fluid rounded" src={node} alt="" />
            </div>
            <div className="stack-img">
              <img className="img-fluid rounded" src={express} alt="" />
            </div>
            <div className="stack-img">
              <img className="img-fluid rounded" src={mongodb} alt="" />
            </div>
          </div>
        </div>

        <div>
          <div className="mt-3">
            <div className="text-white">
              <h3 className="text-color fw-bold">Tools</h3>
              <hr />
            </div>
            <div>
              <div className="d-flex justify-content-center pt-3">
                <div className="stack-img">
                  <img className="img-fluid rounded" src={vs} alt="" />
                </div>
                <div className="stack-img">
                  <img className="img-fluid rounded" src={git} alt="" />
                </div>
                <div className="stack-img">
                  <img className="img-fluid rounded" src={firebase} alt="" />
                </div>
                <div className="stack-img">
                  <img className="img-fluid rounded" src={heroku} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
