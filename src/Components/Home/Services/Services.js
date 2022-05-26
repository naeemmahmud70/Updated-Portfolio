import React from "react";
import "./Services.css";
import responsive from "../../../images/responsive-icon.png";
import frontend from "../../../images/frontend.png";
import mern from "../../../images/mern.png";
import ServiceCard from "./ServiceCard/ServiceCard";

const Services = () => {
  const services = [
    {
      id: 1,
      name: "Responsive Design",
      description:
        "I translate designs and wireframes into high-quality code from figma. I build reusable components make responsive and Optimizing components for maximum performance across a vast array of web-capable devices and browsers.",
      image: responsive,
    },
    {
      id: 2,
      name: "Frontend Development",
      description:
        "Building state-of-the-art, easy-to-use, user-friendly websites is truly a passion of mine. I build mazing UI design, responsive and interactive websites, API integration, routing, user authentication and integrate payment gateway.",
      image: frontend,
    },
    {
      id: 3,
      name: "Full Stack",
      description:
        "I build Rest APIs, secured APIs with JWT token, and smoother crud operation using MERN. I can build complete web application with authentication, dynamic products, blogs, reviews, and dashboard for user and admin.",
      image: mern,
    },
  ];
  return (
    <div className="row">
      <div className="d-flex justify-content-center">
        <div className="text-center ">
          <h2 className="text-color fw-bold">MY SERVICES</h2>
          <span className="animate-border"></span>
        </div>
      </div>

      <div className="d-flex justify-content-center flex-wrap mt-5">
        {services.map((service) => (
          <ServiceCard service={service} key={service.id}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
