import styled from "styled-components";
import heroBgImage from "../assets/hero-bg-desktop.jpg";
import heroBgImageTablet from "../assets/hero-bg-tablet.jpg";
import ContainerWithButton from "../../ContainerWithButon/ContainerWithButon";
import { useWindowSize } from "../../../utils/windowSizeUtil";

const StyledHome = styled.div<{ isMobile: boolean }>`
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-image: ${(props) =>
    props.isMobile ? `url(${heroBgImageTablet})` : `url(${heroBgImage})`};
  background-repeat: no-repeat;
  h1 {
    color: white;
  }
  p {
    color: white;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const HomeContainer = styled.div`
  padding: 10%;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
  }
`;

const HomePresentation = (): JSX.Element => {
  const isMobile = useWindowSize();

  return (
    <StyledHome isMobile={isMobile}>
      <HomeContainer>
        <ContainerWithButton
          title="Exquisite dining since 1989"
          text="Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse."
          butonTitle="BOOK A TABLE"
        />
      </HomeContainer>
    </StyledHome>
  );
};

export default HomePresentation;
