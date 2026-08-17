import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProjectCard({ id, title, description, category, image, techStack, githubLink }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDetails = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <article className="project-card">
      <div className="project-image-wrapper">
        <img src={image} alt={`Screenshot of the ${title} interface`} className="project-img" />
      </div>
      <div className="project-info">
        <span className="project-category">{category}</span>
        <h3>{title}</h3>
        
        <p className={`project-description ${isExpanded ? 'expanded' : ''}`}>
          {isExpanded ? description : `${description.slice(0, 85)}...`}
        </p>

        <button 
          type="button"
          onClick={toggleDetails} 
          className="btn-details-toggle"
          aria-expanded={isExpanded}
        >
          {isExpanded ? 'Show Less' : 'View Details'}
        </button>

        <div className="project-tags">
          {techStack.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>

        <div className="project-links">
          <a 
            href={githubLink} 
            className="project-link" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label={`View source code of ${title}`}
          >
            Source Code
          </a>
          <Link to={`/projects/${id}`} className="project-link detail-link">
            Full Info &rarr;
          </Link>
        </div>
      </div>
    </article>
  );
}
