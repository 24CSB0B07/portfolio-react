import React, { useState } from 'react';    
import { Link } from 'react-router-dom';

export default function ProjectCard({ id, title, description, category, image}) {

  return (
    <article className="project-card">
      <div className="project-image-wrapper">
        <img src={image} alt={`Screenshot of the ${title} interface`} className="project-img" />
      </div>
      <div className="project-info">
        <span className="project-category">{category}</span>
        <h3>{title}</h3>

        <p className={`project-description`}>
          {`${description.slice(0, 85)}...`}
        </p>

        <div className="project-links">
          <Link to={`/projects/${id}`} className="project-link detail-link">
            Full Info &rarr;
          </Link>
        </div>
      </div>
    </article>
  );
}
