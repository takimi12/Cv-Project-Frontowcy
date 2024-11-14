import React from 'react';
import styled from 'styled-components';
import Photo from '../Photo/Photo';
import ContactInfo from '../ContactInfo/ContactInfo';
import Skills from '../Skills/Skills';
import Languages from '../Languages/Languages';
import Experience from '../Experience/Experience';
import Education from '../Education/Education';
import AboutMe from '../AboutMe/AboutMe';
import Profile from '../Personal/Personal';

const ResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: auto;
  font-family: Arial, sans-serif;

`;

const ResumeBody = styled.div`
  display: flex;
  flex-direction: row;
  
`;

const ResumeLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background:#00c4ff2b;
  padding: 20px;
`;

const ResumeRight = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;


export const Resume: React.FC = () => {
  return (
    <ResumeContainer>
      <ResumeBody>
        <ResumeLeft>
        <Photo />
          <ContactInfo />
          <Skills />
          <Languages />
        </ResumeLeft>
        <ResumeRight>
          <Profile />
          <AboutMe/>
          <Experience />
          <Education />
        </ResumeRight>
      </ResumeBody>
    </ResumeContainer>
  );
};
