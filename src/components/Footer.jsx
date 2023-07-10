import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="https://www.linkedin.com/your-profile-link" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="footer-icon" />
        </a>
        <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
          <FaGithub className="footer-icon" />
        </a>
        <a href="https://leetcode.com/your-username" target="_blank" rel="noopener noreferrer">
          <SiLeetcode className="footer-icon" />
        </a>
      </div>
      <div className="footer-text">
        <p>Copyright &copy; {new Date().getFullYear()} Brij</p>
      </div>
    </footer>
  );
};

export default SectionWrapper(Footer, "");
