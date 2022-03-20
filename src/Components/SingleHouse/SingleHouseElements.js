import styled from "styled-components";
import { colors } from "../../config/colors";

const SingleContainer = styled.div`
  background-color: ${colors.white};
  color: ${colors.primary};
  height: 100%;
  width: 100%;
  padding: 100px 0;

  @media screen and (max-width: 768px) {
    padding: 80px 0;
    background-color: ${colors.white};
    color: ${colors.primary};
  }
`;
const SingleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  z-index: 1;
  height: 100%;
  width: 100%;
  max-width: 1600px;
  border-radius: 5px;
  padding: 20px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0 0px;
  }
`;
const SingleParent = styled.div`
  background-color: yellow;
  width: 100%;
  margin: 5px;
  /* padding: 100px; */
`;
const SingleContact = styled.div`
  background-color: yellow;
  width: 100%;
  margin: 5px;
  /* padding: 100px; */
`;

const SingleTitle = styled.h2`
  font-size: 20px;
  color: ${colors.primary};
`;

export {
  SingleContact,
  SingleContainer,
  SingleParent,
  SingleWrapper,
  SingleTitle,
};
