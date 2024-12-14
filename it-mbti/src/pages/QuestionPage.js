import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Question from "../components/Question";
import questions from "../data/questions.json"; // 질문 JSON 파일 불러오기

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #e0e0e0;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
`;

const NavButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  margin: 5px;
  color: white;
  background-color: #4caf50;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

function QuestionPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scores, setScores] = useState({});
  const navigate = useNavigate();

  const handleAnswer = (type, score) => {
    setScores((prevScores) => ({
      ...prevScores,
      [type]: (prevScores[type] || 0) + score,
    }));

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigate("/result", { state: { scores } });
    }
  };

  return (
    <Container>
      <Question
        questionText={questions[currentIndex].question}
        onAnswer={(score) => handleAnswer(questions[currentIndex].type, score)}
      />
      <ButtonContainer>
        <NavButton onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}>
          Previous
        </NavButton>
      </ButtonContainer>
    </Container>
  );
}

export default QuestionPage;
