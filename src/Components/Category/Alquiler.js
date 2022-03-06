import React from "react";
import {
  AlquilerWrapper,
  AlquilerContainer,
  AlquilerCard,
  AlquilerParent,
  AlquilerContent,
  AlquilerImg,
  AlquilerInfo,
  AlquilerCity,
  AlquilerPrice,
} from "./AlquilerElements";
import { houses } from "../../data/houses";

const Alquiler = () => {
  const items = houses.filter((house) => house.type === "alquiler");

  return (
    <AlquilerContainer>
      {items.map((item, idx) => (
        <AlquilerParent key={idx}>
          <AlquilerCard key={item.id}>
            <AlquilerImg src={item.img} alt={item.alt} />
            <AlquilerInfo>
              <AlquilerCity>{item.address.ciudad}</AlquilerCity>
              <AlquilerPrice>
                {item.price.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </AlquilerPrice>
            </AlquilerInfo>
          </AlquilerCard>
        </AlquilerParent>
      ))}
    </AlquilerContainer>
  );
};

export default Alquiler;
