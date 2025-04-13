import React from "react";
import "./Project.css";
import ExpenseTracker from "../../Assets/ExpenseTracker.png";
import NetflixGPT from "../../Assets/netflix-gpt.png";
import LMS from "../../Assets/LMS.png";
import IG from "../../Assets/IG.png";
import {
  SiHtml5,
  SiExpress,
  SiNodedotjs,
  SiReact,
  SiMysql,
  SiTailwindcss,
  SiFirebase,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
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
                  <img src={NetflixGPT} alt="Netflix-GPT" />
                </div>
              </div>
              <div className="project_information">
                <h2>NetflixGPT </h2>
                <p>
                  This is a Netflix clone project with a GPT search feature that
                  allows users to provide prompts, and the application will
                  return a list of movies based on the input prompt.
                </p>
                <div>
                  <SiReact />
                  <SiTailwindcss />
                  <SiFirebase />
                </div>
                <div>
                  <a
                    href="https://netflix-gpt-three-liart.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/GohilTushar/NetflixGPT"
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
                  <img src={IG} alt="Invoice Generator" />
                </div>
              </div>
              <div className="project_information">
                <h2>Invoice Generator</h2>
                <p>
                  Allowing users to create, manage, and track invoices with CRUD
                  operations. Integrated pagination, search, filtering, and
                  sorting features for efficient invoice management
                </p>
                <div>
                  <SiMysql />
                  <SiExpress />
                  <SiReact />
                  <SiNodedotjs />
                </div>
                <div>
                  <a
                    href="https://github.com/GohilTushar/Invoice-Generator"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/GohilTushar/Invoice-Generator"
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
                  <img src={LMS} alt="Leave Management Syatem" />
                </div>
              </div>
              <div className="project_information">
                <h2>LMS</h2>
                <p>
                  a MERN-based Leave Management System (LMS) with employee leave
                  requests, approvals, and real-time tracking, streamlining the
                  leave process with automated notifications
                </p>
                <div>
                  <SiMysql />
                  <SiExpress />
                  <SiReact />
                  <SiNodedotjs />
                </div>
                <div>
                  <a
                    href="https://github.com/GohilTushar/LMS"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/GohilTushar/LMS"
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
                  <img src={ExpenseTracker} alt="Expense Tracker" />
                </div>
              </div>
              <div className="project_information">
                <h2>Expense Tracker </h2>
                <p>
                  It provides a systematic way to record, categorize, and
                  analyze expenses, allowing users to gain insights into their
                  financial habits, make informed decisions, and create
                  effective budgets.
                </p>
                <div>
                  <SiHtml5 />
                  <DiCss3 />
                  <IoLogoJavascript />
                  <SiReact />
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
        </div>
      </div>
    </>
  );
};
