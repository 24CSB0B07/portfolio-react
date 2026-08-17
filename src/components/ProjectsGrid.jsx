import React from 'react';
import ProjectCard from './ProjectCard';

export default function ProjectsGrid({ projectsList }) {
  return (
    <div className="projects-grid">
      {projectsList.map((project) => (
        <ProjectCard
          key={project.id}
          id={project.id}
          title={project.title}
          category={project.category}
          description={project.description}
          image={project.image}
          techStack={project.techStack}
          githubLink={project.githubLink}
        />
      ))}
    </div>
  );
}
