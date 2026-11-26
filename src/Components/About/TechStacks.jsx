import React from "react";
import "./TechStacks.css";
import { FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import {
  SiHtml5,
  SiCplusplus,
  SiExpress,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiRedux,
  SiReactquery,
  SiPrisma,
  SiSequelize,
  SiMongoose,
  SiDocker,
  SiApachekafka,
  SiRabbitmq,
  SiGit,
  SiGitlab,
  SiGrafana,
  SiPrometheus,
  SiLinux,
} from "react-icons/si";
import { DiCss3, DiMongodb, DiMysql, DiPostgresql } from "react-icons/di";
import { VscGithub } from "react-icons/vsc";

// Ordered so related tools sit next to each other.
const skills = [
  // Languages
  { icon: SiCplusplus, name: "C/C++" },
  { icon: SiJavascript, name: "Javascript" },
  { icon: SiTypescript, name: "Typescript" },
  // Frontend
  { icon: SiHtml5, name: "HTML" },
  { icon: DiCss3, name: "CSS" },
  { icon: SiTailwindcss, name: "Tailwind CSS" },
  { icon: FaReact, name: "React" },
  { icon: SiNextdotjs, name: "NextJS" },
  { icon: SiRedux, name: "Redux Toolkit" },
  { icon: SiReactquery, name: "TanStack Query" },
  // Backend & messaging
  { icon: FaNodeJs, name: "Nodejs" },
  { icon: SiExpress, name: "Express" },
  { icon: SiApachekafka, name: "Kafka" },
  { icon: SiRabbitmq, name: "RabbitMQ" },
  // Databases
  { icon: DiMongodb, name: "MongoDB" },
  { icon: DiMysql, name: "MySQL" },
  { icon: DiPostgresql, name: "PostgreSQL" },
  // ORM / ODM
  { icon: SiMongoose, name: "Mongoose" },
  { icon: SiSequelize, name: "Sequelize" },
  { icon: SiPrisma, name: "Prisma" },
  // Cloud, DevOps & monitoring
  { icon: SiDocker, name: "Docker" },
  { icon: FaAws, name: "AWS" },
  { icon: SiLinux, name: "Linux / SSH" },
  { icon: SiPrometheus, name: "Prometheus" },
  { icon: SiGrafana, name: "Grafana" },
  // Version control
  { icon: SiGit, name: "Git" },
  { icon: VscGithub, name: "GitHub" },
  { icon: SiGitlab, name: "GitLab" },
];

export const TechStacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">Skills</h2>

        <div className="techsection">
          {skills.map(({ icon: Icon, name }) => (
            <div key={name}>
              <Icon />
              <h5>{name}</h5>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
