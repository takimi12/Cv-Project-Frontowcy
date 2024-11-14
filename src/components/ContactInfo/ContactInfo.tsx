import React from 'react';
import styled from 'styled-components';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactSection = styled.section`
  margin-bottom: 20px;
`;

const Heading = styled.h3`
  font-size: 1.2em;
  color: #333;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  font-size: 0.9em;
  color: #555;
  
  svg {
    margin-right: 8px;
    color: #333;
  }
`;

const ContactInfo: React.FC = () => (
  <ContactSection>
    <Heading>Kontakt</Heading>
    <ContactItem>
      <FaMapMarkerAlt />
      <span>City</span>
    </ContactItem>
    <ContactItem>
      <FaPhone />
      <span>Telephone</span>
    </ContactItem>
    <ContactItem>
      <FaEnvelope />
      <span>email</span>
    </ContactItem>
  </ContactSection>
);

export default ContactInfo;
