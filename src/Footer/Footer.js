import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  FooterLinksContainer,
  FooterIcons,
  Facebook,
  Instagram,
  FooterText,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Company</FooterLinkTitle>
              <FooterLink to="/contact">About</FooterLink>
              <FooterLink to="/contact">FAQs</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Redes Sociales</FooterLinkTitle>
              <FooterIcons>
                <a
                  href="https://m.facebook.com/Blue-House-Realtor-101626261646335/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Facebook src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEU6VZ////82Up4zUJ1UbKx4ibswTpyMmsQ5V6EtTJupss8nSJnN0+WVosgqSpo4U56eqcyDksDj5vBwgbb3+PxFXqNabqt9jb3S2OhidbC9xdy3v9l0hLjZ3etLY6bq7fTEyt4dQpdJYqekrs2uttK97JEgAAADFUlEQVR4nO3c2XLiMBBAUUZmM3IsFsNgSIAk/P83TsLzjCNbI3c3de9rqlw+BV7VZDIhIiIiIiIiIiIiIiIiIlJeCM4VxbzsrJDey8G50s/3h91ss3jp7LdJYii8262rbfPr545eem/753y9qWJwjypzwqJuT7E6i0JX7459fOaEvn3r5zMmLPy5r8+W0L9Gn15MCkO9GuAzJHSh9xFoS1hcrsOAVoTzdsghaEhYTAcDbQjdfjjQhDAshx6DRoShrhKAFoR+nQI0ICzaJKABYZlyEFoQ1p9pQPVCd0m4UJgQ+lsiULvQXVKB2oW+1ysZg8KwTAYqF5ZpF3sDQr99cqFLvJ3RL0y+2usXDnw1Y0YYUh58TQiL3X8Aql57Kvschs3xdF/9pftC8fphj3vSalZ6X5tbA/axJ5rtzhdBem+HVEeeaKq55s+po1DHAW/vJj+/yfdifdxX1OYX9LuwjxIejH5Fv3LTGOBJ8eXup+KEH056P4cXJby+S+9mQlHCUy29mwlFCddz6d1MKEq4sXsmjRTOEGoOIUL9IUSoP4QI9YcQof4QItQfQoT6Q4hQR27+78qYucRX37GFR7Jrb65ddBQz1Hbv2sCjpSixvEcgEitlhcN+cNenRnZxagThm+wK6ghC4TXiEYSr8tmFwstvIwhb2XX+EYR72St+fmEj6htDuBW+a8svPArPauQXnp9e+CI8jZJfKP38mF8ofDnML2wuwsOn2YVX6ena7MKt9PRpduHt6YUr6eHM7MKF9HBmduGr9OvU7MKp9BR4bmEjDcwulJ9zzy2U/+1hbqH0s1N+4afsq8QRhPKT/LmFB+kb7+xC6Tua7ELhdacRhOLPTtmFCv7ZQOY14LP4xWISlh2FqFkM17UF8VPpF7Hjb3HTJl2nSwXAzp5jnqYrhAj1hxCh/hAi1B9ChPpDiFB/CBHqDyFC/SFEqD+ECPWHEKH+ECLUH0KE+kOIUH8IEeoPIUL9IUSoP4QI9YcQof4QItQfQoT6Q4hQfwgR6g8hQv0hRKg/hAj1hxCh/hAi1B9ChD36A+1ASVvVoq0WAAAAAElFTkSuQmCC" />
                </a>
                <a
                  href="https://www.instagram.com/bluehouserealtor/?utm_medium=copy_link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Instagram src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" />
                </a>
              </FooterIcons>
              <FooterText to="/">@2022, BlueHouseRealtor.com</FooterText>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/signin">Admin</FooterLink>
              <FooterLink to="/contact">Contactanos</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
