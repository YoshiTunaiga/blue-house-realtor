import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../config/colors";

const AuthContainer = styled.div`
  background-color: ${colors.primary};
  color: ${colors.white};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
    background-color: ${colors.white};
    color: ${colors.primary};
  }
`;
const AuthForms = styled.form`
  margin: 0px 20px;
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
  padding-top: 10px;
  border: none;
  outline: none;
  border-bottom: 1px solid black;
  width: 70%;

  @media screen and (max-width: 768px) {
    width: 80%;
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

const AuthForm = (props) => {
  const { name, displayName, handleSubmit, error } = props;

  return (
    <AuthContainer>
      <FormWrapper>
        {" "}
        <AuthForms onSubmit={handleSubmit} name={name}>
          <AuthWrapper>
            <FormLabels htmlFor="username">Username</FormLabels>
            <br />
            <AuthInput
              className="username-input input"
              name="username"
              type="text"
            />
          </AuthWrapper>
          <AuthWrapper>
            <FormLabels htmlFor="password">Password</FormLabels>
            <br />
            <AuthInput
              className="password-input input"
              name="password"
              type="password"
            />
          </AuthWrapper>
          <AuthWrapper>
            <FormButton className="login-button" type="submit">
              Login
            </FormButton>
          </AuthWrapper>
        </AuthForms>
      </FormWrapper>
    </AuthContainer>
  );
};

export default AuthForm;
