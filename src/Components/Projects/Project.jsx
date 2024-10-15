import React from "react";
import "./Project.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import ExpenseTracker from "../../Assets/ExpenseTracker.png";
import PassWordGenerator from "../../Assets/PassWordGenerator.png";
import EyeMover from "../../Assets/EyeMover.png";
import Restaurant from "../../Assets/Restaurant.png";
import {
  SiHtml5,
  SiExpress,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
export const Project = () => {
  return (
    <>
      <div className="section main">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={ExpenseTracker}
                    alt="Expense Tracker"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Expense Tracker </h2>
                <p>
                  It provides a systematic way to record, categorize, and analyze expenses, allowing users to gain insights into their financial habits, make informed decisions, and create effective budgets. 
                </p>
                <div>
                  <SiHtml5/>
                  <DiCss3/>
                  <IoLogoJavascript/>
                  <FaReact />
                </div>
                <div>
                  <a
                    href="https://expense-tracker-flax-nine.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/GohilTushar/ExpenseTracker"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={PassWordGenerator}
                    alt="Paasword Generator"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Password Generator </h2>
                <p>
                  It Is Difficult to Think About Strong Password For Security Purpose But With The Help Of This Interface Anyone Can Easily Generate Password Of Any Length And Combination Of Any Character
                </p>
                <div>
                  <SiHtml5/>
                  <DiCss3/>
                  <IoLogoJavascript/>
                  <FaReact />
                </div>
                <div>
                  <a
                    href="https://gohiltushar.github.io/PasswordGenerator/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/GohilTushar/PasswordGenerator"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={EyeMover}
                    alt="Eye Mover"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>EyeMover</h2>
                <p>
                  With The Movement Of Cursor Or Mouse Pointer Pupils Of Animated Eye Also Move and Basic Use Of ClientX And ClientY
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://gohiltushar.github.io/EyeMover/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/GohilTushar/EyeMover"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={Restaurant}
                    alt="PulsePlus-Clone"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Restaurant Menu</h2>
                <p>
                  This is The Dynamic Content Filter project that allows users to dynamically filter and display content based on specified criteria. 

                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://gohiltushar.github.io/Restaurant/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/GohilTushar/Restaurant"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};