import React from "react";
import { InfoContainer, InfoWrapper } from "./InfoElements";
import ViewVentas from "./ViewVentas";
import { ViewAlquiler } from "./ViewAlquiler";

const InfoSection = ({ houses }) => {
  const allVenta = houses.filter((house) => house.type === "venta");
  const allAlquiler = houses.filter((house) => house.type === "alquiler");

  return (
    <InfoContainer>
      <InfoWrapper>
        <ViewVentas houses={allVenta} />
        <ViewAlquiler houses={allAlquiler} />
      </InfoWrapper>
    </InfoContainer>
  );
};

export default InfoSection;
