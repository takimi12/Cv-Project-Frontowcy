import React from 'react';
import styled from 'styled-components';

const LanguagesSection = styled.section`
  margin-bottom: 20px;
`;

const Heading = styled.h3`
  font-size: 1.2em;
  color: #333;
  margin-bottom: 10px;
`;

const LanguageItem = styled.div`
  margin-bottom: 15px;
`;

const LanguageLabel = styled.div`
  font-size: 0.9em;
  color: #555;
  margin-bottom: 6px;
`;

const ProgressBarContainer = styled.div`
  background-color: #e0e0e0;
  border-radius: 8px;
  width: 100%;
  height: 12px;
  overflow: hidden;
  position: relative;
`;

const ProgressBar = styled.div<{ level: number }>`
  background-color: #4a90e2;
  height: 100%;
  width: ${(props) => props.level}%;
  border-radius: 8px 0 0 8px;
  transition: width 0.3s ease;
`;

const Segment = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 10%;
  background-color: rgba(255, 255, 255, 0.3);
  &:not(:first-child) {
    left: calc(10% * var(--segment-index));
  }
`;

const Languages: React.FC = () => {
  const languages = [
    { name: "Angielski", level: "B2", percentage: 70 },
    { name: "Polski", level: "C1", percentage: 90 },
  ];

  return (
    <LanguagesSection>
      <Heading>Języki Obce</Heading>
      {languages.map((language, index) => (
        <LanguageItem key={index}>
          <LanguageLabel>
            {language.name}: {language.level}
          </LanguageLabel>
          <ProgressBarContainer>
            <ProgressBar level={language.percentage} />
            {[...Array(10)].map((_, i) => (
              <Segment key={i} style={{ "--segment-index": i } as React.CSSProperties} />
            ))}
          </ProgressBarContainer>
        </LanguageItem>
      ))}
    </LanguagesSection>
  );
};

export default Languages;
