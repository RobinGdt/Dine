import styled from "styled-components";
import BaseButton, { MEDIUM } from "../BaseButton/BaseButton";

interface ContainerWithButonProps {
  title: string;
  text: string;
  butonTitle: string;
}

const StyledContainer = styled.div`
  width: 50%;
  flex-wrap: wrap;
  h1 {
    margin-block-end: 0;
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
  }
`;

const Title = styled.div`
  @media (max-width: 768px) {
    width: 50%;
  }
`;

const ContainerWithButon = ({
  title,
  text,
  butonTitle,
}: ContainerWithButonProps): JSX.Element => {
  return (
    <StyledContainer>
      <Title>
        <h1>{title}</h1>
      </Title>
      <p>{text}</p>
      <BaseButton to="/booking" title={butonTitle} width={MEDIUM} />
    </StyledContainer>
  );
};

export default ContainerWithButon;
