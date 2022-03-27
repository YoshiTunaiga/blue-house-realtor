import React from "react";
import {
  SingleContactContainer,
  FormContainer,
  FormWrapper,
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
      <FormParent action="https://formsubmit.co/your@email.com" method="POST">
        <FormTitle>CONTACT US </FormTitle>
        <p>Reference #{reference}</p>
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
    </SingleContactContainer>
  );
};

export default SingleContact;
