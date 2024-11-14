import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  margin:20px;
`;

const ProfilePicture = styled.div`
  width: 200px;
  height: 200px;
  background-color: lightgray;
  margin-right: 20px;
`;



const Photo: React.FC = () => (
  <HeaderContainer>
    <ProfilePicture />
  </HeaderContainer>
);

export default Photo;
