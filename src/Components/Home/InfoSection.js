import React from "react";
import { houses } from "../../data/houses";
import {
  InfoContainer,
  InfoWrapper,
  HousesContent,
  HousesParent,
  HousesCard,
  HouseImg,
  HouseCardContent,
  HousePrice,
  HouseText,
  HouseIcon,
  BedIcon,
  BathIcon,
} from "./InfoElements";

const InfoSection = () => {
  return (
    <InfoContainer>
      <InfoWrapper>
        {/* <FilterContent>
          <FilterParent></FilterParent>
        </FilterContent> */}
        <HousesContent>
          <HousesParent>
            {houses.map((house) => (
              <HousesCard key={house.id}>
                <HouseImg src={house.img} alt={house.alt} />
                <HouseCardContent>
                  <HousePrice>${house.price}</HousePrice>
                  <HouseText>{house.address.ciudad}</HouseText>
                  <HouseText>{house.category}</HouseText>
                  {/* <HouseIcon>
                    <HouseText />
                    <BedIcon />
                    <BathIcon />
                  </HouseIcon> */}
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
