import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";

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
  background: linear-gradient(180deg, #E8EAF3 10%, #A0B7E1 40%, #4A79D1 90%);
`;

const LoadingText = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
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
  const location = useLocation();
  const scores = location.state?.scores || {};

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/result", { state: { scores } });
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate, scores]);

  return (
      <Page>
        <LoadingText>어떤 유형이 나올까요? 🤔</LoadingText>
        <Spinner />
      </Page>
    );
}

export default LoadingPage;

