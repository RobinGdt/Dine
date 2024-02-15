import styled from "styled-components";
import BaseButton from "../BaseButton/BaseButton";

interface ContainerWithButonProps {
  title: string;
  text: string;
  butonTitle: string;
}

const StyledContainer = styled.div`
  width: 50%;
`;

const ContainerWithButon = ({
  title,
  text,
  butonTitle,
}: ContainerWithButonProps): JSX.Element => {
  return (
    <StyledContainer>
      <h1>{title}</h1>
      <p>{text}</p>
      <BaseButton title={butonTitle} width="50%" />
    </StyledContainer>
  );
};

export default ContainerWithButon;
