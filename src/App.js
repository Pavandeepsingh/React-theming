import React from "react";
import { useEffect, useRef } from "react";
import "./assets/scss/styles.scss";
import { icons } from "./svg";

// const themes = ["light", "dark"];

const user = {
  theme: "light"
};

const changeTheme = e => {
  // user.theme = e.target.value;
  user.theme = e.target.checked ? 'dark' : 'light';

  document.documentElement.className = "";
  document.documentElement.classList.add(`theme-${user.theme}`);
};

export default function App() {

  const myContainer = useRef(null);

  useEffect(() => {
    myContainer.current.insertAdjacentHTML("beforeend", icons);
  }, []);


  return (
    <>
      <div
        className="svg-container"
        style={{ display: "none" }}
        ref={myContainer}
      ></div>

      {/* <select defaultValue={user.theme} onChange={changeTheme}>
        {themes.map((theme, index) => (
          <option value={theme} key={index}>
            {theme}
          </option>
        ))}
      </select> */}

      <div className="header">
        <div style={{ margin: '10px' }}>
          <input type="checkbox" className="checkbox" id="checkbox" onChange={changeTheme} />
          <label htmlFor="checkbox" className="label">
            <i className="fas fa-moon"></i>
            <i className='fas fa-sun'></i>
            <div className='ball'> </div>
          </label>
        </div>

        <svg className="iconCss">
          <use xlinkHref="#icon_kochlogo"></use>
        </svg>
      </div>

      <div className="container">
        <h1 className="title">Buttons</h1>
      </div>

      <div className="container">
        <h1 className="title">Theming Page</h1>
      </div>

      <div className="container">
        <h1 className="title">Theming Page</h1>
      </div>

      <div className="container">
        <h1 className="title">Theming Page</h1>
      </div>

      <div className="container">
        <h1 className="title">Theming Page</h1>
      </div>

      <div style={{minHeight:"100px"}} > </div>

    </>
  );
}
