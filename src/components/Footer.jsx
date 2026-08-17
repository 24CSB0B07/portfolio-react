import React from 'react';

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-name">Portfolio</p>
        <div className="footer-links">
          <a href="#" onClick={scrollToTop}>Back to Top</a>
        </div>
      </div>
    </footer>
  );
}
