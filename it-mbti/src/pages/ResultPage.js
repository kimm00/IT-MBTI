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

  // Sort scores in descending order
  const sortedTypes = Object.entries(scores).sort((a, b) => b[1] - a[1]);

  // Filter the types with the highest score
  const highestScore = sortedTypes[0]?.[1];
  const highestTypes = sortedTypes.filter(([_, score]) => score === highestScore);

  // Type Index Status to Show Current
  const [currentIndex, setCurrentIndex] = useState(0);
  const resultType = highestTypes[currentIndex]?.[0] || "Frontend Developer";

  const handleNextType = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % highestTypes.length);
  };

  return (
    <Page>
      <Container>

        {/* Cat components */}
        <CatPosition>
          <Cat title = {resultType}/>
        </CatPosition>

        {/* Detail Components */}
        <DetailPosition>
          <Detail type={resultType}/>
        </DetailPosition>

        {/* Graph Components */}
        <GraphPosition>
          <Graph scores={sortedTypes}/>
        </GraphPosition>

        {/* Professor Components */}
        <ProfessorPosition>
          <Professor type={resultType} />
        </ProfessorPosition>

        {/* Skill Components */}
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
