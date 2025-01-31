import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  margin:20px;
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px; /* Opcjonalnie, dla zaokrąglonych rogów */
  margin-bottom: 10px;
`;


const Photo: React.FC = () => (
  <HeaderContainer>
     
<Image src="https://sb.kaleidousercontent.com/67418/574x435/74d8ee5821/screenshot_2022-04-25_at_16-00-23-removebg-preview.png" alt="Profile" />

  </HeaderContainer>
);

export default Photo;
