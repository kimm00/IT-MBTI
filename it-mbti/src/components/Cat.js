import React from "react";
import styled from "styled-components";
import results from "../data/results.json";


const CatContainer = styled.div`
  width: 652px;
  height: 331px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FFFDE7;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  position: absolute;
  top: 30px;
  left: 30px;
  width: 430px;
  font-size: 35px;
  color: #333;
  margin-bottom: 10px;
`;

const Description = styled.p`
  position: absolute;
  top: 150px;
  left: 30px;
  font-size: 1.3rem;
  font-weight: bold;
  color: #555;
  text-align: center;
  margin-bottom: 20px;
`;

const CatImage = styled.img`
  position: absolute;
  top: 32px;
  left: 380px;
  width: 270px;
  height: 280px;
  object-fit: cover;
  
`;

function Cat({ title }) {
  const result = results.find((item) => item.type === title) || {};

  return (
    <CatContainer>
      <Title>{result.type || "Unknown Title"}</Title>
      <Description>{result.catType || "Unknown Cat Type"}</Description>
      <CatImage src={result.catImage} alt={result.catImage} />
    </CatContainer>
  );
}

export default Cat;


