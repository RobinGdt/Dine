import styled from "styled-components";
import famillyGathering from "../assets/family-gathering-desktop.jpg";
import specialEvents from "../assets/special-events-desktop.jpg";
import socialEvents from "../assets/social-events-desktop.jpg";
import BaseButton from "../../BaseButton/BaseButton";
import { useState } from "react";
import { SimpleBar } from "../../../starter-code/images/icons/icon";
import useSlide from "../../../utils/useParallax";

const StyledHomeGathering = styled.div`
  padding: 11.45%;

  img {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
`;

const HomeGatheringContainer = styled.div<{
  opacity: number;
}>`
  display: flex;
  gap: 10%;
  transition: opacity 0.5s ease-out, transform 0.7s ease-out;
  transform: translateY(500px);

  &.visible {
    transform: translateY(0);
  }
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10%;
`;

const Subtitle = styled.h4<{ isActive: boolean }>`
  margin-block-end: 5px;
  margin-block-start: 5px;
  cursor: pointer;
  color: ${(props) => (props.isActive ? "black" : "#cecece")};

  &:hover {
    color: var(--cod-gray-100);
  }
`;

const ChoiceContainer = styled.div``;

const HomeGathering = () => {
  const { containerRef, opacity, isVisible } = useSlide();
  const [currentImage, setCurrentImage] = useState(famillyGathering);

  const titles = [
    { title: "FAMILY GATHERING", image: famillyGathering },
    { title: "SPECIAL EVENTS", image: specialEvents },
    { title: "SOCIAL EVENTS", image: socialEvents },
  ];

  const handleImage = (image: any) => {
    setCurrentImage(image);
  };

  return (
    <StyledHomeGathering ref={containerRef}>
      <HomeGatheringContainer
        opacity={opacity}
        className={isVisible ? "visible" : ""}
      >
        <img src={currentImage} alt={currentImage} />
        <DescriptionContainer>
          <div className="">
            <h2>Familly Gathering</h2>
            <p>
              We love catering for entire families. So please bring everyone
              along for a special meal with your loved ones. We’ll provide a
              memorable experience for all.
            </p>
            <BaseButton title="BOOK A TABLE" width="40%" onLight={true} />
          </div>
          <ChoiceContainer>
            {titles.map((item, index) => (
              <>
                <Subtitle
                  key={index}
                  onClick={() => handleImage(item.image)}
                  isActive={currentImage === item.image}
                >
                  {item.title}
                </Subtitle>
                <SimpleBar />
              </>
            ))}
          </ChoiceContainer>
        </DescriptionContainer>
      </HomeGatheringContainer>
    </StyledHomeGathering>
  );
};

export default HomeGathering;
