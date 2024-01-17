import React from "react";
import "./About.css";
import { Type } from "./Type";
// import GitHubIcon from "@material-ui/icons/GitHub";
import { BsGithub } from "react-icons/bs";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { SiLinkedin } from "react-icons/si";
// import EmailIcon from "@material-ui/icons/Email";
import { MdOutlineMailOutline } from "react-icons/md";
// import PhoneIcon from "@material-ui/icons/Phone";
import { FaPhone } from "react-icons/fa";
import { Intro } from "./Intro";
import { Timeline } from "./Timeline";
import { TechStacks } from "./TechStacks";
export const About = () => {
  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right" className="mobileHead">
          Hello, I am <span className="about__name">Tushar Gohil</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
          In the early stage of my career in Software Development and actively
          learning and gaining proficiency in both frontend and backend
          technologies. not be expert in all areas of Full-Stack Development but
          continously building skills and gradually expanding proficiency in
          various technologies and tools. An Enthusiastic , Curious and
          Passionate Full Stack Developer to grow within the dynamic field of
          web development.
        </p>
        <div className="about__contact center">
          <a
            href="https://github.com/GohilTushar"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <BsGithub />
            {/* <GitHubIcon /> */}
          </a>
          <a
            href="mailto:gohiltushar3012@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="mail"
            className="link link--icon"
          >
            <MdOutlineMailOutline />
            {/* <EmailIcon /> */}
          </a>
          <a
            href="tel:+919879421538"
            target="_blank"
            rel="noreferrer"
            aria-label="phone"
            className="link link--icon"
          >
            <FaPhone />
            {/* <PhoneIcon /> */}
          </a>
          <a
            href="https://www.linkedin.com/in/tushar-gohil-71540b234/"
            aria-label="linkedin"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <SiLinkedin />
            {/* <LinkedInIcon /> */}
          </a>
        </div>

        <button
          className="btnResume"
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1O7O6dgBNriadNFoYRj8kHr6-dyPyoG4n/view?usp=sharing",
            );
          }}
        >
          Resume
        </button>
      </div>
      <Intro />
      <Timeline />
      <section id="#skills">
        <TechStacks />
      </section>
    </>
  );
};
