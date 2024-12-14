import React from "react";
import styled from "styled-components";
import results from "../data/results.json";

const ProfessorContainer = styled.div`
  width: 240px;
  height: 258px;

  display: flex;
  align-items: center;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;
const Title = styled.p`
  position: absolute;
  top: 10px;
  left: 30px;
  font-size: 20px;
  color: #333;
`;
const ProfessorImage = styled.img`
  position: absolute;
  top: 90px;
  left: 30px;

  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

const ProfessorName = styled.p`
position: absolute;
  top: 90px;
  left: 100px;
  font-size: 1rem;
  color: #333;
`;


function Professor({ type }) {
  const result = results.find((item) => item.type === type) || {};

  return (
    <ProfessorContainer>
      <Title>추천 교수님</Title>
      {result.professors?.map((professor, index) => (
        <ProfessorName key={index}>{professor}</ProfessorName>
      )) || <ProfessorName>Unknown Professors</ProfessorName>}
    </ProfessorContainer>
  );
}

export default Professor; 