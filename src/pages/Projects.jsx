import React from 'react';
import { projects } from '../data/projects';
import ProjectsGrid from '../components/ProjectsGrid';

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">A collection of systems and applications I have developed</p>
        <ProjectsGrid projectsList={projects} />
      </div>
    </section>
  );
}
