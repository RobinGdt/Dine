import styled from "styled-components";
import heroBgImage from "../assets/hero-bg-desktop.jpg";
import ContainerWithButon from "../../ContainerWithButon/ContainerWithButon";

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
`;

const HomeContainer = styled.div`
  padding: 11.45%;
`;

const HomePresentation = (): JSX.Element => {
  return (
    <StyledHome>
      <HomeContainer>
        <ContainerWithButon
          title="Exquisite dining since 1989"
          text="Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse."
          butonTitle="BOOK A TABLE"
        />
      </HomeContainer>
    </StyledHome>
  );
};

export default HomePresentation;
