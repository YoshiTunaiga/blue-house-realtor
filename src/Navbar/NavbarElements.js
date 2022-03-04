import styled from "styled-components";
import { Link } from "react-router-dom";
import { css } from "styled-components";
import { TiThMenu } from "react-icons/ti";
import { colors } from "../config/colors";
import { FaTimes } from "react-icons/fa";

export const Nav = styled.nav`
  height: 60px;
  background: #0a44dd;
  display: flex;
  justify-content: space-between;
  padding: 5px 5px;
  z-index: 100;
  position: fixed;
  width: 100%;
  /* color: #ffffff; */

  @media screen and (max-width: 768px) {
    background: "red";
  }
`;

export const NavLink = css`
  color: ${colors.white};
  font-weight: bold;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;

export const Logo = styled(Link)`
  ${NavLink}
  color: #ffffff;
`;

export const LogoImg = styled.img`
  width: 50px;
  height: 50px;
`;

export const MenuBars = styled(TiThMenu)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    height: 40px;
    width: 40px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 28%);
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 50px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavMenuLinks = styled(Link)`
  ${NavLink}
  font-family: "Playfair Display";
  font-size: 20px;
  color: #ffffff;
`;

/* --------- DROPDOWN ELEMENTS ------------- */
export const DropdownContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: ${colors.white};
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
export const CloseIcon = styled(FaTimes)`
  color: ${colors.primary};
`;
export const DropdownWrapper = styled.div``;
export const DropdownMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  margin-bottom; 4rem;

  @media screen and (max-width: 480px){
    grid-template-rows: repeat(4, 60px);
  }
`;
export const DropdownLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.primary};
  font-weight: bold;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &: hover {
    color: #000d1a;
  }
`;
export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;
/* ------ END DROPDOWN ELEMENTS ------------ */
