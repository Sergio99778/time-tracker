import React from "react";
import "./ProjectsList.css";

interface Project {
  id: number;
  title: string;
  description: string;
}

interface ProjectListProps {
  projects: Project[];
}

export const ProjectsList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <div className="projects-list-container">
      <ul>
        {projects.map((project) => (
          <li key={project.id} className="project-item">
            <h2>{project.title}</h2>
            <button>+</button>
            <button>Erase</button>
            <button>Details</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
