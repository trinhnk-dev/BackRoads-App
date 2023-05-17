import React from "react";
import "../styles/Services.css";
import Service from "./Service";

const Services = () => {
  return (
    <section className="section services" id="services">
      <div className="section-title">
        <h2>
          Our <span>Services</span>
        </h2>
      </div>

      <Service
        servicesCenter="services-center"
        servicesItem="services-item"
        servicesIcon="services-icon"
        servicesInfo="services-info"
        servicesText="services-text"
      />
    </section>
  );
};

export default Services;
