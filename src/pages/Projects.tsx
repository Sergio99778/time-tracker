import React from "react";
import "./Projects.css";

import { ProjectsList } from "../components/ProjectsList";

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "This is project 1",
  },
  {
    id: 2,
    title: "Project 2",
    description: "This is project 2",
  },
  {
    id: 3,
    title: "Project 3",
    description: "This is project 3",
  },
];

const tasks = [
  {
    id: 1,
    title: "Task 1",
    description: "This is task 1",
    projectId: 1,
  },
  {
    id: 2,
    title: "Task 2",
    description: "This is task 2",
    projectId: 1,
  },
  {
    id: 3,
    title: "Task 3",
    description: "This is task 3",
    projectId: 2,
  },
  {
    id: 4,
    title: "Task 4",
    description: "This is task 4",
    projectId: 2,
  },
  {
    id: 5,
    title: "Task 5",
    description: "This is task 5",
    projectId: 3,
  },
  {
    id: 6,
    title: "Task 6",
    description: "This is task 6",
    projectId: 3,
  },
];

export const Projects: React.FC = () => {
  return (
    <div className="projects-container">
      <ProjectsList projects={projects} />
    </div>
  );
};
