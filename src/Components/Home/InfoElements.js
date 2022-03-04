import styled from "styled-components";
import { FaBed, FaBath } from "react-icons/fa";
import { colors } from "../../config/colors";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import { css } from "styled-components";

export const InfoContainer = styled.div`
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;
export const InfoWrapper = styled.div`
  display: grid;

  height: 100%;
  width: 100%;
  max-width: 1600px;
  justify-content: center;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 0px;

  @media screen and (max-width: 768px) {
    padding: 0 0px;
    height: 80%;
    /* max-width: 700px; */
  }
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
  text-align: center;
  margin-top: 20px;
`;
export const HousesParent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;

  @media screen and (max-width: 768px) {
    justify-content: space-evenly;
  }
`;
export const HousesCard = styled.div`
  margin: 0 40px;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  width: 100%;
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
  width: 50%;
  height: 50%;
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

export const SliderButton = styled.div`
  /* position: absolute; */
  bottom: 50px;
  right: 50px;
  display: flex;
  /* z-index: 10; */
`;

export const Arrow = styled(IoMdArrowRoundForward)`
  margin-left: 0.5rem;
`;

export const arrowButton = css`
  width: 50px;
  height: 50px;
  color: #fff;
  cursor: pointer;
  background-color: ${colors.primary};
  border-radius: 50px;
  padding: 10px;
  margin-right: 1rem;
  user-select: none;
  transition: 0.3s;

  &:hover {
    background: #cd853f;
    transform: scale(1.05);
  }
`;

export const PrevArrow = styled(IoArrowBack)`
  ${arrowButton};
`;
export const NextArrow = styled(IoArrowForward)`
  ${arrowButton};
`;

export const ViewAll = styled(Link)`
  font-size: 14px;
  text-align: center;
`;
