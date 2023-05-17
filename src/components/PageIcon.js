import React from "react";
import { pageIcon } from "../data";

const PageIcon = ({ parentClass, itemClass }) => {
  return (
    <div className={parentClass}>
      {pageIcon.map((link) => {
        const { id, href, icon } = link;
        return (
          <li key={id}>
            <a href={href} target="_blank" className={itemClass}>
              <span dangerouslySetInnerHTML={{ __html: icon }}></span>
            </a>
          </li>
        );
      })}
    </div>
  );
};

export default PageIcon;
