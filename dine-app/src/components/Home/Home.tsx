import styled from "styled-components";
import heroBgImage from "./assets/hero-bg-desktop@2x.jpg";
import { Logo } from "../../starter-code/images/icons/icon";
import BaseButton from "../BaseButton/BaseButton";

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

const HomeContainer = styled.div``;

const Home = (): JSX.Element => {
  return (
    <StyledHome>
      <Logo />
      <HomeContainer>
        <h1>Exquisite dining since 1989</h1>
        <p>
          Experience our seasonal menu in beautiful country surroundings. Eat
          the freshest produce from the comfort of our farmhouse.
        </p>
        <BaseButton title="BOOK A TABLE" width="50%" />
      </HomeContainer>
    </StyledHome>
  );
};

export default Home;
