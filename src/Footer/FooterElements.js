import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../config/colors";
import { AiOutlineFacebook } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

export const FooterContainer = styled.footer`
  background-color: ${colors.primary};
  /* width: 100%;
  position: fixed; */
`;
export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;
export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;
export const FooterLinkTitle = styled.h1`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
`;
export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }
`;

export const FacebookIcon = styled(AiOutlineFacebook)`
  color: ${colors.white};
  margin: 5px;
`;

export const InstagramIcon = styled(BsInstagram)`
  color: ${colors.white};
  margin: 5px;
`;

export const FooterIcons = styled.div`
  /* top: 1.2rem;
  right: 1.5rem; */
  display: flex;
  justify-content: space-between;
  /* background: transparent; */
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
