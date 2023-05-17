import React from "react";
import { tourItemTop, toursItemBottom } from "../data";

const Tour = ({
  sectionClass,
  sectionTitle,
  toursCenterTop,
  toursCenterBottom,
  toursCard,
  cardImg,
  toursContent,
  toursTitle,
  toursFooter,
}) => {
  return (
    <section className={sectionClass} id="tours">
      <div className={sectionTitle}>
        <h2>
          Featured <span>Tours</span>
        </h2>
      </div>
      <div className={toursCenterTop}>
        {tourItemTop.map((item) => {
          const { id, img, date, title, text, icon, nation, day, price } = item;
          return (
            <div className={toursCard} key={id}>
              <div className={cardImg}>
                <img src={img} alt="" />
                <p>{date}</p>
              </div>

              <div className={toursContent}>
                <div className={toursTitle}>
                  <h4>{title}</h4>
                </div>
                <p>{text}</p>
                <div className={toursFooter}>
                  <p>
                    <span dangerouslySetInnerHTML={{ __html: icon }}></span>
                    {nation}
                  </p>
                  <p>{day}</p>
                  <p>{price}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={toursCenterBottom}>
        {toursItemBottom.map((item) => {
          const { id, img, date, title, text, icon, nation, day, price } = item;
          return (
            <div className={toursCard} key={id}>
              <div className={cardImg}>
                <img src={img} alt="" />
                <p>{date}</p>
              </div>

              <div className={toursContent}>
                <div className={toursTitle}>
                  <h4>{title}</h4>
                </div>
                <p>{text}</p>
                <div className={toursFooter}>
                  <p>
                    <span dangerouslySetInnerHTML={{ __html: icon }}></span>
                    {nation}
                  </p>
                  <p>{day}</p>
                  <p>{price}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Tour;
