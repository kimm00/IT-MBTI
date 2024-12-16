import React from "react";
import styled from "styled-components";

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

function Graph({ scores }) {
  // 스케일 값 적용 (0, 2.5, 5, 7.5, 10)
  const scaleValues = [0, 2.5, 5, 7.5, 10];
  
  // 점수를 스케일에 맞게 변환
  const adjustedScores = scores.map(([type, score]) => {
    // 가장 가까운 스케일 값 찾기
    const scaledScore = scaleValues.reduce((prev, curr) =>
      Math.abs(curr - score) < Math.abs(prev - score) ? curr : prev
    );
    return [type, scaledScore];
  });

  // 총점 계산 (스케일이 적용된 값 사용)
  const totalScore = adjustedScores.reduce((sum, score) => sum + score[1], 0);
  const maxScorePerType = 10; // 스케일의 최대 값
  const scaledMaxTotalScore = adjustedScores.length * maxScorePerType;

  // 각 점수의 퍼센트 계산
  const graphData = adjustedScores.map(([type, score]) => ({
    label: type,
    percentage:
      totalScore > 0 ? Math.round((score / scaledMaxTotalScore) * 100) : 0,
    color: `#${Math.floor(Math.random() * 16777215).toString(16)}`, // 랜덤 색상
  }));

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

