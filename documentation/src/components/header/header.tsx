import React from "react";
import style from "./header.module.scss";
import CompanyLogo from "../../assets/svg/koch.svg";
import MenuLogo from "../../assets/svg/menu.svg";

const Header = (props) => {

  const togglePannel = () => {
       props.toggleButtonVisibility();
  };

  return (
    <>
      <header className={style.header + " " + style["flex-centered"]}>
        <div className={style["flex-centered"]}>
          <img
            onClick={togglePannel}
            src={MenuLogo}
            className={style["menu-icon"]}
            alt="KOCH INDUSTRIES"
          ></img>
        </div>
        <div className={style["title__heading"]}>Koch's Style Guide</div>
        <div>
          <img
            src={CompanyLogo}
            className={style["company-icon"]}
            alt="KOCH INDUSTRIES"
          ></img>
        </div>
      </header>
    </>
  );
};

export default Header;
