import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <section className="project-detail-section">
        <div className="section-container text-center" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Project Not Found</h2>
          <p className="section-subtitle">We couldn't find a project matching "{projectId}".</p>
          <Link to="/projects" className="btn btn-primary">Back to Projects</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="project-detail-section">
      <div className="section-container">
        <div style={{ marginBottom: '24px' }}>
          <Link to="/projects" className="project-link">&larr; Back to Projects</Link>
        </div>
        
        <div className="project-detail-grid">
          <div className="project-detail-image-wrapper">
            <img 
              src={project.image} 
              alt={`Detailed view of ${project.title}`} 
              className="project-detail-img" 
            />
          </div>
          
          <div className="project-detail-info">
            <span className="project-category">{project.category}</span>
            <h1 className="section-title" style={{ display: 'block', marginTop: '8px', marginBottom: '16px' }}>
              {project.title}
            </h1>
            
            <p className="project-detail-description" style={{ marginBottom: '24px', fontSize: '1.1rem', color: 'var(--text-muted)' }}>
              {project.description}
            </p>
            
            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ marginBottom: '12px' }}>Technologies Used</h3>
              <div className="project-tags">
                {project.techStack.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>
            </div>

            <div className="project-detail-actions">
              <a 
                href={project.githubLink} 
                className="btn btn-primary" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ display: 'inline-block' }}
              >
                View Source Code on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
