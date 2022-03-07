import React from "react";
import styled from "styled-components";
import { colors } from "../config/colors";

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
  margin: 0px 20px;
  height: 100%;
  width: 80%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${colors.primary} @media screen and (max-width: 768px) {
    margin-top: 5px;
  }
`;

const NewWrapper = styled.div`
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

const NewPrecio = styled.input`
  fill: none;
  background: transparent;
  background-color: transparent !important;
  color: ${colors.primary};
  padding-top: 5px;
  border: 1px solid ${colors.primary};
  outline: none;
  width: 30%;
  font-size: 20px;

  @media screen and (max-width: 768px) {
    width: 30%;
    color: ${colors.primary};
    border: 1px solid ${colors.primary};
  }
`;

const NewFirst = styled.div`
  display: flex;
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

function AddNew() {
  return (
    <NewContainer>
      <NewWrapper>
        <NewParent>
          <NewFirst>
            <div>
              <NewLabels>Titulo</NewLabels>
              <NewInput type="text" name="title" />
            </div>
            <div>
              <NewLabels>Precio</NewLabels>
              <NewPrecio type="number" name="precio" />
              <div>
                <div>
                  <NewLabels>
                    <NewInput type="radio" name="usd" />
                    USD
                  </NewLabels>
                  <NewLabels>
                    <NewInput type="radio" name="dop" />
                    DOP
                  </NewLabels>
                </div>
              </div>
            </div>
          </NewFirst>

          <NewLabels>Detalles</NewLabels>
          <div>
            <div class="custom-select">
              <select>
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
              </select>
            </div>
            <div class="custom-select">
              <select>
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
              </select>
            </div>
            <div class="custom-select">
              <select>
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
              </select>
            </div>
          </div>
          <div>
            <NewLabels>Direccion</NewLabels>
            <div>
              <NewInput type="text" name="calle" placeholder="Calle" />

              <NewInput type="text" name="ciudad" placeholder="Ciudad" />

              <NewInput type="text" name="sector" placeholder="Sector" />
            </div>
          </div>

          <NewLabels>Descripcion</NewLabels>
          <h3>Datos Interesantes</h3>
          <NewTextArea
            rows="8"
            cols="50"
            placeholder="Agrega una breve descripcion aqui."
            wrap="soft"
          ></NewTextArea>
          <NewAgregarBtn>Agregar</NewAgregarBtn>
        </NewParent>
      </NewWrapper>
    </NewContainer>
  );
}

export default AddNew;
