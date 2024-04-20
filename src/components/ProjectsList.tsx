import React from "react";

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
    <div>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
