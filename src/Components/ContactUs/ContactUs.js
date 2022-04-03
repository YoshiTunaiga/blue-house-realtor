import React from "react";
import {
  FormContainer,
  FormWrapper,
  FormParent,
  FormTitle,
  FormLabels,
  FormInput,
  FormTextarea,
  FormButton,
} from "./ContactElements";

const ContactUs = () => {
  return (
    <FormContainer>
      <FormWrapper>
        <FormParent
          action="https://formsubmit.co/vincentg547@gmail.com"
          method="POST"
        >
          <FormTitle>CONTACTANOS</FormTitle>
          <FormLabels>Nombre</FormLabels>
          <FormInput
            type="text"
            placeholder="Su Nombre..."
            name="name"
            required
          />
          <FormLabels>Email</FormLabels>
          <FormInput
            type="email"
            placeholder="Su correo electronico..."
            name="email"
            required
          />
          <FormLabels>Mensaje</FormLabels>
          <FormTextarea
            name="message"
            placeholder="Escriba mensaje aqui"
            required
          />
          <FormButton type="submit">Contactanos</FormButton>
        </FormParent>
      </FormWrapper>
    </FormContainer>
  );
};

export default ContactUs;
