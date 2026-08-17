import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="not-found-section" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '70vh', textAlign: 'center' }}>
      <div className="section-container">
        <h1 style={{ fontSize: '6rem', color: 'var(--primary)', marginBottom: '16px' }}>404</h1>
        <h2 style={{ fontSize: '2rem', marginBottom: '16px' }}>Page Not Found</h2>
        <p className="section-subtitle" style={{ fontSize: '1.1rem', marginBottom: '32px' }}>
          The page you are looking for does not exist or has been moved.
        </p>
        <Link to="/" className="btn btn-primary">Go Back Home</Link>
      </div>
    </section>
  );
}
