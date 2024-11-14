import React from 'react';
import styled from 'styled-components';

// Style dla komponentu z imieniem i nazwiskiem
const ProfileSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
  padding-left: 20px;
`;

const Name = styled.h1`
  font-size: 2em;
  color: #333;
  margin: 0;
`;

const Position = styled.h2`
  font-size: 1.2em;
  color: #555;
  margin: 0;
`;

const ContactInfo = styled.div`
  margin-top: 15px;
  font-size: 1em;
  color: #555;
`;

const ContactItem = styled.p`
  margin: 5px 0;
`;

interface ProfileProps {
  name: string;
  position: string;
  contact: {
    phone: string;
    email: string;
    location: string;
  };
}

const profileData: ProfileProps = {
  name: 'Jan Kowalski',
  position: 'Frontend Developer',
  contact: {
    phone: '123-456-789',
    email: 'jan.kowalski@email.com',
    location: 'Lublin, Polska',
  },
};

const Profile: React.FC = () => (
  <ProfileSection>
    <Name>{profileData.name}</Name>
    <Position>{profileData.position}</Position>
    <ContactInfo>
      <ContactItem>{profileData.contact.phone}</ContactItem>
      <ContactItem>{profileData.contact.email}</ContactItem>
      <ContactItem>{profileData.contact.location}</ContactItem>
    </ContactInfo>
  </ProfileSection>
);

export default Profile;
