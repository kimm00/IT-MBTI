import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AboutModal from "../components/AboutModal";

const HeaderSection = styled.header`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  font-family: "GmarketSans";
  background: #E8EAF2;
  color: black;

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
    font-size: 40px;
    margin-left: 40px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }
`;

const NavLink = styled(Link)`
  font-size: 30px;
  color: black;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #d1d0ff;
  }
`;

const NavItem = styled.span`
  font-size: 30px;
  color: black;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #d1d0ff;
  }
`;

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <HeaderSection>
        <Logo>
          <h1>IT-MBTI</h1>
        </Logo>
        <Nav>
          <NavLink to="/">Home</NavLink>
          <NavItem onClick={openModal}>About</NavItem>
          <NavLink to="/question">Take the Test</NavLink>
        </Nav>
      </HeaderSection>
      {showModal && <AboutModal onClose={closeModal} />}
    </>
  );
};

export default Header;
