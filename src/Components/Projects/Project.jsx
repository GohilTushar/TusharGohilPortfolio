import React from "react";
import "./Project.css";
import Stackboard from "../../Assets/Stackboard.jpg";
import TeamSync from "../../Assets/TeamSync.jpg";
import NetflixGPT from "../../Assets/netflix-gpt.png";
import LMS from "../../Assets/LMS.png";
import {
  SiExpress,
  SiNodedotjs,
  SiReact,
  SiMysql,
  SiTailwindcss,
  SiFirebase,
  SiNextdotjs,
  SiGoogle,
  SiPrisma,
  SiPostgresql,
  SiTypescript,
  SiMongodb,
  SiRedux,
} from "react-icons/si";
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
                  <img src={Stackboard} alt="Stackboard" />
                </div>
              </div>
              <div className="project_information">
                <h2>Stackboard</h2>
                <p>
                  AI-powered, real-time collaborative system design canvas. Describe an architecture in plain English and a Gemini agent draws it live for every collaborator, with live cursors, presence and one-click Markdown spec export.
                </p>
                <div>
                  <SiNextdotjs/>
                  <SiGoogle/>
                  <SiPrisma/>
                  <SiPostgresql/>
                  <SiTypescript/>
                </div>
                <div>
                  <a
                    href="https://stackboard-mu.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/GohilTushar/StackBoard"
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
                  <img src={TeamSync} alt="TeamSync" />
                </div>
              </div>
              <div className="project_information">
                <h2>TeamSync</h2>
                <p>
                  Multi-tenant B2B project management SaaS with workspace isolation, Google OAuth, role-based access (Owner/Admin/Member), task tracking with filters, and Mongoose transactions for data integrity.
                </p>
                <div>
                  <SiMongodb/>
                  <SiExpress/>
                  <SiReact/>
                  <SiNodedotjs/>
                  <SiRedux/>
                </div>
                <div>
                  <a
                    href="https://github.com/GohilTushar/Team-Management"
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
        </div>
      </div>
    </>
  );
};
