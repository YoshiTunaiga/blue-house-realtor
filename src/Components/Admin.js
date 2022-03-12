import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../config/colors";
import { GoPlus } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Footer/AuthContext";
import { houses } from "../data/houses";
import { Card, Button, Alert } from "react-bootstrap";

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
const other4 = styled.div``;

export const Admin = () => {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
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
  return (
    <AdminContainer>
      <AdminWrapper>
        <AdminHead>
          {error && <Alert variant="danger">{error}</Alert>}
          <AdminTitle>Casa Disponibles</AdminTitle>
          <AgregarBtn>
            <PlusSign /> Agregar Nuevo
          </AgregarBtn>
        </AdminHead>
        <AdminParent></AdminParent>
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </AdminWrapper>
    </AdminContainer>
  );
};
