import React from "react";

import { menuData } from "../data/MenuData";

import { Nav, NavMenu, NavMenuLinks, Logo, MenuBars } from "./NavbarElements";

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
