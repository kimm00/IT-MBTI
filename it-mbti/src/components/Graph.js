import React from "react";
import styled from "styled-components";

const fixedColors = {
  "Frontend Developer": "#cdb4db",
  "Backend Developer": "#ffc8dd",
  "UI/UX Designer": "#ffafcc",
  "DevOps Engineer": "#bde0fe",
  "Data Analyst": "#a2d2ff",
  "IT Strategic Consultant": "#bbd0ff",
  "Business Development Analyst": "#b8c0ff",
};

const GraphContainer = styled.div`
  width: 640px;
  height: 436px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
  padding: 5px;
`;

const GraphItem = styled.div`
  margin: 10px;
`;

const GraphLabel = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const LabelText = styled.span`
  font-size: 1rem;
  color: #555;
`;

const ProgressBar = styled.div`
  position: relative;
  height: 20px;
  background-color: #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
`;

const Progress = styled.div`
  height: 100%;
  width: ${({ percentage }) => percentage}%;
  background-color: ${({ color }) => color || "#6c63ff"};
  border-radius: 10px 0 0 10px;
  transition: width 0.3s ease-in-out;
`;

const Percentage = styled.span`
  position: absolute;
  right: 10px;
  top: 0;
  font-size: 0.9rem;
  color: white;
  font-weight: bold;
  line-height: 20px;
`;

function Graph({ scores }) {
  const maxScorePerType = 30;
  const graphData = scores.map(([type, score]) => {
    const percentage = Math.round((score / maxScorePerType) * 100);
    return {
      label: type,
      percentage: percentage,
      color: fixedColors[type],
    };
  });

  return (
    <GraphContainer>
      {graphData.map((data, index) => (
        <GraphItem key={index}>
          <GraphLabel>
            <LabelText>{data.label}</LabelText>
            <LabelText>{data.percentage}%</LabelText>
          </GraphLabel>
          <ProgressBar>
            <Progress percentage={data.percentage} color={data.color} />
          </ProgressBar>
        </GraphItem>
      ))}
    </GraphContainer>
  );
}

export default Graph;
