import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(180deg, #E8EAF3 10%, #A0B7E1 40%, #4A79D1 90%);
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 863px;
  background: rgba(232, 234, 243, 0);
  border-radius: 10px;
`;

const Title2 = styled.h1`
  position: absolute;
  top: 141px;
  left: 79px;
  font-size: 100px;
  color: Black;
  margin-bottom: 20px;
  font-family: "sans-serif";
  font-weight: 900;
`;

const Title = styled.h1`
  position: absolute;
  top: 230px;
  left: 79px;
  font-size: 100px;
  color: Black;
  margin-bottom: 60px;
  font-family: "sans-serif";
  font-weight: 900;
`;

const Description = styled.h1`
  position: absolute;
  width: 700px;
  top: 390px;
  left: 79px;
  font-size: 30px;
  color: black;
  margin-top: 40px;
  font-family: "GmarketSans";
  font-weight: 500;
`;

const Deco2 = styled.img`
  position: absolute;
  top: 123px;
  left: 793px;
  width: 648px;
  height: 648px;
  object-fit: cover;
`;

const StartButton = styled.button`
  position: absolute;
  top: 620px;
  left: 71px;
  width: 297px;
  height: 72px;
  font-size: 24px;
  color: white;
  background: black;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #574bff;
  }
`;

function StartPage() {
  const navigate = useNavigate();

  return (
    <Page>
      <Container>
        <Title2>What is your</Title2>
        <Title>IT-MBTI</Title>
        <Description>
          This project is a web application for conducting an IT MBTI test,
          helping users discover their aptitudes and career paths in the IT
          field. With an intuitive UI and results page.
        </Description>
        <Deco2 src="/img/catimage.png" alt="deco2" />
        <StartButton onClick={() => navigate("/question")}>Start</StartButton>
      </Container>
    </Page>
  );
}

export default StartPage;
