import React from "react";
import {
  SingleContact,
  SingleContainer,
  SingleParent,
  SingleWrapper,
  SingleTitle,
} from "./SingleHouseElements";

const SingleHouse = () => {
  // console.log("hello =>>", props.match.params);
  return (
    <SingleContainer>
      <SingleWrapper>
        <SingleParent>
          <SingleTitle>VENTA</SingleTitle>
        </SingleParent>
        <SingleContact>
          <SingleTitle>CONTACTO</SingleTitle>
        </SingleContact>
      </SingleWrapper>
    </SingleContainer>
  );
};

export default SingleHouse;
