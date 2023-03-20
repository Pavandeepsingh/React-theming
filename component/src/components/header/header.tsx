import React, { useEffect, useRef, useState } from "react";
import CompanyLogo from '../../assets/svg/koch.svg';

const user = {
  theme: "light",
};

const changeTheme = (e) => {
  // user.theme = e.target.value;
  user.theme = e.target.checked ? "dark" : "light";

  document.documentElement.className = "";
  document.documentElement.classList.add(`theme-${user.theme}`);
};

const Header = (props) => {
  return (
    <>
      <div className="header">
        <div>
          <input
            type="checkbox"
            className="checkbox"
            id="checkbox"
            onChange={changeTheme}
          />
          <label htmlFor="checkbox" className="label">
            <i className="fas fa-moon"></i>
            <i className="fas fa-sun"></i>
            <div className="ball"> </div>
          </label>
        </div>

        
        <img
          src={CompanyLogo}
          className="iconCss"
          alt="KOCH INDUSTRIES"
        ></img>
      </div>
    </>
  );
};

export default Header;
