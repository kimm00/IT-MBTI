import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;
const Container = styled.div`
  position: relative;
  width: 1296px;
  height: 863px;

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

`;
const Cat = styled.img`

 position: absolute;
  top: 123px;
  left: 793px;
  width: 503px;
  height: 583px;

`;

const StartButton = styled.button`

  position: absolute;
  top: 555px;
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