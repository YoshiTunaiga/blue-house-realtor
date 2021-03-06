import styled from "styled-components";
import { colors } from "../../config/colors";
import { FaBed, FaBath } from "react-icons/fa";

export const Maindiv = styled.div`
  padding-top: 100px;
  height: 50%;
  text-align: center;
`;

export const MainTitle = styled.h1`
  color: ${colors.primary};
  font-weight: bold;
`;

export const AlquilerContainer = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: row;
  -webkit-display: box;
  -moz-display: box;
  -ms-display: flexbox;
  -webkit-display: flex;
  flex-wrap: wrap;
  margin: 0 0 0 10px;
  align-items: center;
  /* justify-content: center; */
  align-content: stretch;

  @media screen and (max-width: 768px) {
    /* padding: 100px 0; */
  }

  ::before,
  ::after {
    box-sizing: border-box;
  }
`;

export const AlquilerParent = styled.div`
  display: flex;
  padding: 1rem;
  margin-bottom: 2rem;
  /* width: 100%; */
  @media (min-width: 40rem) {
    width: 50%;
  }
  @media (min-width: 56rem) {
    width: 33.3%;
  }
`;

export const AlquilerCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 80%;
  margin: 10px;
  border-radius: 6px;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  transition: transform 0.5s;
  -webkit-transition: transform 0.5s;

  /* &:hover {
    cursor: pointer;
    transform: scale(1.1);
    -webkit-transform: scale(1.1);
    .card-image {
      opacity: 1;
    } */
  }

  @media screen and (max-width: 768px) {
    margin: 0px;
    width: 100%;
  }
`;

export const AlquilerImg = styled.img`
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 6px 6px 0px 0px;
  opacity: 0.91;
`;

export const AlquilerInfo = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 1rem;
  line-height: 1.5em;
`;

export const AlquilerCity = styled.h2`
  font-size: 18px;
  line-height: 1.1em;
  color: #32325d;
  margin-bottom: 0.2em;
`;

export const AlquilerPrice = styled.h3`
  font-size: 25px;
  line-height: 1.1em;
  color: #32325d;
  margin-bottom: 0.2em;
`;

export const HouseIcon = styled.div`
  background-color: ${colors.primary};
  color: ${colors.white};
  font-size: 1rem;
  display: flex;
  flex-direction: row;
  /* justify-content: space-around; */
  padding: 8px 10px;
  align-items: center;
  /* cursor: pointer;
  outline: none; */
  height: 25px;
  width: 100%;
`;
export const BedIcon = styled(FaBed)`
  color: ${colors.white};
  margin-right: 5px;
`;

export const BathIcon = styled(FaBath)`
  color: ${colors.white};
  margin-right: 5px;
`;

export const HouseText = styled.span`
  font-size: 14px;
  padding: 0 10px;
`;
