import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { menuData } from "../data/MenuData";

const Nav = styled.nav`
  height: 60px;
  background: #0a44dd;
  color: #ffffff;
`;

const Logo = styled(Link)`
  color: #ffffff;
`;
const MenuBars = styled.i``;
const NavMenu = styled.div``;
const NavMenuLinks = styled(Link)``;

function Navbar() {
  return (
    <Nav>
      <Logo>Blue House Realtor</Logo>
      <MenuBars />
      <NavMenu>
        {menuData.map((item, index) => {
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>;
        })}
      </NavMenu>
      <h1>Navbar</h1>
    </Nav>
  );
}

export default Navbar;
