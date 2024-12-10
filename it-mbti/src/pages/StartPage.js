import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f9;
`;
const Container = styled.div`
  position: relative;
  width: 1296px;
  height: 863px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h1`

position: absolute;
  top: 141px;
  left: 79px;
  font-size: 70px;
  color: #333;
  margin-bottom: 20px;
`;
const Description = styled.h1`
position: absolute;
  width: 700px;
  top: 320px;
  left: 79px;
  font-size: 30px;
  color: #333;
  margin-bottom: 20px;
`;
const Cat = styled.img`

 position: absolute;
  top: 123px;
  left: 793px;
  width: 503px;
  height: 583px;
  object-fit: cover;
`;

const StartButton = styled.button`

  position: absolute;
  top: 555px;
  left: 71px;

  width: 297px;
  height: 72px;

  font-size: 24px;
  color: white;
  background-color: #6c63ff;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #574bff;
  }
`;

function StartPage() {
  const navigate = useNavigate();

  return (
    <Page>
      <Container>
        <Title>IT MBTI</Title>
        <Description>This project is a web application for conducting an IT MBTI test, helping users discover their aptitudes and career paths in the IT field. With an intuitive UI and results page.</Description>
        <Cat src="/img/startcat.png" alt="Cat" />
        <StartButton onClick={() => navigate("/question")}>Start</StartButton>
      </Container>
    </Page>
  );
}

export default StartPage;