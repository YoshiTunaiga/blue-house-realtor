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
        <FormParent action="https://formsubmit.co/your@email.com" method="POST">
          <FormTitle>CONTACT US</FormTitle>
          <FormLabels>Name</FormLabels>
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
          <FormLabels>Message</FormLabels>
          <FormTextarea name="message" placeholder="Write a message" required />
          <FormButton type="submit">Contact Us</FormButton>
        </FormParent>
      </FormWrapper>
    </FormContainer>
  );
};

export default ContactUs;
