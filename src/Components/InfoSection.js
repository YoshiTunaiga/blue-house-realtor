import React from "react";
import styled from "styled-components";
import { houses } from "../data/houses";
import { FaBed, FaBath } from "react-icons/fa";
import { colors } from "../config/colors";

const InfoContainer = styled.div`
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;
const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 1100px;
  width: 100%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;

  @media screen and (max-width: 768px) {
    padding: 0 10px;
    max-width: 390px;
  }
  /* flex-direction: column; */
`;
const FilterContent = styled.div`
  margin-top: 30px;
  height: 100px;
  background: gray;
`;
const FilterParent = styled.div``;
const HousesContent = styled.div``;
const HousesParent = styled.div``;
const HousesCard = styled.div`
  margin: 10px;
  margin-left: 20px;
  /*   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  /* max-width: 80%; */
  width: 50%;
  height: 200px;
  padding: 25px;
  border-radius: 25px;
  /*   position: relative; */
  display: flex;
  border: 2px solid #04aadd;

  @media screen and (max-width: 768px) {
    height: 400px;
    display: block;
  }
`;
const HouseImg = styled.img`
  /*   display: flex; */
  box-shadow: 4px 13px 30px 1px rgba(10, 68, 221, 0.2);
  border-radius: 20px;
  flex-shrink: 0;
  overflow: hidden;
  /*   margin: 10px; */
  width: 250px;
  height: 200px;
  transform: translateX(-80px);

  @media screen and (max-width: 768px) {
    transform: translateY(-100px);
  }
`;
const HousePrice = styled.h2`
  font-size: 30px;
  color: black;
`;
const HouseCardContent = styled.div``;
const HouseText = styled.p`
  font-size: 20px;
  color: black;
`;

const HouseIcon = styled.div`
  /* position: absolute; */
  top: 1.2rem;
  right: 1.5rem;
  display: flex;
  justify-content: space-evenly;
  /* background: transparent; */
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
const BedIcon = styled(FaBed)`
  color: ${colors.primary};
`;

const BathIcon = styled(FaBath)`
  color: ${colors.primary};
`;

const InfoSection = () => {
  return (
    <InfoContainer>
      <InfoWrapper>
        <FilterContent>
          <FilterParent></FilterParent>
        </FilterContent>
        <HousesContent>
          <HousesParent>
            {houses.map((house) => (
              <HousesCard key={house.id}>
                <HouseImg src={house.img} alt={house.alt} />
                <HouseCardContent>
                  <HousePrice>${house.price}</HousePrice>
                  <HouseText>{house.address.ciudad}</HouseText>
                  <HouseText>{house.address.ciudad}</HouseText>
                  <HouseIcon>
                    <BedIcon />
                    <BathIcon />
                  </HouseIcon>
                </HouseCardContent>
              </HousesCard>
            ))}
          </HousesParent>
        </HousesContent>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default InfoSection;
