import React, { useState } from "react";
import styled from "styled-components";

const QuestionContainer = styled.div`
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 30px;
  width: 80%;
`;

const QuestionText = styled.p`
  font-size: 40px;
  color: #333;
  margin: 5px 0 40px 0;
`;

const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const OptionButton = styled.button`
  background: ${({ $isSelected }) => ($isSelected ? "#3a7664" : "#4caf93")};
  background: black;
  color: white;
  border: none;
  margin: 5px 0 0 0;
  padding: 8px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 30px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #4A79D1;
  }
`;

const Question = ({ questionText, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleClick = (score) => {
    setSelectedOption(score);
    onAnswer(score);
  };

  return (
    <QuestionContainer>
      <QuestionText>{questionText}</QuestionText>
      <OptionsContainer>
      <OptionButton $isSelected={selectedOption === 1} onClick={() => handleClick(1)}>
        Strongly Disagree
      </OptionButton>
      <OptionButton $isSelected={selectedOption === 2} onClick={() => handleClick(2)}>
        Disagree
      </OptionButton>
      <OptionButton $isSelected={selectedOption === 3} onClick={() => handleClick(3)}>
        Neutral
      </OptionButton>
      <OptionButton $isSelected={selectedOption === 4} onClick={() => handleClick(4)}>
        Agree
      </OptionButton>
      <OptionButton $isSelected={selectedOption === 5} onClick={() => handleClick(5)}>
        Strongly Agree
      </OptionButton>
      </OptionsContainer>
    </QuestionContainer>
  );
};

export default Question;
