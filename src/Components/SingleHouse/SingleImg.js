import React, { useState, useRef } from "react";
import {
  HeroSection,
  HeroWrapper,
  HeroSlide,
  HeroSlider,
  HeroImage,
  SliderButton,
  PrevArrow,
  NextArrow,
  HeroContent,
} from "./SingleHouseElements";

function SingleImg({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <HeroSection>
      <HeroWrapper>
        {slides.map((slide, index) => (
          <HeroSlide key={index}>
            {index === current && (
              <HeroSlider>
                <HeroImage src={slide.img} alt="house" />
                <HeroContent>
                  <h2>
                    {index + 1}/ {slides.length}
                  </h2>
                </HeroContent>
              </HeroSlider>
            )}
          </HeroSlide>
        ))}
        <SliderButton>
          <PrevArrow onClick={prevSlide} />
          <NextArrow onClick={nextSlide} />
        </SliderButton>
      </HeroWrapper>
    </HeroSection>
  );
}

export default SingleImg;
