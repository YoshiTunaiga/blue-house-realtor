import styled from "styled-components";
import { colors } from "../../config/colors";

export const AlquilerContainer = styled.div`
  padding: 100px 0;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;
export const AlquilerWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  max-width: 1200px;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 0 0px;
    max-width: 700px;
  }
`;
export const AlquilerContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0 0 60px;

  @media screen and (max-width: 768px) {
    max-width: 700px;
    margin: 10px 0 0 0;
  }
`;

export const AlquilerParent = styled.div`
  margin: 50px auto 0 auto;
  height: 50%;
  width: 50%;

  @media screen and (max-width: 768px) {
    height: 50%;
    width: 50%;
    margin: 0px 0 0 0;
    justify-content: space-evenly;
  }
`;

export const AlquilerCard = styled.div`
  margin: 0 10px;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);

  border-radius: 25px;
  text-align: center;

  display: flex;
  border: 2px solid ${colors.lightBlue};

  @media screen and (max-width: 768px) {
    height: 400px;

    margin-bottom: 10px;
    border-radius: 25px 0;
    width: 90%;
    text-align: center;
    justify-content: center;
  }
`;

export const AlquilerImg = styled.img`
  border-radius: 23px;
  width: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  height: 100%;

  @media screen and (max-width: 768px) {
    overflow: visible;
    width: 100%;
    border-radius: 23px 0;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
    height: 50%;
  }
`;
