import React from "react";
import {
  SingleContact,
  SingleContainer,
  SingleParent,
  SingleWrapper,
} from "./SingleHouseElements";

const SingleHouse = () => {
  return (
    <SingleContainer>
      <SingleWrapper>
        <SingleParent></SingleParent>
        <SingleContact></SingleContact>
      </SingleWrapper>
    </SingleContainer>
  );
};

export default SingleHouse;
