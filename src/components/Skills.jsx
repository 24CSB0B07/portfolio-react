import React from 'react';

export default function Skills({ skills }) {
  return (
    <div className="about-skills">
      <h3>My Core Skills</h3>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
