import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Question from "../components/Questions";
import questions from "../data/questions.json"; 

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(180deg, #E8EAF3 10%, #A0B7E1 40%, #4A79D1 90%);
`;
const ProgressBarContainer = styled.div`
  width: 80%;
  height: 20px;
  background-color: #ddd;
  border-radius: 10px;
  margin-bottom: 20px;
  overflow: hidden;
`;

const Progress = styled.div`
  height: 100%;
  width: ${({ percentage }) => percentage}%;
  background-color: #4A79D1;
  transition: width 0.3s ease-in-out;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
`;

const NavButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  margin: 5px;
  color: black;
  background-color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
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
  const progressPercentage = ((currentIndex + 1) / questions.length) * 100;

  return (
    <Container>
      <ProgressBarContainer>
        <Progress percentage={progressPercentage} />
      </ProgressBarContainer>
      <Question
        questionText={questions[currentIndex].question}
        onAnswer={(score) => handleAnswer(questions[currentIndex].type, score)}
      />
      <ButtonContainer>
        <NavButton onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}>
         ⬅ Previous
        </NavButton>
      </ButtonContainer>
    </Container>
  );
}

export default QuestionPage;
