import React from "react";
import { Link, useNavigate } from "react-router-dom";

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
  HouseIcon,
  HouseText,
  BedIcon,
  BathIcon,
} from "./InfoElements";

const InfoSection = ({ houses }) => {
  const navigate = useNavigate();

  return (
    <InfoContainer>
      <InfoWrapper>
        <AlquilerContainer>
          {houses.map((item, idx) => (
            <AlquilerParent key={idx}>
              <Link
                to={{ pathname: `houses/${item.id}`, params: { item: item } }}
              >
                <AlquilerCard key={item.id}>
                  <AlquilerType>
                    <p>{item.type}</p>
                  </AlquilerType>
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
                      Precio: {""}
                      {item.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </AlquilerPrice>
                  </AlquilerInfo>
                </AlquilerCard>
              </Link>
            </AlquilerParent>
          ))}
        </AlquilerContainer>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default InfoSection;
