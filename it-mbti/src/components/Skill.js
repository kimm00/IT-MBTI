import React from "react";
import styled from "styled-components";
import results from "../data/results.json";


const SkillContainer = styled.div`
  width: 295px;
  height: 244px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
  overflow-y: auto;
`;

const SkillTitle = styled.h3`
  font-size: 23px;
  color: #333;
  margin-bottom: 15px;
  margin-left: 20px;
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin-left: 20px;
`;

const SkillItem = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  margin-bottom: 13px;
  font-size: 1rem;
  color: #333;

  &:hover {
    color: #6c63ff;
  }
`;

const SkillImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const SkillName = styled.span`
  font-size: 20px;
`;

function Skill({ type }) {
  const result = results.find((item) => item.type === type) || {};

  return (
    <SkillContainer>
      <SkillTitle>Recommended Skill</SkillTitle>
      <SkillList>
        {result.recommendedSkills?.map((skill, index) => (
          <SkillItem
            key={index}
            href={skill.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SkillImage src={skill.image} alt={skill.name} />
            <SkillName>{skill.name}</SkillName>
          </SkillItem>
        )) || <SkillItem>Unknown Skills</SkillItem>}
      </SkillList>
    </SkillContainer>
  );
}

export default Skill;
