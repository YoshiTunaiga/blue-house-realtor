import React from "react";
import {
  AlquilerContainer,
  AlquilerCard,
  AlquilerParent,
  AlquilerImg,
  AlquilerInfo,
  AlquilerCity,
  AlquilerPrice,
  HouseIcon,
  BedIcon,
  HouseText,
  BathIcon,
  Maindiv,
  MainTitle,
} from "./AlquilerElements";
import { houses } from "../../data/houses";

const Alquiler = () => {
  const items = houses.filter((house) => house.type === "alquiler");

  return (
    <div>
      <Maindiv>
        <MainTitle>Casas en Alquiler</MainTitle>
      </Maindiv>
      <AlquilerContainer>
        {items.map((item, idx) => (
          <AlquilerParent key={idx}>
            <AlquilerCard key={item.id}>
              <AlquilerImg src={item.img} alt={item.alt} />
              <HouseIcon>
                <HouseText>
                  <BedIcon />
                  {item.rooms} Hab
                </HouseText>

                <HouseText>
                  <BathIcon />
                  {item.bath} Bano
                </HouseText>
              </HouseIcon>
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
    </div>
  );
};

export default Alquiler;
