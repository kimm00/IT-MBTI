import React from "react";
import styled from "styled-components";
import results from "../data/results.json";


const SkillContainer = styled.div`
  width: 318px;
  height: 258px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const SkillTitle = styled.h3`
  font-size: 20px;
  color: #333;
  margin-bottom: 15px;
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SkillItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  font-size: 1rem;
  color: #333;
`;

const Skillimg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

function Skill({ type }) {
  const result = results.find((item) => item.type === type) || {};

  return (
    <SkillContainer>
      <SkillTitle>추천 기술</SkillTitle>
      <ul>
        {result.recommendedSkills?.map((skill, index) => (
          <SkillItem key={index}>{skill}</SkillItem>
        )) || <SkillItem>Unknown Skills</SkillItem>}
      </ul>
    </SkillContainer>
  );
}
