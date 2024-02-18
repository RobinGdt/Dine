import styled from "styled-components";
import heroBgImage from "../assets/hero-bg-desktop.jpg";
import heroBgImageTablet from "../assets/hero-bg-tablet.jpg";
import heroBgImageMobile from "../assets/hero-bg-mobile.jpg";
import ContainerWithButton from "../../ContainerWithButon/ContainerWithButon";
import { useWindowSize } from "../../../utils/windowSizeUtil";
import { Logo } from "../../../starter-code/images/icons/icon";

const StyledHome = styled.div`
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-image: url(${heroBgImage});
  background-repeat: no-repeat;
  h1 {
    color: white;
  }
  p {
    color: white;
  }

  @media (max-width: 768px) {
    display: flex;
    background-image: url(${heroBgImageTablet});
  }
  @media (max-width: 550px) {
    background-image: url(${heroBgImageMobile});
  }
`;

const HomeContainer = styled.div`
  padding: 10%;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    margin-top: 25%;
  }

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

const HomePresentation = (): JSX.Element => {
  const { isDesktop, isTablet, isMobile } = useWindowSize();

  return (
    <StyledHome>
      <HomeContainer>
        {!isDesktop && (isTablet || isMobile) && <Logo />}
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
