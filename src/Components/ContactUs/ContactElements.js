import styled from "styled-components";
import { colors } from "../../config/colors";

export const FormContainer = styled.div`
  background-color: ${colors.primary};
  color: ${colors.white};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
    background-color: ${colors.white};
    color: ${colors.primary};
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1600px;
  border-radius: 5px;
  padding: 20px;

  @media screen and (max-width: 768px) {
    padding: 0 0px;
  }
`;

export const FormParent = styled.form`
  margin: 0px 20px;
  margin-top: 70px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    margin-top: 5px;
  }
`;

export const FormInput = styled.input`
  width: 40%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
  }
`;

export const FormTitle = styled.h1`
  font-weight: bold;
`;

export const FormLabels = styled.label`
  padding: 12px 12px 12px 0;
  display: inline-block;
  font-weight: bold;
`;

export const FormButton = styled.button`
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

export const FormTextarea = styled.textarea`
  width: 40%;
  height: 200px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
  }
`;
