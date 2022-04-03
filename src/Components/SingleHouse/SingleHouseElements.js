import styled from "styled-components";
import { colors } from "../../config/colors";
import { css } from "styled-components";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";

const SingleContainer = styled.div`
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
const SingleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;

  width: 250vh;

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    /* background-color: green; */
    flex-direction: column;
    width: 100%;
  }
`;
const SingleParent = styled.div`
  /* background-color: yellow; */
  width: 350vh;
  margin: 5px;

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    /* background-color: yellow; */
    width: 100%;
  }
`;
const SingleContactContainer = styled.div`
  /* background-color: yellow; */
  width: 100%;
  /* margin: 5px 5px 5px 5px; */
  /* padding: 100px; */
`;

const SingleTitle = styled.h3`
  font-size: 30px;
  color: ${colors.primary};
`;

const SingleImg = styled.img``;

/* ------------- HERO SLIDES ---------------- */

const HeroSection = styled.section`
  height: 60vh;
  width: 100%;
  /* max-height: 1100px; */
  position: relative;
  overflow: hidden;

  /* @media screen and (max-device-width: 480px) {
    padding: 5px;
    width: 75%;
  } */

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    padding: 5px;
    width: 100%;
    height: 40vh;
  }
`;

const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 90%;
  }
`;

const HeroSlide = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`;

const HeroSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    content: "";
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(
      odeg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0.6) 100%
    );
  }
`;

const HeroContent = styled.div`
  position: absolute;
  z-index: 10;
  left: 10px;
  top: 10px;
  background-color: ${colors.primary}

  color: #fff;

  h2 {
    font-size: 18px;
    font-weight: 600;
  }

`;

const HeroImage = styled.img`
  position: absolute;

  width: 100%;
  height: 100%;
  /* object-fit: cover; */

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    position: relative;
    width: 100%;
    height: 100%;
  }
`;

const SliderButton = styled.div`
  position: absolute;
  /* background-color: white; */
  bottom: 20px;
  /* right: 20px; */
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  z-index: 10;
`;

const arrowButton = css`
  width: 50px;
  height: 50px;
  color: #fff;
  cursor: pointer;
  background-color: ${colors.primary};
  border-radius: 50px;
  padding: 10px;
  margin-right: 1rem;
  user-select: none;
  transition: 0.3s;

  &:hover {
    background: #cd853f;
    transform: scale(1.05);
  }
`;

const PrevArrow = styled(IoArrowBack)`
  ${arrowButton};
`;
const NextArrow = styled(IoArrowForward)`
  ${arrowButton};
`;

/* --------- END HERO SLIDES ------------- */

/* --------- HOUSE DETAILS --------- */

const DetailsContainer = styled.div`
  padding: 10px;
`;
const DetailsParent = styled.div`
  /* align-items: center; */
  justify-content: space-between;
  /* background-color: yellow; */
  padding: 10px;
  display: block;
  /* flex-direction: row;
  flex-wrap: wrap; */
  width: 80%;
  height: 20%;
  /* display: block; */
  margin-right: -15px;
  margin-left: -15px;
  /* flex-direction: row;
  flex-wrap: wrap; */
`;

const DetailWrap = styled.div`
  /* margin: 5px; */
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
`;
const DetailsTitle = styled.h3`
  border-bottom-style: solid;
  border-width: 1px;
`;
const Details4 = styled.div``;

/* --------- END HOUSE DETAILS --------- */

/* --------- Contact Use Styles --------- */

const FormContainer = styled.div`
  background-color: ${colors.primary};
  color: ${colors.white};

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    background-color: ${colors.white};
    color: ${colors.primary};
  }
  @media screen and (max-width: 768px) {
    /* padding: 100px 0; */
    background-color: ${colors.white};
    color: ${colors.primary};
  }
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  /* height: 860px; */
  /* width: 100%; */
  /* max-width: 1600px; */
  border-radius: 5px;
  padding: 20px;

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
  }
  @media screen and (max-width: 768px) {
    padding: 0 0px;
  }
`;

const FormParent = styled.form`
  margin: 0px 20px;
  background-color: ${colors.primary};
  color: ${colors.white};
  padding: 10px;
  width: 50%;
  height: 70%;
  /* margin-top: 70px; */
  display: flex;
  flex-direction: column;

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 90%;
    padding: 15px;
  }

  @media screen and (max-width: 768px) {
    margin-top: 5px;
  }
`;

const FormInput = styled.input`
  width: 100%;
  padding: 5px;
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

const FormTitle = styled.h4`
  font-weight: bold;
`;

const FormLabels = styled.label`
  padding: 12px 12px 12px 0;
  display: inline-block;
  font-weight: bold;
`;

const FormButton = styled.button`
  background-color: ${colors.white};
  color: ${colors.primary};
  margin-top: 10px;
  white-space: nowrap;
  outline: none;
  border: none;
  position: block;

  min-width: 100px;
  max-width: 200px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  padding: ${({ big }) => (big ? "16px 40px" : "14px 24px")};
  font-size: ${({ big }) => (big ? "20px" : "14px")};
  font-weight: bold;

  &:hover {
    transform: translateY(-2px);
  }

  @media screen and (max-width: 768px) {
    background-color: ${colors.white};
    color: ${colors.primary};
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
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

/* --------- END Contact Use Styles --------- */

export {
  SingleContactContainer,
  SingleContainer,
  SingleParent,
  SingleWrapper,
  SingleTitle,
  HeroSection,
  HeroWrapper,
  HeroSlide,
  HeroSlider,
  HeroImage,
  HeroContent,
  SliderButton,
  PrevArrow,
  NextArrow,
  FormContainer,
  FormWrapper,
  FormParent,
  FormTitle,
  FormLabels,
  FormInput,
  FormTextarea,
  FormButton,
  DetailsParent,
  DetailsContainer,
  DetailWrap,
  DetailsTitle,
};
