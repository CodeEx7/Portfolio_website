import React from 'react';
import {github, gmail, linkedin, leetcode} from "../assets"

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="social-links" style={{ display: 'flex' }}>
          <a href="https://www.linkedin.com/in/maurya-brij/" target="_blank" style={{ marginRight: '10px' }}>
            <img src={linkedin} alt="LinkedIn"  className="logo"/>
          </a>
          <a href="https://github.com/CodeEx7" target="_blank" style={{ marginRight: '10px' }}>
            <img src={github} alt="Github"  className="logo"/>
          </a>
          <a href="mailto:brijbhushan9083@gmail.com" target="_blank" style={{ marginRight: '10px' }}>
            <img src={gmail} alt="Gmail"  className="logo"/>
          </a>
          <a href="https://leetcode.com/CodeEx7/" target="_blank" style={{ marginRight: '10px' }}>
            <img src={leetcode} alt="LeetCode"  className="logo"/>
          </a>
        </div>
      </div>
      <div className="copyright" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {new Date().getFullYear()} | Brij Maurya.
        </div>
    </footer>
  );
};

export default Footer;
