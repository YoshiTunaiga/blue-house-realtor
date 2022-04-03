import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Footer/AuthContext";
import { Card, Button, Alert } from "react-bootstrap";
import {
  AlquilerCard,
  AlquilerImg,
  AlquilerParent,
  HouseText,
} from "../Category/AlquilerElements";
import {
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
} from "./StyleElements";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";

export const Admin = () => {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const [houses, sethouses] = useState([]);
  const navigate = useNavigate();
  // const history = useHistory();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      navigate("/signin");
    } catch {
      setError("Failed to log out");
    }
  }

  const getAvailableHouses = async () => {
    let house = [];
    const itemsCollectionRef = collection(db, "item");
    const itemSnap = await getDocs(itemsCollectionRef);
    itemSnap.forEach((doc) => {
      house.push({ id: doc.id, ...doc.data() });
    });
    sethouses([...house]);
  };

  useEffect(() => {
    getAvailableHouses();
  }, []);

  function addNew() {
    navigate("/agregar");
  }

  return (
    <AdminContainer>
      <AdminWrapper>
        <AdminHead>
          {error && <Alert variant="danger">{error}</Alert>}
          <AdminTitle>Casa Disponibles</AdminTitle>
          <AgregarBtn onClick={addNew}>
            <PlusSign /> Agregar Nuevo
          </AgregarBtn>
        </AdminHead>
        <AdminParent>
          {houses.map((house) => (
            <AlquilerParent key={house.id}>
              <AlquilerCard>
                <AlquilerImg src={house.imgUrl} alt="casa" width={50} />
                <Other4>
                  <HouseText>{house.address.ciudad}</HouseText>
                  <HouseText>Reference Id: {house.id}</HouseText>
                </Other4>
              </AlquilerCard>
            </AlquilerParent>
          ))}
        </AdminParent>
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </AdminWrapper>
    </AdminContainer>
  );
};
