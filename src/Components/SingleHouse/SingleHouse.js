import React from "react";
import SingleContact from "./SingleContact";
import {
  SingleContainer,
  SingleParent,
  SingleWrapper,
  SingleTitle,
  DetailsContainer,
  DetailsParent,
  DetailWrap,
  DetailsTitle,
} from "./SingleHouseElements";
import SingleImg from "./SingleImg";

const house = {
  id: 14242,
  price: 9000000,
  rooms: 4,
  bath: 2,
  niveles: 1,
  photoList: [
    {
      img: "https://indominicana.com/private/properties/files/23872/medium/20220125151446cylLFGs1.jpg",
    },
    {
      img: "https://indominicana.com/private/properties/files/23872/medium/20220125151445jw6oA2uj.jpg",
    },
    {
      img: "https://indominicana.com/private/properties/files/23872/medium/20220125151446m7mMXU6G.jpg",
    },
  ],
  address: {
    line: "Calle 12, El Ensueno",
    ciudad: "Santiago de los Caballeros",
    provincia: "Santiago",
  },
  category: "casa",
  type: "venta",
  available: "yes",
  parqueo: 2,
  alt: "casa",
  img: "https://indominicana.com/private/properties/files/23872/medium/20220125151446cylLFGs1.jpg",
};

const SingleHouse = () => {
  return (
    <SingleContainer>
      <div style={{ padding: 10 }}>
        <SingleTitle>
          {house.address.line}, {house.address.ciudad}
        </SingleTitle>
      </div>
      <SingleWrapper>
        <SingleParent>
          <SingleImg slides={house.photoList} />
          <HouseDetails item={house} />
        </SingleParent>
        <SingleContact reference={house.id} />
      </SingleWrapper>
    </SingleContainer>
  );
};

/* --------- DETAILs OF THE ITEM  ---------- */
const HouseDetails = ({ item }) => {
  return (
    <DetailsContainer>
      <DetailsTitle>Detalles</DetailsTitle>
      <DetailsParent>
        <DetailWrap>
          <p>
            <strong>Ciudad:</strong> {item.address.ciudad}
          </p>
        </DetailWrap>
        <DetailWrap>
          <p>
            <strong>Provincia:</strong> {item.address.provincia}
          </p>
        </DetailWrap>
        <DetailWrap>
          <p>
            <strong>Calle:</strong> {item.address.line}
          </p>
        </DetailWrap>
        <DetailWrap>
          <p>
            <strong>Parqueo:</strong> {item.parqueo}
          </p>
        </DetailWrap>
        <DetailWrap>
          <p>
            <strong>Habitaciones:</strong> {item.rooms}
          </p>
        </DetailWrap>
        <DetailWrap>
          {" "}
          <p>
            <strong>Baños:</strong> {item.bath}
          </p>
        </DetailWrap>
        <DetailWrap>
          {" "}
          <p>
            <strong>Niveles:</strong> {item.niveles}
          </p>
        </DetailWrap>
      </DetailsParent>
    </DetailsContainer>
  );
};

export default SingleHouse;
