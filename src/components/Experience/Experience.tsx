import React from 'react';
import styled from 'styled-components';

const ExperienceSection = styled.section`
  margin-bottom: 20px;
  margin-left: 20px;
`;

const Job = styled.div`
  margin-bottom: 15px;
`;

const JobTitle = styled.h4`
  font-size: 1em;
  color: #333;
`;

const Company = styled.strong`
  font-size: 0.9em;
  color: #555;
`;

const JobDetails = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  color: #555;
`;

interface ExperienceItem {
  date: string;
  company: string;
  details: string[];
}

const experiences: ExperienceItem[] = [
  {
    date: '10/2019 - 01/2023',
    company: 'Lorem Ipsum - Lublin',
    details: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Nullam euismod sapien non magna cursus, a vestibulum orci sollicitudin.',
      'Curabitur at ante vehicula, ullamcorper justo non, placerat metus.',
      'Vestibulum viverra dolor in lorem tristique, non pharetra magna tempor.'
    ]
  },
  {
    date: '06/2020 - 05/2022',
    company: 'Dolor Sit - Lublin/Częstochowa',
    details: [
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      'Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.'
    ]
  }
];

const Experience: React.FC = () => (
  <ExperienceSection>
    <h3>Doświadczenie</h3>
    {experiences.map((exp, index) => (
      <Job key={index}>
        <JobTitle>{exp.date}</JobTitle>
        <Company>{exp.company}</Company>
        <JobDetails>
          {exp.details.map((detail, i) => <li key={i}>{detail}</li>)}
        </JobDetails>
      </Job>
    ))}
  </ExperienceSection>
);

export default Experience;
