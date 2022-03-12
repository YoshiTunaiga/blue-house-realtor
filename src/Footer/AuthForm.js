import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { colors } from "../config/colors";
import { authenticate } from "../redux/auth";

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

class AuthForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleLogin(evt) {
    evt.preventDefault();
    console.log("logged!!!");
  }

  render() {
    return (
      <AuthContainer>
        <FormWrapper>
          <AuthForms>
            <AuthWrapper>
              <FormLabels htmlFor="username">Email Address</FormLabels>
              <br />
              <AuthInput
                id="email"
                name="email"
                type="text"
                variant="outlined"
                placeholder="Email..."
              />
            </AuthWrapper>
            <AuthWrapper>
              <FormLabels htmlFor="password">Password</FormLabels>
              <br />
              <AuthInput
                id="password"
                name="password"
                type="password"
                placeholder="Password..."
              />
            </AuthWrapper>
            <AuthWrapper>
              <FormButton>Login</FormButton>
            </AuthWrapper>
          </AuthForms>
        </FormWrapper>
      </AuthContainer>
    );
  }
}

const mapLogin = (state) => {
  return {
    name: "login",
    displayName: "Login",
    error: state.auth.error,
  };
};

const mapDispatch = (dispatch, { history }) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const username = evt.target.username.value;
      const password = evt.target.password.value;
      dispatch(authenticate(username, password, formName, history));
    },
  };
};

export const Login = connect(mapLogin, mapDispatch)(AuthForm);
