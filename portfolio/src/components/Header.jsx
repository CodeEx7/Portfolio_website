import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  background-color: #333;
  color: #fff;
  padding: 20px;
`;

const Home = styled.div`
  position: absolute;
  left: 20px;
`;

const NavLinks = styled.div`
display: flex;
gap: 10px;
`;

const NavLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  margin-right: 10px;
`;

const Header = () => {
  const [activeOption, setActiveOption] = useState('');

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  return (
    <HeaderContainer>
      <NavLinks>
        <NavLink
          to="/"
          onClick={() => handleOptionClick('home')}
          style={{ fontWeight: activeOption === 'home' ? 'bold' : 'normal' }}
        >
          Hello Brij! 
        </NavLink>
        <NavLink
          to="/about"
          onClick={() => handleOptionClick('about')}
          style={{ fontWeight: activeOption === 'about' ? 'bold' : 'normal' }}
        >
          ABOUT
        </NavLink>
        <NavLink
          to="/projects"
          onClick={() => handleOptionClick('projects')}
          style={{ fontWeight: activeOption === 'projects' ? 'bold' : 'normal' }}
        >
          PROJECTS
        </NavLink>
        <NavLink
          to="/contact"
          onClick={() => handleOptionClick('contact')}
          style={{ fontWeight: activeOption === 'contact' ? 'bold' : 'normal' }}
        >
          LET's TALK
        </NavLink>
      </NavLinks>
    </HeaderContainer>
  );
};

export default Header;
