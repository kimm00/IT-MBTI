import React from 'react';
import styled from 'styled-components'; 

const FooterSection = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px; /* 하단바 높이를 줄임 */
  font-family: GmarketSans;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: black;
  color: white;

  .logo {
    display: flex;
    align-items: center;
    margin: 0 20px; /* 여백 줄이기 */
    img {
      width: 60px; /* 로고 크기 줄이기 */
      height: auto;
    }
  }

  .contents {
    height: 100%;
    opacity: 0.92;
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
  }

  .lower {
    display: flex;
    flex-direction: column; /* 세로 정렬 */
    align-items: flex-start; /* 텍스트 왼쪽 정렬 */
    font-size: 18px; /* 기본 텍스트 크기 확대 */
    padding: 0 20px;
  }

  .text1 {
    font-size: 20px; /* 텍스트1 크기 증가 */
    font-weight: 600;
  }

  .text2 {
    font-size: 18px; /* 텍스트2 크기 증가 */
    font-weight: 500;
    margin: 5px 0;
  }

  .text3 {
    font-size: 14px; /* 텍스트3 크기 줄임 */
    font-weight: 400;
    white-space: pre-line; /* 줄바꿈 적용 */
    line-height: 1.4; /* 줄 간격 조정 */
  }
`;

const Footer = () => {
  return (
    <FooterSection>
      <div className="logo">
        <img src="/img/seoultech.svg" alt="main-logo" />
      </div>
      <div className="contents">
        <div className="lower">
          <div className="text1">Seoul National University of Science and Technology</div>
          <div className="text2">ITM OSS PROJECT</div>
          <div className="text3">Kim Doyi\nPark Shinhyung\nOh Eunyoung\nLee Haneol\nHwang Yuyoung</div>
        </div>
      </div>
    </FooterSection>
  );
};

export default Footer;
