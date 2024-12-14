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
  padding: 30px;
  width: 90%;
  max-width: 600px;
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
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #ff1f1f;
  }
`;

const Title = styled.h2`
  font-size: 1.8rem;
  color: #6c63ff;
  margin-bottom: 15px;
`;

const Text = styled.p`
  font-size: 1rem;
  color: #333;
  line-height: 1.5;
`;

const AboutModal = ({ onClose }) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>Close</CloseButton>
        <Title>About IT-MBTI</Title>
        <Text>
          IT-MBTI helps you discover your ideal career path in the IT field through a personality-based career test. Answer a series of questions and find out if you're a Frontend Developer, Backend Developer, Data Analyst, or more!
        </Text>
      </ModalContent>
    </ModalOverlay>
  );
};

export default AboutModal;
