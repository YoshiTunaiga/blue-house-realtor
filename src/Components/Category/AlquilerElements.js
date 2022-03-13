import styled from "styled-components";
import { colors } from "../../config/colors";

export const AlquilerContainer = styled.div`
  padding: 100px 0;
  display: flex;
  flex-direction: row;
  -webkit-display: box;
  -moz-display: box;
  -ms-display: flexbox;
  -webkit-display: flex;
  flex-wrap: wrap;
  margin: 0 0 0 20px;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    /* padding: 100px 0; */
  }

  ::before,
  ::after {
    box-sizing: border-box;
  }
`;

export const AlquilerParent = styled.div`
  display: flex;
  padding: 1rem;
  margin-bottom: 2rem;
  /* width: 100%; */
  @media (min-width: 40rem) {
    width: 50%;
  }
  @media (min-width: 56rem) {
    width: 33.3%;
  }
`;

export const AlquilerCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 80%;
  margin: 10px;
  border-radius: 6px;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  transition: transform 0.5s;
  -webkit-transition: transform 0.5s;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    -webkit-transform: scale(1.1);
    .card-image {
      opacity: 1;
    }
  }

  @media screen and (max-width: 768px) {
    margin: 0px;
    width: 100%;
  }
`;

export const AlquilerImg = styled.img`
  height: 200px;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 6px 6px 0px 0px;
  opacity: 0.91;
`;

export const AlquilerInfo = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 1rem;
  line-height: 1.5em;
`;

export const AlquilerCity = styled.h2`
  font-size: 18px;
  line-height: 1.1em;
  color: #32325d;
  margin-bottom: 0.2em;
`;

export const AlquilerPrice = styled.h3`
  font-size: 25px;
  line-height: 1.1em;
  color: #32325d;
  margin-bottom: 0.2em;
`;
