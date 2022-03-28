import React, { useState, useRef } from "react";
import styled from "styled-components";
import { colors } from "../config/colors";
import ImageUploader from "./ImageUploader";
import { auth, db } from "../config/firebase";
import { doc, setDoc } from "firebase/firestore";

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

/* -------------------- END DIVISORES ------------------------ */

const AddNew = () => {
  const [title, setTitle] = useState("");
  const [precio, setPrecio] = useState("");
  const [currency, setCurrency] = useState("");

  console.log("titleeee", title, precio);

  // Adding a new house/ appt/ or else.
  /*
  async function addingNew() {
    await setDoc(doc(db, "item"), {});
  }
  */

  return (
    <NewContainer>
      <NewWrapper>
        <NewParent>
          {/* ------------------------ TITLE & PRICE ------------------------- */}
          <FirstContainer>
            <div>
              <NewLabels>Titulo</NewLabels>
              <NewInput
                type="text"
                name="title"
                onChange={(text) => setTitle(text.target.value)}
              />
            </div>
            <OtherPrecio>
              <NewLabels>Precio $</NewLabels>
              <NewPrecio
                type="text"
                required
                name="precio"
                onChange={(text) => setTitle(text.target.value)}
              />
              <div>
                <Other>
                  <p>
                    <NewRadio
                      type="checkbox"
                      name="usd"
                      onChange={(text) => setCurrency("usd")}
                    />
                    USD
                    <NewRadio
                      type="checkbox"
                      name="dop"
                      onChange={(text) => setCurrency("dop")}
                    />
                    DOP
                  </p>
                </Other>
              </div>
            </OtherPrecio>
          </FirstContainer>
          {/* ------------------------ END TITLE & PRICE ------------------------- */}

          {/* ------------------------- DETAILS ------------------------- */}

          <SecondContainer>
            <NewLabels>Detalles</NewLabels>
            <div className="custom-select">
              <label htmlFor="rooms">Habitaciones:</label>

              <Selects name="room">
                <option value="0">🛏 Habitaciones</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </Selects>
            </div>
            <div className="custom-select">
              <label htmlFor="bano">Baño:</label>
              <Selects name="bano">
                <option value="0">🛁 Baño</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </Selects>
            </div>
            <div className="custom-select">
              <label htmlFor="parqueo">Parqueo:</label>

              <Selects name="parqueo">
                <option value="0">🚘 Parqueo</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </Selects>
            </div>
            <div className="custom-select">
              <label htmlFor="niveles">Niveles:</label>

              <Selects name="niveles">
                <option value="0"> Niveles</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </Selects>
            </div>
            <div className="custom-select">
              <label htmlFor="superficie">Superficie Solar:</label>

              <NewInput
                style={{ marginLeft: "10px", width: "40%" }}
                name="superficie"
                type="text"
                placeholder="260 mª"
              />
            </div>
          </SecondContainer>
          {/* ------------------------ END DETAILS ------------------------- */}

          {/* ------------------------- ADDRESSES ------------------------- */}

          <ThirdContainer>
            <NewLabels>Direccion</NewLabels>
            <div>
              <NewInput type="text" name="calle" placeholder="Calle" />

              <NewInput type="text" name="ciudad" placeholder="Ciudad" />

              <NewInput type="text" name="sector" placeholder="Sector" />
            </div>
          </ThirdContainer>
          {/* ------------------------ END ADDRESSES ------------------------- */}

          {/* ------------------------- DATOS INTERESANTES ------------------------- */}

          <FourthContainer>
            <NewLabels>Descripcion</NewLabels>
            <h3>Datos Interesantes</h3>
            <NewTextArea
              rows="8"
              cols="50"
              placeholder=" Agrega una breve descripcion aqui."
              wrap="soft"
            ></NewTextArea>
          </FourthContainer>
          {/* ------------------------- END DATOS INTERESANTES ------------------------- */}

          {/* ------------------------- IMAGE UPLOADER ------------------------- */}

          <FifthContainer>
            <ImageUploader />
          </FifthContainer>
          {/* ------------------------- END IMAGE UPLOADER ------------------------- */}
        </NewParent>
        <NewAgregarBtn>Agregar</NewAgregarBtn>
      </NewWrapper>
    </NewContainer>
  );
};

export default AddNew;
