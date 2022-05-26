import React, { useEffect } from "react";
import "./ServiceCard.css";
import AOS from "aos";
import "aos/dist/aos.css";

const ServiceCard = ({ service }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="fade-up" className="service-card rounded px-2">
      <div className="bg-white">
        <img className="project-img rounded" src={service.image} alt="" />
      </div>
      <h2 className="text-color text-center fw-bold mt-2">{service.name}</h2>
      <div className="txt-justify txt-secondary">
        <p>{service.description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
