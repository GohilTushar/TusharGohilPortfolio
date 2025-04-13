import React from "react";
import "./TechStacks.css";
import { FaReact, FaNodeJs,FaAngular } from "react-icons/fa";
import {
  SiHtml5,
  SiCplusplus,
  SiExpress,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiServerless,
  SiAmazons3,
  SiFirebase
} from "react-icons/si";
import { DiCss3, DiMongodb ,DiMysql,DiPostgresql} from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap } from "react-icons/bs";


export const TechStacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">Skills</h2>

        <div className="techsection">
          <div>
            <SiCplusplus />
            <h5>C/C++</h5>
          </div>
          <div>
            <SiHtml5 />
            <h5>HTML</h5>
          </div>
          <div>
            <DiCss3 />
            <h5>CSS</h5>
          </div>
          <div>
            <SiTailwindcss />
            <h5>Tailwind CSS</h5>
          </div>
          <div>
            <BsBootstrap />
            <h5>Bootstrap</h5>
          </div>
          <div>
            <SiJavascript />
            <h5>Javascript</h5>
          </div>
          <div>
            <SiTypescript />
            <h5>Typescript</h5>
          </div>
          <div>
            <FaReact />
            <h5>React</h5>
          </div>
          <div>
            <FaNodeJs />
            <h5>Nodejs</h5>
          </div>
          <div>
            <SiExpress />
            <h5>Express</h5>
          </div>
          <div>
            <DiMongodb />
            <h5>MongoDb</h5>
          </div>
          <div>
            <VscGithub />
            <h5>GitHub</h5>
          </div>
          <div>
            <DiMysql />
            <h5>MySQL</h5>
          </div>
          <div>
            <DiPostgresql />
            <h5>PostgreSQL</h5>
          </div>
          
          <div>
            <SiFirebase />
            <h5>Firebase</h5>
          </div>
          <div>
          <SiNextdotjs />
            <h5>NextJS</h5>
          </div>
          
          <div>
            <SiServerless />
            <h5>ServerLess</h5>
          </div>
          <div>
            <SiAmazons3 />
            <h5>AmazonS3</h5>
          </div>
          
        </div>

      </div>
    </>
  );
};
