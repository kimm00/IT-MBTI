import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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