import React from "react";
import { menuData } from "../data/MenuData";
import { Button } from "../Components/Button";
import {
  DropdownContainer,
  Icon,
  CloseIcon,
  DropdownWrapper,
  DropdownMenu,
  DropdownLink,
  BtnWrap,
} from "../Navbar/NavbarElements";

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <DropdownContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <DropdownWrapper>
        <DropdownMenu>
          {menuData.map((item, index) => (
            <DropdownLink to={item.links} key={index}>
              {item.title}
            </DropdownLink>
          ))}
        </DropdownMenu>
        <BtnWrap>
          <Button primary="true" round="true" big="true" to="/contact">
            Contact Us
          </Button>
        </BtnWrap>
      </DropdownWrapper>
    </DropdownContainer>
  );
};

export default Dropdown;
