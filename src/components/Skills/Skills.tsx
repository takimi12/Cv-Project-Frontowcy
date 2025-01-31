import React from 'react';
import styled from 'styled-components';

const SkillsSection = styled.section`
  margin-bottom: 20px;
`;

const SkillsList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const SkillItem = styled.li`
  margin-bottom: 5px;
  font-size: 0.9em;
  color: #555;
`;

const skills = [
  'React', 'NextJS', 'JavaScript', 'WordPress', 'ACF', 'Figma',
  'Typescript', 'Git', 'CSS/SCSS', 'REST', 'GraphQL', 'RWD'
];

const Skills: React.FC = () => (
  <SkillsSection>
    <h3>Skills</h3>
    <SkillsList>
      {skills.map(skill => <SkillItem key={skill}>{skill}</SkillItem>)}
    </SkillsList>
  </SkillsSection>
);

export default Skills;
