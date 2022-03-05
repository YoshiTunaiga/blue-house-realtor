import React from "react";
import {
  AlquilerWrapper,
  AlquilerContainer,
  AlquilerCard,
  AlquilerParent,
  AlquilerContent,
  AlquilerImg,
} from "./AlquilerElements";
import { houses } from "../../data/houses";

const Alquiler = () => {
  const items = houses.filter((house) => house.type === "alquiler");

  return (
    <AlquilerContainer>
      <AlquilerWrapper>
        <AlquilerContent>
          {items.map((item, idx) => (
            <AlquilerParent key={idx}>
              <AlquilerCard key={item.id}>
                <AlquilerImg src={item.img} alt={item.alt} />
              </AlquilerCard>
            </AlquilerParent>
          ))}
        </AlquilerContent>
      </AlquilerWrapper>
    </AlquilerContainer>
  );
};

export default Alquiler;
