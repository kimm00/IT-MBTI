import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Cat from "../components/Cat";
import Detail from "../components/Detail";
import Graph from "../components/Graph";
import Professor from "../components/Professor";
import Skill from "../components/Skill";

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #f4f4f9;
`;

const Container = styled.div`
  position: relative;
  width: 1296px;
  height: 863px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const CatPosition = styled.div`
  position: absolute;
  top: 47px;
  left: 36px;
`;

const DetailPosition = styled.div`
  position: absolute;
  top: 47px;
  left: 708px;
`;

const GraphPosition = styled.div`
  position: absolute;
  top: 397px;
  left: 36px;
`;

const ProfessorPosition = styled.div`
  position: absolute;
  top: 578px;
  left: 705px;
`;

const SkillPosition = styled.div`
  position: absolute;
  top: 578px;
  left: 962px;
`;

function ResultPage() {
  const location = useLocation();
  const scores = location.state?.scores || {};
  console.log("Received scores:", scores);
  const sortedTypes = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const resultType = sortedTypes.length > 0 ? sortedTypes[0][0] : "Frontend Developer";

  return (
    <Page>
      <Container>

        {/* 고양이 컴포넌트 */}
        <CatPosition>
          <Cat title = {resultType}/>
        </CatPosition>

        {/* 상세 정보 컴포넌트 */}
        <DetailPosition>
          <Detail type={resultType}/>
        </DetailPosition>

        {/* 그래프 컴포넌트 */}
        <GraphPosition>
          <Graph scores={sortedTypes}/>
        </GraphPosition>

        {/* 교수 컴포넌트 */}
        <ProfessorPosition>
          <Professor type={resultType} />
        </ProfessorPosition>

        {/* 추천 기술 컴포넌트 */}
        <SkillPosition>
          <Skill type={resultType} />
        </SkillPosition>
      </Container>
    </Page>
  );
}

export default ResultPage;
