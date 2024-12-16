import React from "react";
import styled from "styled-components";

const GraphContainer = styled.div`
  width: 640px;
  height: auto;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
  padding: 20px;
`;

const GraphItem = styled.div`
  margin: 10px 0;
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

function Graph({ scores }) {
  const maxScorePerType = 30; // 각 유형당 최대 점수: 3개 질문 * 10점

  // 각 유형의 퍼센트 계산
  const graphData = scores.map(([type, score]) => {
    const percentage = Math.round((score / maxScorePerType) * 100); // 비율 계산
    return {
      label: type,
      percentage: percentage,
      color: `#${Math.floor(Math.random() * 16777215).toString(16)}`, // 랜덤 색상
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

