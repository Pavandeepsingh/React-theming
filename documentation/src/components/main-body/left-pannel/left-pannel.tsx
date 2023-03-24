import React from "react";
import style from "./left-pannel.module.scss";

const componentList = [
  {
    id: 1,
    name: "button",
    active: true,
  },
  {
    id: 2,
    name: "svg icon",
    active: false,
  },
  {
    id: 3,
    name: "checkbox",
    active: false,
  },
  {
    id: 4,
    name: "input",
    active: false,
  }
];

const LeftPannel = (props) => {
  return (
    <>
      <div className={`${style["left-pannel"]}`}>
        <ul>
          {componentList.map((c) => {
            return (
              <li
                key={c.id}
                className={
                  style.pannel_menu + " " + `${c.active ? style.active : ""}`
                }
              >
                {c.name}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default LeftPannel;
