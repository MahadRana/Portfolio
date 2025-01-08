import React from "react";
import "./Skills.css";
import { FaPython, FaJava, FaJsSquare, FaReact, FaDocker, FaGitAlt, FaAws } from "react-icons/fa";
import { SiCplusplus, SiMysql, SiMongodb, SiTensorflow, SiPytorch, SiDotnet, SiLinux, SiOpencv, SiExpress } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";

export const Skills = () => {
  return (
    <div className="skills-container" id="skills">
        <h2 className="skills-header">Skills</h2>
        <div className="skills" id="skills">
      <div className="skills-grid">
        <div className="skill-card"><FaPython className="skill-icon" /></div>
        <div className="skill-card"><FaJava className="skill-icon" /></div>
        <div className="skill-card"><SiCplusplus className="skill-icon" /></div>
        <div className="skill-card"><FaJsSquare className="skill-icon" /></div>
        <div className="skill-card"><SiMysql className="skill-icon" /></div>
        <div className="skill-card"><TbBrandCSharp className="skill-icon" /></div>
        <div className="skill-card"><FaReact className="skill-icon" /></div>
        <div className="skill-card"><SiExpress className="skill-icon" /></div>
        <div className="skill-card"><SiTensorflow className="skill-icon" /></div>
        <div className="skill-card"><SiPytorch className="skill-icon" /></div>
        <div className="skill-card"><SiDotnet className="skill-icon" /></div>
        <div className="skill-card"><SiOpencv className="skill-icon" /></div>
        <div className="skill-card"><FaGitAlt className="skill-icon" /></div>
        <div className="skill-card"><FaDocker className="skill-icon" /></div>
        <div className="skill-card"><FaAws className="skill-icon" /></div>
        <div className="skill-card"><SiMongodb className="skill-icon" /></div>
        <div className="skill-card"><SiLinux className="skill-icon" /></div>
        <div className="skill-card"><DiVisualstudio className="skill-icon" /></div>
      </div>
    </div>
    </div>

  );
};
