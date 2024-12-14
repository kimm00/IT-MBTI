import React, { useState } from "react"; 
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
  background: linear-gradient(180deg, #E8EAF3 10%, #A0B7E1 40%, #4A79D1 90%);
`;

const Container = styled.div`
  position: relative;
  width: 1296px;
  height: 863px;
  background: rgba(232, 234, 243, 0);
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

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
`;

const NextButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #6c63ff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin:20px;

  &:hover {
    background-color: #554ecc;
  }
`;


function ResultPage() {
  const location = useLocation();
  const scores = location.state?.scores || {};
  console.log("Received scores:", scores);

  // 점수를 내림차순으로 정렬
  const sortedTypes = Object.entries(scores).sort((a, b) => b[1] - a[1]);

  // 가장 높은 점수를 받은 유형들 필터링
  const highestScore = sortedTypes[0]?.[1];
  const highestTypes = sortedTypes.filter(([_, score]) => score === highestScore);

  // 현재 보여줄 유형 인덱스 상태
  const [currentIndex, setCurrentIndex] = useState(0);
  const resultType = highestTypes[currentIndex]?.[0] || "Frontend Developer";

  const handleNextType = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % highestTypes.length);
  };

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

        {highestTypes.length > 1 && (
          <ButtonContainer>
            <NextButton onClick={handleNextType}>More</NextButton>
          </ButtonContainer>
        )}
      </Container>      
    </Page>
  );
}

export default ResultPage;
