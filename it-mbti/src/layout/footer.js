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

  .text1{
    font-size: 25px;
    font-weight: 600;
    margin-right: 200px;
  }

  .text3 {
    font-size: 25px;
    font-weight: 600;
    white-space: pre-line;
    line-height: 1.6;
    text-align: right;
    margin-right: 50px;
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
        </div>
        <div className="text3">
        ITM OSS PROJECT
        </div>
      </div>
    </FooterSection>
  );
};

export default Footer;
