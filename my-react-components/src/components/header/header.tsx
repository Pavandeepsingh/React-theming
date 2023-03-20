import React from "react";
import CompanyLogo from "../../assets/svg/koch.svg";
import MenuLogo from "../../assets/svg/menu.svg";

const user = {
  theme: "light",
};

const changeTheme = (e) => {
  user.theme = e.target.checked ? "dark" : "light";
  document.documentElement.className = "";
  document.documentElement.classList.add(`theme-${user.theme}`);
};

const Header = (props) => {
  return (
    <>
      <div className="header flex-centered">
        <div className="flex-centered">
          <img
            src={MenuLogo}
            className="logo box-shadow-button pointer"
            alt="KOCH INDUSTRIES"
          ></img>
          <img
            src={CompanyLogo}
            className="company-logo box-shadow-button pointer"
            alt="KOCH INDUSTRIES"
          ></img>
        </div>

        <div>
          <input
            type="checkbox"
            className="checkbox"
            id="checkbox-theme-toggle"
            onChange={changeTheme}
          />
          <label htmlFor="checkbox-theme-toggle" className="label">
            <i className="fas fa-moon"></i>
            <i className="fas fa-sun"></i>
            <div className="ball"> </div>
          </label>
        </div>
      </div>
    </>
  );
};

export default Header;
