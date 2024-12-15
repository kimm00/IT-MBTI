// Footer.js
import React from 'react';
import styled from 'styled-components'; 

const FooterSection = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 140px;
  font-family: GmarketSans;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: black;
  color: white;

  .logo {
    display: flex;
    align-items: center;
    margin: 0 50px;
    img {
      width: 100px;
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
    justify-content: space-between;
    font-size: 16px;
    padding: 0 20px;
  }

  .text1,
  .text2,
  .text3 {
    font-size: 14px;
  }

  .text1,
  .text3 {
    font-weight: 500;
    white-space: pre-line;
    line-height: 1.6;
  }

  .text2 {
    font-weight: 300;
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
