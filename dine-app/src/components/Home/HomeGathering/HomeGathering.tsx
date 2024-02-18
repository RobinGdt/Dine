import styled from "styled-components";
import famillyGathering from "../assets/family-gathering-desktop.jpg";
import famillyGatheringTablet from "../assets/family-gathering-tablet.jpg";
import famillyGatheringMobile from "../assets/family-gathering-mobile.jpg";
import specialEvents from "../assets/special-events-desktop.jpg";
import specialEventsTablet from "../assets/special-events-tablet.jpg";
import specialEventsMobile from "../assets/special-events-mobile.jpg";
import socialEvents from "../assets/social-events-desktop.jpg";
import socialEventsTablet from "../assets/social-events-tablet.jpg";
import socialEventsMobile from "../assets/social-events-mobile.jpg";
import BaseButton, { MEDIUM } from "../../BaseButton/BaseButton";
import { useState } from "react";
import { Grid, SimpleBar } from "../../../starter-code/images/icons/icon";
import useSlide from "../../../utils/useParallax";
import { useWindowSize } from "../../../utils/windowSizeUtil";
import { shadow } from "../../../GlobalStyle";
import { COLORS } from "../../../utils/palette";

const StyledHomeGathering = styled.div`
  padding: 10%;
`;

const HomeGatheringContainer = styled.div<{
  opacity: number;
  $istransitioning: boolean;
}>`
  display: flex;
  gap: 10%;
  transition: opacity 0.5s ease-out, transform 0.7s ease-out;
  transform: translateY(500px);

  &.visible {
    transform: translateY(0);
  }

  img {
    width: 100%;
    box-shadow: ${shadow};
    transition: opacity ${(props) => (props.$istransitioning ? "0.5s" : "0s")}
        ease-out,
      transform ${(props) => (props.$istransitioning ? "0.7s" : "0s")} ease-out;
    opacity: ${(props) => (props.$istransitioning ? 0 : 1)};
  }

  @media (max-width: 1001px) {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    img {
      width: 70%;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    justify-content: center;
  }
`;

const GridContainer = styled.div`
  position: absolute;
  left: -5%;
  top: -5%;

  @media (max-width: 550px) {
    display: none;
  }
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

  @media (max-width: 1001px) {
    text-align: center;
    align-items: center;
  }

  @media (max-width: 768px) {
    width: 75%;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 550px) {
    width: 100%;
  }
`;

const Subtitle = styled.h4<{ $isactive: boolean }>`
  margin-block-end: 5px;
  margin-block-start: 5px;
  cursor: pointer;
  color: ${(props) => (props.$isactive ? `${COLORS.CODGRAY[100]}` : "#cecece")};

  &:hover {
    color: var(--cod-gray-100);
  }
`;

const ChoiceContainer = styled.div`
  @media (max-width: 1001px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    order: -1;
    margin-top: 10%;
  }
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  @media (max-width: 550px) {
    width: 100%;
    display: flex;
    flex-direction: column;
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
  const { isTablet, isMobile } = useWindowSize();
  const { containerRef, opacity, isVisible } = useSlide();
  const [currentImage, setCurrentImage] = useState(
    isTablet ? famillyGatheringTablet : famillyGathering
  );
  const [$istransitioning, set$istransitioning] = useState(false);

  const titles = [
    {
      title: "FAMILY GATHERING",
      image: isTablet
        ? famillyGatheringTablet
        : isMobile
        ? famillyGatheringMobile
        : famillyGathering,
    },
    {
      title: "SPECIAL EVENTS",
      image: isTablet
        ? specialEventsTablet
        : isMobile
        ? specialEventsMobile
        : specialEvents,
    },
    {
      title: "SOCIAL EVENTS",
      image: isTablet
        ? socialEventsTablet
        : isMobile
        ? socialEventsMobile
        : socialEvents,
    },
  ];

  const handleImage = (image: string) => {
    set$istransitioning(true);
    setTimeout(() => {
      setCurrentImage(image);
      set$istransitioning(false);
    }, 200);
  };

  return (
    <StyledHomeGathering ref={containerRef}>
      <HomeGatheringContainer
        opacity={opacity}
        $istransitioning={$istransitioning}
        className={isVisible ? "visible" : ""}
      >
        <GridContainer>
          <Grid />
        </GridContainer>
        <img src={currentImage} alt={currentImage} />
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
              light={true}
              width={MEDIUM}
            />
          </DescriptionWrapper>
          <ChoiceContainer>
            {titles.map((item, index) => (
              <SubtitleContainer key={index}>
                <Subtitle
                  key={index}
                  onClick={() => handleImage(item.image)}
                  $isactive={currentImage === item.image}
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
