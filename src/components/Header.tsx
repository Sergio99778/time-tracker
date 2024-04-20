import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

export const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>Time-Tracker-Project</h1>
      <ul className="header-list">
        <Link to="/projects">Projects</Link>
        <Link to="/track-time">Track time</Link>
      </ul>
    </header>
  );
};
