import React from 'react';
import styled from 'styled-components'; 

const FooterSection = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 120px;
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
    margin-left: 10px;
    img {
      width: 90px;
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
    font-size: 25px;
    font-weight: 600;
    margin-right: 50px;
  }

  .text3 {
    font-size: 14px;
    font-weight: 400;
    white-space: pre-line;
    line-height: 1.6;
    text-align: right;
    margin-left: auto;
    overflow-wrap: break-word; /* 텍스트 넘침 방지 */
    max-width: 250px; /* 오른쪽 영역의 최대 너비 설정 */
  }
`;

const Footer = () => {
  return (
    <FooterSection>
      <div className="logo">
        <img src="/img/seoultech.svg" alt="main-logo" />
      </div>
      <div className="contents">
        {}
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
