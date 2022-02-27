import React from "react";
import logo from "../config/blueimg.png";
import { menuData } from "../data/MenuData";
import {
  Nav,
  NavMenu,
  NavMenuLinks,
  Logo,
  MenuBars,
  LogoImg,
} from "./NavbarElements";

function Navbar({ toggle }) {
  return (
    <Nav>
      <Logo to="/">
        <LogoImg src={logo} alt="" />
      </Logo>
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
