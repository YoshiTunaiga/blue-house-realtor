import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  AlquilerWrapper,
  AlquilerContainer,
  AlquilerCard,
  AlquilerParent,
  AlquilerContent,
  AlquilerImg,
  AlquilerInfo,
  AlquilerCity,
  AlquilerPrice,
  AlquilerType,
} from "./InfoElements";
// import ViewVentas from "./ViewVentas";
// import { ViewAlquiler } from "./ViewAlquiler";

const InfoSection = ({ houses }) => {
  // const allVenta = houses.filter((house) => house.type === "venta");
  // const allAlquiler = houses.filter((house) => house.type === "alquiler");

  return (
    <InfoContainer>
      <InfoWrapper>
        {/* <ViewAlquiler houses={houses} /> */}
        <AlquilerContainer>
          {houses.map((item, idx) => (
            <AlquilerParent key={idx}>
              <AlquilerCard key={item.id}>
                <AlquilerType>
                  <p>{item.type}</p>
                </AlquilerType>
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
      </InfoWrapper>
    </InfoContainer>
  );
};

export default InfoSection;
