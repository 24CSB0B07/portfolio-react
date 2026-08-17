import React from 'react';
import Skills from '../components/Skills';

export default function About() {
  const coreSkills = [
    'Backend Development',
    'Database Design (DBMS)',
    'MERN Stack (MongoDB, Express, React, Node)',
    'DSA (C++)',
    'OOPS (Java)',
    'Operating Systems',
    'Database Systems',
    'REST API Design',
    'Git & Deployment Workflows'
  ];

  return (
    <section className="about-section" id="about">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              Hi there! I'm a B.Tech Computer Science student at NIT Warangal (batch 2024–2028). I enjoy
              building full stack projects and going deep on backend development and database design.
            </p>
            <p>
              I'm an active programmer solving LeetCode problems, and I like exploring systems level
              topics like operating systems, DBMS, and compilers alongside my project work.
            </p>
          </div>
          <Skills skills={coreSkills} />
        </div>
      </div>
    </section>
  );
}
