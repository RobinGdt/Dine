import styled from "styled-components";
import famillyGathering from "../assets/family-gathering-desktop.jpg";
import specialEvents from "../assets/special-events-desktop.jpg";
import socialEvents from "../assets/social-events-desktop.jpg";
import BaseButton from "../../BaseButton/BaseButton";
import { useState } from "react";
import { Grid, SimpleBar } from "../../../starter-code/images/icons/icon";
import useSlide from "../../../utils/useParallax";

const StyledHomeGathering = styled.div`
  padding: 10%;

  img {
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
`;

const HomeGatheringContainer = styled.div<{
  opacity: number;
  isTransitioning: boolean;
}>`
  display: flex;
  gap: 10%;
  transition: opacity 0.5s ease-out, transform 0.7s ease-out;
  transform: translateY(500px);

  &.visible {
    transform: translateY(0);
  }

  img {
    transition: opacity ${(props) => (props.isTransitioning ? "0.5s" : "0s")}
        ease-out,
      transform ${(props) => (props.isTransitioning ? "0.7s" : "0s")} ease-out;
    opacity: ${(props) => (props.isTransitioning ? 0 : 1)};
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    justify-content: center;
  }
`;

const ImageContainer = styled.div`
  @media (max-width: 768px) {
    margin-bottom: 10%;
  }
`;

const GridContainer = styled.div`
  position: absolute;
  left: -5%;
  top: -5%;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--48px);

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--30px);

  @media (max-width: 768px) {
    width: 75%;
    justify-content: center;
    align-items: center;
  }
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

const ChoiceContainer = styled.div`
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    order: -1;
  }
`;

const SubtitleContainer = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const HomeGathering = () => {
  const { containerRef, opacity, isVisible } = useSlide();
  const [currentImage, setCurrentImage] = useState(famillyGathering);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const titles = [
    { title: "FAMILY GATHERING", image: famillyGathering },
    { title: "SPECIAL EVENTS", image: specialEvents },
    { title: "SOCIAL EVENTS", image: socialEvents },
  ];

  const handleImage = (image: any) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImage(image);
      setIsTransitioning(false);
    }, 200);
  };

  return (
    <StyledHomeGathering ref={containerRef}>
      <HomeGatheringContainer
        opacity={opacity}
        isTransitioning={isTransitioning}
        className={isVisible ? "visible" : ""}
      >
        <ImageContainer>
          <GridContainer>
            <Grid />
          </GridContainer>
          <img src={currentImage} alt={currentImage} />
        </ImageContainer>
        <DescriptionContainer>
          <DescriptionWrapper>
            <div>
              <h2>Familly Gathering</h2>
              <p>
                We love catering for entire families. So please bring everyone
                along for a special meal with your loved ones. We’ll provide a
                memorable experience for all.
              </p>
            </div>
            <BaseButton
              to="/booking"
              title="BOOK A TABLE"
              width="40%"
              onLight={true}
            />
          </DescriptionWrapper>
          <ChoiceContainer>
            {titles.map((item, index) => (
              <SubtitleContainer>
                <Subtitle
                  onClick={() => handleImage(item.image)}
                  isActive={currentImage === item.image}
                >
                  {item.title}
                </Subtitle>
                {currentImage === item.image && <SimpleBar />}
              </SubtitleContainer>
            ))}
          </ChoiceContainer>
        </DescriptionContainer>
      </HomeGatheringContainer>
    </StyledHomeGathering>
  );
};

export default HomeGathering;
