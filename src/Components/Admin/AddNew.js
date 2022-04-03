import React, { useState } from "react";
import ImageUploader from "./ImageUploader";
import { db } from "../../config/firebase";
import { doc, setDoc } from "firebase/firestore";
import {
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
  AgregarBtn,
  BackButton,
} from "./StyleElements";
import { useNavigate } from "react-router-dom";

/* -------------------- END DIVISORES ------------------------ */

const AddNew = () => {
  const [title, setTitle] = useState("");
  const [precio, setPrecio] = useState("");
  const [currency, setCurrency] = useState("");
  const navigate = useNavigate();
  // console.log("titleeee", title, precio);

  // Adding a new house/ appt/ or else.
  /*
  async function addingNew() {
    await setDoc(doc(db, "item"), {});
  }
  */

  return (
    <NewContainer>
      <NewWrapper>
        <BackButton onClick={() => navigate(-1)}>Regresar</BackButton>
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
