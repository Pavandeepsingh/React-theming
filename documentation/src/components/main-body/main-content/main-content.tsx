import React from "react";
import style from "./main-content.module.scss";
import ArrowIcon from "../../../assets/svg/arrow.svg";
import CodeEditor from "../../code-editor/code-editor";

const MainContent = (props) => {
  return (
    <>
      <div className={style["main-content"]}>
        <CodeEditor />

        <div className={style["main_container"]}>
          <img src={ArrowIcon} className={style["arrow-icon"]} alt=""></img>
        </div>
        <div className={style["main_container"]}>
          <img src={ArrowIcon} className={style["arrow-icon"]} alt=""></img>
        </div>
        <div className={style["main_container"]}>
          <img src={ArrowIcon} className={style["arrow-icon"]} alt=""></img>
        </div>
        <div className={style["main_container"]}>
          <img src={ArrowIcon} className={style["arrow-icon"]} alt=""></img>
        </div>
        <div className={style["main_container"]}>
          <img src={ArrowIcon} className={style["arrow-icon"]} alt=""></img>
        </div>
        <div className={style["main_container"]}>
          <img src={ArrowIcon} className={style["arrow-icon"]} alt=""></img>
        </div>
        <div className={style["main_container"]}>
          <img src={ArrowIcon} className={style["arrow-icon"]} alt=""></img>
        </div>
        <div className={style["main_container"]}>
          <img src={ArrowIcon} className={style["arrow-icon"]} alt=""></img>
        </div>
      </div>
    </>
  );
};

export default MainContent;
