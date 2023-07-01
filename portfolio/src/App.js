import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const AppContainer = styled.div`
  background-color: #f2f2f2;
  color: #333333;
  padding: 20px;
`;

const ContentContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Heading = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const SubHeading = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  margin-bottom: 10px;
`;

const App = () => {
  return (
    <Router>
      <AppContainer>
        <Header />
        <ContentContainer>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </ContentContainer>
      </AppContainer>
    </Router>
  );
};

export default App;
