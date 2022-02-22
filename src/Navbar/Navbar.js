import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { css } from "styled-components";
import { menuData } from "../data/MenuData";
import Bars from "../images/bars.svg";
import { TiThMenu } from "react-icons/ti";

const Nav = styled.nav`
  height: 60px;
  background: #0a44dd;
  display: flex;
  justify-content: space-between;
  padding: 5px 5px;
  z-index: 100;
  position: fixed;
  width: 100%;
  color: #ffffff;
`;

const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;

const Logo = styled(Link)`
  ${NavLink}
  color: #ffffff;
`;
const MenuBars = styled(TiThMenu)`
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

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 50px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const NavMenuLinks = styled(Link)`
  ${NavLink}
  font-family: "Playfair Display";
  font-size: 20px;
  color: #ffffff;
`;

function Navbar({ toggle }) {
  return (
    <Nav>
      <Logo to="/">Blue House Realtor</Logo>
      <MenuBars onClick={toggle} />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.links} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
    </Nav>
  );
}

export default Navbar;
