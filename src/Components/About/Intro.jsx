import React from "react";
import "./Intro.css";
// import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { MdOutlineExitToApp } from "react-icons/md";
import { ThemeContext } from "../../Context/Theme";
import profilePic from "../../Assets/200280107113.jpg";


export const Intro = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Image" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hola Everyone, My name is{" "}
                <span className="different">Tushar Gohil </span> and I am from{" "}
                <span className="different">
                  Surat, Gujarat (India)
                </span>
                . I have completed my graduation in BTech (Computer Engineering)
                from{" "}
                <span className="different">
                  LalBhai DalpatBhai Collage Of Engineering (LDCE)
                </span>
                .
              </h4>
              <h4>Terms That can describe me apart form Coding :</h4>
              <h4 className="different">
                <span className="icons">
                  <MdOutlineExitToApp />
                </span>
                 Pantheist{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <MdOutlineExitToApp />
                </span>
                Chess Enthusiast{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <MdOutlineExitToApp />
                </span>
                Poet{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <MdOutlineExitToApp />
                </span>
                Pacifist{" "}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};