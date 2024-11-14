import React from 'react';
import styled from 'styled-components';

const EducationSection = styled.section`
  margin-bottom: 20px;
  margin-left: 20px;
`;

const EducationEntry = styled.div`
  margin-bottom: 15px;
`;

const Level = styled.strong`
  font-size: 1em;
  color: #333;
`;

const Details = styled.p`
  font-size: 0.9em;
  color: #555;
`;

interface EducationItem {
  level: string;
  field: string;
  institution: string;
  date: string;
}

const educations: EducationItem[] = [
  {
    level: 'Podyplomowe',
    field: 'Lorem Ipsum & Dolor Sit',
    institution: 'Lorem University - Lublin',
    date: '10/2019 - 06/2020'
  },
  {
    level: 'Licencjat',
    field: 'Amet E-commerce and Lorem Media',
    institution: 'Dolor University - Częstochowa',
    date: '10/2015 - 06/2018'
  }
];

const Education: React.FC = () => (
  <EducationSection>
    <h3>Wykształcenie</h3>
    {educations.map((edu, index) => (
      <EducationEntry key={index}>
        <Level>{edu.level}</Level>: {edu.field}
        <Details>{edu.institution} - {edu.date}</Details>
      </EducationEntry>
    ))}
  </EducationSection>
);

export default Education;
