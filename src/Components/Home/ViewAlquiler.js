import React, { useState, useRef } from "react";
import {
  HousesContent,
  HousesParent,
  HousesCard,
  HouseImg,
  HouseCardContent,
  HousePrice,
  HouseText,
  SliderButton,
  PrevArrow,
  NextArrow,
  ViewAll,
} from "./InfoElements";

export const ViewAlquiler = ({ houses }) => {
  const [current, setCurrent] = useState(0);
  const length = houses.length;
  const timeout = useRef(null);

  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(houses) || houses.length <= 0) {
    return null;
  }
  return (
    <HousesContent>
      <ViewAll to="/alquiler">Ver todas en Alquiler</ViewAll>
      {houses.map((house, idx) => (
        <HousesParent key={idx}>
          {idx === current && (
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
                <SliderButton>
                  <PrevArrow onClick={prevSlide} />
                  <NextArrow onClick={nextSlide} />
                </SliderButton>
              </HouseCardContent>
            </HousesCard>
          )}
        </HousesParent>
      ))}
    </HousesContent>
  );
};
