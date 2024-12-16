import React from "react";
import styled from "styled-components";
import results from "../data/results.json";

const ProfessorContainer = styled.div`
  width: 218px;
  height: 245px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
`;

const Title = styled.h3`
  font-size: 23px;
  color: #333;
  margin-top: 10px;
  margin-bottom: 5px;
  margin-left: 10px;
`;

const ProfessorProfile = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  margin-top: 15px;
  margin-left: 10px;
  &:hover {
    color: #6c63ff;
  }
`;

const ProfessorImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-right: 0px;

  &:hover {
    border: 3px solid #6c63ff;
    box-shadow: 0 0 10px rgba(108, 99, 255, 0.5);
  }
`;

const ProfessorName = styled.p`
  font-size: 20px;
  color: #333;
  margin-left:15px;
`;

function Professor({ type }) {
  const result = results.find((item) => item.type === type) || {};

  return (
    <ProfessorContainer>
      <Title>Professor of ITM</Title>
      {result.professors?.map((professor, index) => (
        <ProfessorProfile key={index} href={professor.website} target="_blank" rel="noopener noreferrer">
          <ProfessorImage src={professor.image} alt={professor.name} />
          <ProfessorName>{professor.name}</ProfessorName>
        </ProfessorProfile>
      )) || <ProfessorName>Unknown Professors</ProfessorName>}
    </ProfessorContainer>
  );
}

export default Professor;
