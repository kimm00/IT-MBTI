function Graph({ scores }) {
    // 총점 계산
    const totalScore = scores.reduce((sum, score) => sum + score[1], 0);
  
    // 각 유형의 퍼센트 계산
    const graphData = scores.map(([type, score]) => ({
      label: type,
      percentage: totalScore > 0 ? Math.round((score / totalScore) * 100) : 0,
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
              <Progress percentage={data.percentage} color={data.color}>
                <Percentage>{data.percentage}%</Percentage>
              </Progress>
            </ProgressBar>
          </GraphItem>
        ))}
      </GraphContainer>
    );
  }
  
  export default Graph;