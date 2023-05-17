import React from "react";
import { serviceItem } from "../data";

const Service = ({
  servicesCenter,
  servicesItem,
  servicesIcon,
  servicesInfo,
  servicesText,
}) => {
  return (
    <div className={servicesCenter}>
      {serviceItem.map((item) => {
        const { id, icon, title, text } = item;
        return (
          <div className={servicesItem} key={id}>
            <span
              class={servicesIcon}
              dangerouslySetInnerHTML={{ __html: icon }}
            ></span>
            <div className={servicesInfo}>
              <h4>{title}</h4>
              <p className={servicesText}>{text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Service;
