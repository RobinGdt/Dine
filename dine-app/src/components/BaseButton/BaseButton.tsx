import styled from "styled-components";
import { COLORS } from "../../utils/palette";
import { Link } from "react-router-dom";

interface BaseButtonProps {
  title: string;
  width: string;
  disabled?: boolean;
  onLight?: boolean;
  to?: string;
  type?: "submit" | "button";
  onClick?: () => void;
}

const StyledButton = styled.div<{
  width: string;
  disabled?: boolean;
  onLight?: boolean;
}>`
  width: ${(props) => props.width || "40%"};

  &:hover {
    background-color: ${(props) => (props.disabled ? "transparent" : "white")};
  }
`;

const Button = styled.button<{ disabled?: boolean; onLight?: boolean }>`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
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

  h4 {
    margin-block-end: 15px;
    margin-block-start: 15px;
  }
`;

const LinkButton = styled(Link)<{ disabled?: boolean; onLight?: boolean }>`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
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

  h4 {
    margin-block-end: 15px;
    margin-block-start: 15px;
  }
`;

const BaseButton = ({
  title,
  width,
  disabled,
  onLight,
  type,
  to,
  onClick,
}: BaseButtonProps): JSX.Element => {
  return (
    <StyledButton width={width} disabled={disabled} onLight={onLight}>
      {to ? (
        <LinkButton
          to={to}
          onClick={onClick}
          disabled={disabled}
          onLight={onLight}
        >
          <h4>{title}</h4>
        </LinkButton>
      ) : (
        <Button
          type={type}
          onClick={onClick}
          disabled={disabled}
          onLight={onLight}
        >
          <h4>{title}</h4>
        </Button>
      )}
    </StyledButton>
  );
};

export default BaseButton;
