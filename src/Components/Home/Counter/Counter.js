import React, { useState } from "react";
import "./Counter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookAtlas, faUsers, faBuilding} from "@fortawesome/free-solid-svg-icons";

import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Counter = ({ className, ...rest }) => {
  const [viewPortEntered, setViewPortEntered] = useState(false);
  return (
    <section className="">
      <div className="row counter d-flex justify-content-evenly ">
        <div className="counter-div col-md-2 d-flex align-items-center justify-content-center">
          <div className="rounded counter-shadow">
            <div className="text-center">
              <FontAwesomeIcon
                className="text-color Font-size"
                icon={faBookAtlas}
              />
            </div>
            <div className="d-flex justify-content-center">
              <CountUp
                {...rest}
                start={viewPortEntered ? null : 0}
                end={30}
                duration={2}
              >
                {({ countUpRef }) => {
                  return (
                    <div className="d-flex align-items-center">
                      <VisibilitySensor
                        active={!viewPortEntered}
                        onChange={(isVisible) => {
                          if (isVisible) {
                            setViewPortEntered(true);
                          }
                        }}
                        delayedCall
                      >
                        <h1 className="count text-white" ref={countUpRef}></h1>
                      </VisibilitySensor>
                      <h1 className="count text-white">+</h1>
                    </div>
                  );
                }}
              </CountUp>
            </div>
            <div>
              <h2 className="text-color">Projects</h2>
            </div>
          </div>
        </div>
        <div className="counter-div col-md-2 d-flex align-items-center justify-content-center">
          <div className="rounded counter-shadow">
          <div className="text-center">
              <FontAwesomeIcon
                className="text-color Font-size"
                icon={faUsers}
              />
            </div>
            <div className="d-flex justify-content-center">
              <CountUp
                {...rest}
                start={viewPortEntered ? null : 0}
                end={10}
                duration={2}
              >
                {({ countUpRef }) => {
                  return (
                    <div className="d-flex align-items-center">
                      <VisibilitySensor
                        active={!viewPortEntered}
                        onChange={(isVisible) => {
                          if (isVisible) {
                            setViewPortEntered(true);
                          }
                        }}
                        delayedCall
                      >
                        <h1 className="count text-white" ref={countUpRef}></h1>
                      </VisibilitySensor>
                      <h1 className="count text-white">+</h1>
                    </div>
                  );
                }}
              </CountUp>
            </div>
            <div>
              <h2 className="text-color">Clients</h2>
            </div>
          </div>
        </div>
        <div className="counter-div col-md-2 col-sm-12 d-flex align-items-center justify-content-center">
          <div className="rounded counter-shadow">
          <div className="text-center">
              <FontAwesomeIcon
                className="text-color Font-size"
                icon={faBuilding}
              />
            </div>
            <div className="d-flex justify-content-center">
              <CountUp
                {...rest}
                start={viewPortEntered ? null : 0}
                end={3}
                duration={2}
              >
                {({ countUpRef }) => {
                  return (
                    <div className="d-flex align-items-center">
                      <VisibilitySensor
                        active={!viewPortEntered}
                        onChange={(isVisible) => {
                          if (isVisible) {
                            setViewPortEntered(true);
                          }
                        }}
                        delayedCall
                      >
                        <h1 className="count text-white" ref={countUpRef}></h1>
                      </VisibilitySensor>
                      <h1 className="count text-white">+</h1>
                    </div>
                  );
                }}
              </CountUp>
            </div>
            <div>
              <h2 className="text-color">Company</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
