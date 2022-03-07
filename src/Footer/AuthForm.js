import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { colors } from "../config/colors";
import { useNavigate } from "react-router-dom";

const AuthContainer = styled.div`
  background-color: ${colors.primary};
  color: ${colors.white};
  height: 100%;
  padding: 100px 0;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
    background-color: ${colors.white};
    color: ${colors.primary};
  }
`;
const AuthForms = styled.div`
  margin: 0px 20px;
  height: 100%;
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${colors.primary} @media screen and (max-width: 768px) {
    margin-top: 5px;
  }
`;

const AuthWrapper = styled.div`
  margin: 1em;
  display: inline-block;
`;

const AuthInput = styled.input`
  fill: none;
  background: transparent;
  background-color: transparent !important;
  color: ${colors.white};
  padding-top: 10px;
  border: none;
  outline: none;
  border-bottom: 1px solid white;
  width: 70%;

  @media screen and (max-width: 768px) {
    width: 70%;
    color: ${colors.primary};
    border-bottom: 1px solid ${colors.primary};

    /* padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical; */
  }
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  height: 500px;
  width: 500px;
  max-width: 1600px;
  border-radius: 5px;
  padding: 20px;

  @media screen and (max-width: 768px) {
    padding: 0 0px;
  }
`;

const FormButton = styled.button`
  background-color: ${colors.white};
  color: ${colors.primary};
  margin-top: 10px;
  white-space: nowrap;
  outline: none;
  border: none;
  min-width: 100px;
  max-width: 200px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ big }) => (big ? "16px 40px" : "14px 24px")};
  font-size: ${({ big }) => (big ? "20px" : "14px")};
  font-weight: bold;

  &:hover {
    transform: translateY(-2px);
  }

  @media screen and (max-width: 768px) {
    background-color: ${colors.primary};
    color: ${colors.white};
  }
`;

const FormLabels = styled.label`
  padding: 12px 12px 12px 0;
  display: inline-block;
  font-weight: bold;
`;

function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  return (
    <AuthContainer>
      <FormWrapper>
        <AuthForms>
          <AuthWrapper>
            <FormLabels htmlFor="username">Email Address</FormLabels>
            <br />
            <AuthInput
              name="email"
              type="text"
              placeholder="Email..."
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </AuthWrapper>
          <AuthWrapper>
            <FormLabels htmlFor="password">Password</FormLabels>
            <br />
            <AuthInput
              name="password"
              type="password"
              placeholder="Password..."
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </AuthWrapper>
          <AuthWrapper>
            <FormButton type="submit">Login</FormButton>
          </AuthWrapper>
        </AuthForms>
      </FormWrapper>
    </AuthContainer>
  );
}

export default AuthForm;
