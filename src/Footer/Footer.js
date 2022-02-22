import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  FooterLinksContainer,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Company</FooterLinkTitle>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/signin">Admin</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
