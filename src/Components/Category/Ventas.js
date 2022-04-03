import React from "react";
import { houses } from "../../data/houses";
import {
  AlquilerContainer,
  AlquilerParent,
  AlquilerCard,
  AlquilerImg,
  AlquilerInfo,
  AlquilerCity,
  AlquilerPrice,
  HouseIcon,
  BedIcon,
  HouseText,
  BathIcon,
  MainTitle,
  Maindiv,
} from "./AlquilerElements";

const Ventas = () => {
  const items = houses.filter((house) => house.type === "venta");

  return (
    <div>
      <Maindiv>
        <MainTitle>Casas en Ventas</MainTitle>
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

export default Ventas;
