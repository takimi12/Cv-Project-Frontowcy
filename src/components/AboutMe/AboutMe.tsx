import React from 'react';
import styled from 'styled-components';



const SummarySection = styled.section`
  margin-bottom: 20px;
  margin-left:20px;
`;

const Paragraph = styled.p`
  margin-bottom: 15px;
`;

const AboutMe: React.FC = () => (
  <>
    <SummarySection>
      <h3>Podsumowanie</h3>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Paragraph>
      <Paragraph>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Paragraph>
      <Paragraph>
        Curabitur pretium tincidunt lacus, id euismod urna fermentum eu. Nulla facilisi. Morbi pharetra mi eu risus faucibus, in tincidunt justo ullamcorper.
      </Paragraph>
    </SummarySection>
  </>
);

export default AboutMe;
