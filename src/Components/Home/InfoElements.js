import styled from "styled-components";
import { FaBed, FaBath } from "react-icons/fa";
import { colors } from "../../config/colors";

export const InfoContainer = styled.div`
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;
export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1600px;
  justify-content: center;
  /* text-align: center; */
  /* align-items: center; */
  margin-right: auto;
  margin-left: auto;
  padding: 0 0px;

  @media screen and (max-width: 768px) {
    padding: 0 0px;
    height: 80%;
    /* max-width: 700px; */
  }
  /* flex-direction: column; */
`;
export const FilterContent = styled.div`
  margin-top: 80px;
  /* position: relative; */
  height: 50px;
  background-color: gray;

  @media screen and (max-width: 768px) {
    margin-top: -10px;
  }
`;
export const FilterParent = styled.div``;
export const HousesContent = styled.div`
  margin: 10px;
  margin-top: 50px;

  /* background-color: green; */
`;
export const HousesParent = styled.div`
  /* background-color: yellow; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;

  @media screen and (max-width: 768px) {
    justify-content: space-evenly;
  }
  /* flex-wrap: wrap; */
`;
export const HousesCard = styled.div`
  margin: 40px;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  width: 30%;
  height: 20%;
  padding: 25px;
  border-radius: 25px;
  text-align: center;
  align-items: center;
  display: flex;
  border: 2px solid #04aadd;

  @media screen and (max-width: 768px) {
    height: 400px;
    display: block;
    margin: 10px;
    margin-bottom: 50px;
    width: 70%;
    align-items: center;
    text-align: center;
    justify-content: center;
  }
`;
export const HouseImg = styled.img`
  box-shadow: 4px 13px 30px 1px rgba(10, 68, 221, 0.2);
  border-radius: 20px;
  flex-shrink: 0;
  /* overflow: hidden; */
  width: 200px;
  height: 150px;
  transform: translateX(-80px);

  @media screen and (max-width: 768px) {
    overflow: visible;
    transform: translateX(0px);
    width: 100%;
  }
`;

export const HousePrice = styled.h2`
  font-size: 30px;
  color: black;
`;

export const HouseCardContent = styled.div`
  /* margin-left: 10px; */
  margin-top: 10px;
  text-align: left;
`;
export const HouseText = styled.p`
  font-size: 20px;
  color: black;
`;

export const HouseIcon = styled.div`
  top: 1.2rem;
  right: 1.5rem;
  display: flex;
  justify-content: space-evenly;
  /* background: transparent; */
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
export const BedIcon = styled(FaBed)`
  color: ${colors.primary};
`;

export const BathIcon = styled(FaBath)`
  color: ${colors.primary};
`;
