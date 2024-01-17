import React from "react";
import "./Footer.css";
import { ThemeContext } from "../../Context/Theme";

export const Footer = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <div className={"section " + themename}>
        <a href="/" rel="noreferrer" target="_blank">
          <div className="footerBox">
            <h3 className="footer">
              Made with{" "}
              <span style={{ color:`antiquewhite`}}>🤍</span>{" "}
              By Tushar
            </h3>
          </div>
        </a>
      </div>
    </>
  );
};