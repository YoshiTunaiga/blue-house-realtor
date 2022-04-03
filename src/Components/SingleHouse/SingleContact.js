import React from "react";
import {
  SingleContactContainer,
  FormParent,
  FormTitle,
  FormLabels,
  FormInput,
  FormTextarea,
  FormButton,
} from "./SingleHouseElements";

const SingleContact = ({ reference }) => {
  return (
    <SingleContactContainer>
      <FormParent
        action="https://formsubmit.co/vincentg547@gmail.com"
        method="POST"
      >
        <FormTitle>CONTACTANOS </FormTitle>
        <p>Referencia #{reference}</p>
        <FormLabels>Nombre</FormLabels>
        <FormInput
          type="text"
          placeholder="Your name..."
          name="name"
          required
        />
        <FormLabels>Email</FormLabels>
        <FormInput
          type="email"
          placeholder="Your email..."
          name="email"
          required
        />
        <FormLabels>Mensaje</FormLabels>
        <FormTextarea name="message" placeholder="Write a message" required />
        <FormButton type="submit">Enviar</FormButton>
      </FormParent>
    </SingleContactContainer>
  );
};

export default SingleContact;
