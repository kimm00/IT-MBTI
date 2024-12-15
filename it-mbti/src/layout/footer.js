import React from 'react';
import styled from 'styled-components'; 

const FooterSection = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 120px; /* 적절한 높이로 설정 */
  font-family: GmarketSans;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: black;
  color: white;
  padding: 0 20px;

  .logo {
    display: flex;
    align-items: center;
    margin-left: 10px; /* 좌측 여백 */
    img {
      width: 80px; /* 로고 크기 확대 */
      height: auto;
    }
  }

  .contents {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    margin: 0 20px;
  }

  .text1 {
    font-size: 18px; /* 크기 증가 */
    font-weight: 600; /* 더 두껍게 설정 */
    margin-right: 20px; /* text2와 간격 설정 */
  }

  .text2 {
    font-size: 18px; /* 크기 증가 */
    font-weight: 600; /* 더 두껍게 설정 */
  }

  .text3 {
    font-size: 14px; /* 줄바꿈 텍스트 크기 조정 */
    font-weight: 400;
    white-space: pre-line; /* 줄바꿈 적용 */
    line-height: 1.6; /* 줄 간격 설정 */
    text-align: right; /* 오른쪽 정렬 */
    margin-left: auto; /* 오른쪽으로 위치 고정 */
  }
`;

const Footer = () => {
  return (
    <FooterSection>
      <div className="logo">
        <img src="/img/seoultech.svg" alt="main-logo" />
      </div>
      <div className="contents">
        <div>
          <span className="text1">Seoul National University of Science and Technology</span>
          <span className="text2">ITM OSS PROJECT</span>
        </div>
        <div className="text3">
          23102003 Kim Doyi{'\n'}23102009 Park Shinhyung{'\n'}23102015 Oh Eunyoung{'\n'}23102025 Lee Haneol{'\n'}23102031 Hwang Yuyoung
        </div>
      </div>
    </FooterSection>
  );
};

export default Footer;
