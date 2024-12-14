import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";

// 번갈아 나오는 텍스트 애니메이션
const fadeInOut = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
`;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f9;
`;

const LoadingText = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
`;

const TypeText = styled.div`
  font-size: 1.8rem;
  color: #6c63ff;
  animation: ${fadeInOut} 2s infinite;
`;

const Spinner = styled.div`
  border: 8px solid #f3f3f3;
  border-top: 8px solid #6c63ff;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

function LoadingPage() {
  const navigate = useNavigate();
  const types = [
    "Frontend Developer",
    "Backend Developer",
    "UI/UX Designer",
    "DevOps Engineer",
    "Data Analyst",
    "IT Strategy Consultant",
    "Business Development Manager",
  ];

  useEffect(() => {
    // 5초 후에 결과 페이지로 이동
    const timer = setTimeout(() => {
      navigate("/result");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Page>
      <LoadingText>어떤 유형이 나올까요? 🤔</LoadingText>
      <TypeText>
        {types.map((type, index) => (
          <span key={index}>{type}</span>
        ))}
      </TypeText>
      <Spinner />
    </Page>
  );
}

export default LoadingPage;
