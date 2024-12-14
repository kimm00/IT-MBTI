import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const HeaderSection = styled.header`
  width: 100%;
  height: 150px;
  background-color: #6c63ff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  font-family: "GmarketSans", sans-serif;
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 10px 20px;
  }
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  h1 {
    font-size: 24px;
    color: #ffffff;
    margin-left: 10px;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;
const Nav = styled.nav`
  display: flex;
  gap: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }
`;
const NavLink = styled(Link)`
  font-size: 18px;
  color: #ffffff;
  text-decoration: none;
  transition: color 0.3s;
  &:hover {
    color: #d1d0ff;
  }
`;
const Header = () => {
  return (
    <HeaderSection>
      <Logo>
        <h1>IT-MBTI</h1>
      </Logo>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/question">Take the Test</NavLink>
        <NavLink to="/result">Results</NavLink>
      </Nav>
    </HeaderSection>
  );
};
export default Header;
