import React from "react";
import "./ProjectsList.css";

import { WarningButton } from "./WarningButton";
import { PositiveButton } from "./PositiveButton";
import { NeutralButton } from "./NeutralButton";

interface Project {
  id: number;
  title: string;
  description: string;
}

interface ProjectListProps {
  projects: Project[];
}

const onWarningClick = () => {
  console.log("Bye");
};

const onPositiveClick = () => {
  console.log("Hello");
};

const onNeutralClick = () => {
  console.log("Search");
};

export const ProjectsList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <div className="projects-list-container">
      <ul className="projects-list">
        {projects.map((project) => (
          <li key={project.id} className="project-item">
            <h2>{project.title}</h2>
            <div className="projects-buttons-container">
              <PositiveButton label="+" onClick={onPositiveClick} />
              <WarningButton label="🗑️" onClick={onWarningClick} />
              <NeutralButton label="🔍" onClick={onNeutralClick} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
