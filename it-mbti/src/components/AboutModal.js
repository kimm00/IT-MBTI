import React from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 40px;
  width: 90%;
  max-width: 800px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: #ff4d4d;
  color: white;
  border: none;
  padding: 20px 30px;
  font-size: 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #ff1f1f;
  }
`;

const Title = styled.h2`
  font-size: 30px;
  color: #6c63ff;
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: 20px;
  color: #333;
  line-height: 1.6;
  margin-bottom: 15px;
`;

const DeveloperSection = styled.div`
  margin-top: 20px;
`;

const DeveloperTitle = styled.h3`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #6c63ff;
`;

const DeveloperList = styled.ul`
  font-size: 20px;
  color: #555;
  list-style: none;
  padding: 0;

  li {
    margin: 5px 0;
  }
`;

const BottomImage = styled.img`
  position: absolute;
  bottom: 80px;
  right: 50px;
  width: 500px;
  height: auto;
  opacity: 0.8;
`;

const AboutModal = ({ onClose }) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>Close</CloseButton>
        <Title>About IT-MBTI</Title>
        <Text>
          IT-MBTI helps you discover your ideal career path in the IT field through a personality-based career test.
          Answer a series of questions and find out if you're a Frontend Developer, Backend Developer, Data Analyst, or more!
        </Text>
        <DeveloperSection>
          <DeveloperTitle>Developers</DeveloperTitle>
          <DeveloperList>
            <li><a href="https://github.com/kimm00" target="_blank" rel="noopener noreferrer">23102003 Kim Doyi</a></li>
            <li><a href="https://github.com/shinh09" target="_blank" rel="noopener noreferrer">23102009 Park Shinhyung</a></li>
            <li><a href="https://github.com/eun5young" target="_blank" rel="noopener noreferrer">23102015 Oh Eunyoung</a></li>
            <li><a href="https://github.com/han3o1" target="_blank" rel="noopener noreferrer">23102025 Lee Haneol</a></li>
            <li><a href="https://github.com/yuyoung924" target="_blank" rel="noopener noreferrer">23102031 Hwang Yuyoung</a></li>
          </DeveloperList>
        </DeveloperSection>
        <BottomImage src="/modal.png" alt="Developer Icon" />
      </ModalContent>
    </ModalOverlay>
  );
};

export default AboutModal;
