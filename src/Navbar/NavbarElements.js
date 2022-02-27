import styled from "styled-components";
import { Link } from "react-router-dom";
import { css } from "styled-components";
import Bars from "../images/bars.svg";
import { TiThMenu } from "react-icons/ti";

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
`;

export const NavLink = css`
  color: #fff;
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
    /* background-image: url(${Bars});
    background-size: contain; */
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
