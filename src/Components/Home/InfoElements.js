import styled from "styled-components";
import { FaBed, FaBath } from "react-icons/fa";
import { colors } from "../../config/colors";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import { css } from "styled-components";

export const InfoContainer = styled.div`
  /* align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  } */
`;

export const InfoWrapper = styled.div`
  /* display: block; */
  /* align-items: center; */
  /* justify-content: center; */
  /* display: flex;
  height: 100%;
  width: 100%;
  max-width: 1600px;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  margin-left: 30px;
  padding: 0 0px;

  @media screen and (max-width: 768px) {
    padding: 0 0px;
    height: 80%;
  } */
`;

export const FilterContent = styled.div`
  margin-top: 80px;
  height: 50px;
  background-color: gray;

  @media screen and (max-width: 768px) {
    margin-top: -10px;
  }
`;
export const FilterParent = styled.div``;

export const AlquilerContainer = styled.div`
  /* padding: 100px 0; */
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

  /* background-color: green; */
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

  /* background-color: yellow; */
  justify-content: center;

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
  width: 100%;
  height: 100%;
  margin: 5px;
  border-radius: 6px;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  transition: transform 0.5s;
  -webkit-transition: transform 0.5s;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    -webkit-transform: scale(1.1);
    .card-image {
      opacity: 1;
    }
  }

  @media screen and (max-width: 768px) {
    margin: 0px;
    width: 100%;
  }
`;

export const AlquilerImg = styled.img`
  /* height: 200px; */
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
  font-size: 16px;
  line-height: 1.1em;
  color: #32325d;
  margin-bottom: 0.2em;
`;

export const AlquilerPrice = styled.span`
  font-size: 18px;
  font-weight: bold;
  line-height: 1.1em;
  color: #32325d;
  margin-bottom: 0.2em;
`;

export const AlquilerType = styled.div`
  background-color: ${colors.primary};
  color: ${colors.white};
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 25px;
  position: absolute;
  z-index: 1;
  border-radius: 6px 0 6px 0;
`;

/* --------- HOUSES ------------------------ */
export const HousesContent = styled.div`
  /* text-align: center; */
  /* margin-top: 20px; */
`;
export const HousesParent = styled.div`
  display: flex;
  padding: 1rem;
  margin-bottom: 2rem;
  width: 100%;
  @media (min-width: 40rem) {
    width: 50%;
  }
  @media (min-width: 56rem) {
    width: 33.3%;
  }
`;
export const HousesCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 50%;
  border-radius: 6px;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  transition: transform 0.5s;
  -webkit-transition: transform 0.5s;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    -webkit-transform: scale(1.1);
    .card-image {
      opacity: 1;
    }
  }
`;
export const HouseImg = styled.img`
  height: 200px;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 6px 6px 0px 0px;
  opacity: 0.91;
`;

export const HousePrice = styled.span`
  font-size: 12px;
  color: black;
`;

export const HouseCardContent = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 1rem;
  line-height: 1.5em;
`;
export const HouseText = styled.span`
  font-size: 14px;
  padding: 0 10px;
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
