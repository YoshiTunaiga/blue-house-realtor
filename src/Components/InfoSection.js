import React from "react";
import styled from "styled-components";
import { houses } from "../data/houses";

const InfoContainer = styled.div`
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;
const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
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
  /*   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  max-width: 80%;
  width: 90%;
  height: 200px;
  padding: 25px;
  border-radius: 25px;
  /*   position: relative; */
  display: flex;
  border: 2px solid #04aadd;

  @media screen and (max-width: 768px) {
    height: 400px;
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
const HousePrice = styled.img``;
const HouseCardContent = styled.img``;

const InfoSection = () => {
  return (
    <InfoContainer>
      <InfoWrapper>
        <FilterContent>
          <FilterParent></FilterParent>
        </FilterContent>
        <HousesContent>
          <HousesParent>
            <HousesCard>
              {houses.map((house) => (
                <>
                  <HouseImg src={house.img} alt={house.alt} />
                  {/* <HouseCardContent>
                    <HousePrice>{house.price}</HousePrice>
                  </HouseCardContent>
                  <HousePrice></HousePrice> */}
                </>
              ))}
            </HousesCard>
          </HousesParent>
        </HousesContent>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default InfoSection;
