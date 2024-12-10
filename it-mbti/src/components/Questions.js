import React, { useState } from "react";
import styled from "styled-components";

const QuestionContainer = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 100%;
`;

const QuestionText = styled.p`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 15px;
`;

const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const OptionButton = styled.button`
  background-color: ${({ isSelected }) => (isSelected ? "#3a7664" : "#4caf93")};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: #3a7664;
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
        <OptionButton isSelected={selectedOption === 1} onClick={() => handleClick(1)}>
          Strongly disagree
        </OptionButton>
        <OptionButton isSelected={selectedOption === 2} onClick={() => handleClick(2)}>
          Disagree
        </OptionButton>
        <OptionButton isSelected={selectedOption === 3} onClick={() => handleClick(3)}>
          Undecided
        </OptionButton>
        <OptionButton isSelected={selectedOption === 4} onClick={() => handleClick(4)}>
          Agree
        </OptionButton>
        <OptionButton isSelected={selectedOption === 5} onClick={() => handleClick(5)}>
          Strongly agree
        </OptionButton>
      </OptionsContainer>
    </QuestionContainer>
  );
};

export default Question;
