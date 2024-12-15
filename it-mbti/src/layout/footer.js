import React from 'react';
import styled from 'styled-components'; 

const FooterSection = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 150px; /* 높이를 조금 늘려 텍스트를 돋보이게 설정 */
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
      width: 80px; /* 로고 크기 */
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

  .text1,
  .text2 {
    font-size: 40px; /* 크기를 40px로 설정 */
    font-weight: 600; /* 더 두껍게 설정 */
    margin-right: 20px; /* 두 텍스트 사이 간격 설정 */
  }

  .text3 {
    font-size: 14px; /* 줄바꿈 텍스트 크기 */
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
        {/* text1과 text2를 한 줄에 위치 */}
        <div>
          <span className="text1">Seoul National University of Science and Technology</span>
          <span className="text2">ITM OSS PROJECT</span>
        </div>
        <div className="text3">
          23102003 Kim Doyi{'\n'}
          23102009 Park Shinhyung{'\n'}
          23102015 Oh Eunyoung{'\n'}
          23102025 Lee Haneol{'\n'}
          23102031 Hwang Yuyoung
        </div>
      </div>
    </FooterSection>
  );
};

export default Footer;
