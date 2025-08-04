
import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Hassan Mahmood. All rights reserved.</p>

      <div className="footer-social-icons">
        <a
          href="https://github.com/hassanmahmoodjafri121"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/hassan-mahmood-70a34123a"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="mailto:jafri3043@gmail.com"
          aria-label="Email"
        >
          <i className="fas fa-envelope"></i>
        </a>
        <a
          href="https://x.com/HassanJ96541"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <i className="fab fa-x-twitter"></i>
        </a>
      </div>
    </footer>
  );
}
