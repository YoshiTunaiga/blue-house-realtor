import styled from "styled-components";
import { colors } from "../../config/colors";
import { GoPlus } from "react-icons/go";

const AdminContainer = styled.div`
  background-color: ${colors.white};
  color: ${colors.primary};
  height: 100%;
  width: 100%;
  padding: 100px 0;

  @media screen and (max-width: 768px) {
    padding: 80px 0;
    background-color: ${colors.white};
    color: ${colors.primary};
  }
`;
const AdminWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  height: 100%;
  width: 100%;
  max-width: 1600px;
  border-radius: 5px;
  padding: 20px;

  @media screen and (max-width: 768px) {
    padding: 0 0px;
  }
`;

const AdminHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AdminTitle = styled.h2`
  font-weight: bold;
`;

const AdminParent = styled.div`
  padding: 10px;
  margin-top: 10px;
  border: 2px solid ${colors.primary};
`;

const AdminPics = styled.img`
  width: 50%;
  height: 50%;
`;

const AgregarBtn = styled.button`
  padding: 10px;
  border-radius: 10px;
  background-color: ${colors.primary};
  color: ${colors.white};
`;

const PlusSign = styled(GoPlus)`
  width: 20px;
  height: 20px;
  margin-left: 0.3rem;
`;

const AdminCards = styled.div``;
const Other4 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

/* ------------- MAIN CONTAINERS  ---------------*/
const NewContainer = styled.div`
  background-color: ${colors.white};
  color: ${colors.primary};
  height: 100%;
  width: 100%;
  padding: 100px 0;

  @media screen and (max-width: 768px) {
    padding: 80px 0;
    background-color: ${colors.white};
    color: ${colors.primary};
  }
`;

const NewParent = styled.div`
  margin: 0px 0px;
  height: 100%;
  width: 100%;
  margin-top: 20px;
  /* display: flex; */
  /* flex-direction: column; */
  border: 1px solid ${colors.primary} @media screen and (max-width: 768px) {
    margin-top: 5px;
  }
  background-color: #7e9fb8;

  // for grid
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  /* grid-gap: 5px; */
`;

const NewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  height: 100vh;
  width: 100%;
  max-width: 1600px;
  border-radius: 5px;
  padding: 20px;
  background-color: #c0c9cf;

  @media screen and (max-width: 768px) {
    padding: 0 0px;
  }
`;
/* ------------- END MAIN CONTAINERS  ---------------*/

const NewLabels = styled.label`
  padding: 12px 12px 12px 0;
  display: inline-block;
  font-weight: bold;
`;

const NewInput = styled.input`
  fill: none;
  background: transparent;
  background-color: transparent !important;
  color: ${colors.primary};
  padding-top: 10px;
  border: none;
  border-bottom: 1px solid ${colors.primary};
  outline: none;
  width: 70%;
  font-size: 20px;

  @media screen and (max-width: 768px) {
    width: 70%;
    color: ${colors.primary};
    border-bottom: 1px solid ${colors.primary};
  }
`;

const NewRadio = styled.input`
  margin: 0 5px;
`;

const NewPrecio = styled.input`
  fill: none;
  background: transparent;
  background-color: transparent !important;
  color: ${colors.primary};
  /* padding-top: 5px; */
  border: 1px solid ${colors.primary};
  outline: none;
  width: 50%;
  height: 30%;
  font-size: 20px;

  @media screen and (max-width: 768px) {
    width: 30%;
    color: ${colors.primary};
    border: 1px solid ${colors.primary};
  }
`;

const OtherPrecio = styled.div`
  border: 2px solid #956342;
`;

const Other = styled.div`
  margin: 5px;
`;

const NewTextArea = styled.textarea`
  border-radius: 10px;
`;

const NewAgregarBtn = styled.button`
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  background-color: ${colors.primary};
  color: ${colors.white};
  width: 100px;
`;

const Selects = styled.select`
  margin-left: 5px;
`;

/* -------------------- DIVISORES ------------------------ */
const FirstContainer = styled.div`
  padding: 10px;
  border: 2px solid #3577aa;
`;

const SecondContainer = styled.div`
  border: 2px solid #425995;
  padding: 10px;
`;

const ThirdContainer = styled.div`
  padding: 10px;
  border: 2px solid #524295;
`;

const FourthContainer = styled.div`
  border: 2px solid #956342;
  padding: 10px;
`;

const FifthContainer = styled.div`
  border: 2px solid #956342;

  padding: 10px;
`;

const BackButton = styled.button`
  width: 100px;
  padding: 5px;
`;

export {
  AdminContainer,
  AdminWrapper,
  AdminHead,
  AdminTitle,
  AdminParent,
  AdminPics,
  AgregarBtn,
  PlusSign,
  AdminCards,
  Other4,
  // -------AddNew--------
  NewContainer,
  NewAgregarBtn,
  NewParent,
  NewWrapper,
  NewLabels,
  NewInput,
  NewRadio,
  NewPrecio,
  OtherPrecio,
  Other,
  NewTextArea,
  Selects,
  FirstContainer,
  SecondContainer,
  ThirdContainer,
  FourthContainer,
  FifthContainer,
  BackButton,
};
