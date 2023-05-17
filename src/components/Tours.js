import React from "react";
import "../styles/Tours.css";
import Tour from "./Tour";

const Tours = () => {
  return (
    <Tour
      sectionClass="section"
      sectionTitle="section-title"
      toursCenterTop="tours-center-top"
      toursCenterBottom="tours-center-bottom"
      toursCard="tours-card"
      cardImg="card-img"
      toursContent="tours-content"
      toursTitle="tours-title"
      toursFooter="tours-footer"
    />
  );
};

export default Tours;
