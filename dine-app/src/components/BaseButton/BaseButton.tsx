import styled from "styled-components";
import { COLORS } from "../../utils/palette";

interface BaseButtonProps {
  title: string;
  width: string;
  disabled?: boolean;
  onLight?: boolean;
}

const StyledButton = styled.div<{
  width: string;
  disabled?: boolean;
  onLight?: boolean;
}>`
  width: ${(props) => props.width};
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${(props) => (props.disabled ? "transparent" : "white")};
    color: ${(props) =>
      props.disabled
        ? `${COLORS.SHUTTLEGRAY[100]}`
        : props.onLight
        ? "white"
        : `${COLORS.MIRAGE[100]}`};
  }
`;

const Button = styled.button<{ disabled?: boolean; onLight?: boolean }>`
  width: 100%;
  border: ${(props) =>
    props.disabled
      ? `1px solid ${COLORS.SHUTTLEGRAY[100]}`
      : props.onLight
      ? `1px solid ${COLORS.MIRAGE[100]}`
      : "1px solid white"};
  background-color: transparent;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  color: ${(props) =>
    props.disabled
      ? `${COLORS.SHUTTLEGRAY[100]}`
      : props.onLight
      ? `${COLORS.MIRAGE[100]}`
      : `white`};

  &:hover {
    background-color: ${(props) =>
      props.disabled ? "transparent" : props.onLight ? "black" : "white"};
    color: ${(props) =>
      props.disabled
        ? `${COLORS.SHUTTLEGRAY[100]}`
        : props.onLight
        ? "white"
        : `${COLORS.MIRAGE[100]}`};
  }
`;

const BaseButton = ({
  title,
  width,
  disabled,
  onLight,
}: BaseButtonProps): JSX.Element => {
  return (
    <StyledButton width={width} disabled={disabled} onLight={onLight}>
      <Button disabled={disabled} onLight={onLight}>
        <h4>{title}</h4>
      </Button>
    </StyledButton>
  );
};

export default BaseButton;
