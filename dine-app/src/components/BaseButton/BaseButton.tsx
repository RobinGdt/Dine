import styled from "styled-components";
import { COLORS } from "../../utils/palette";
import { Link } from "react-router-dom";

export const SMALL = "165px";
export const MEDIUM = "245px";
export const LARGE = "100%";

interface BaseButtonProps {
  title: string;
  width: string;
  disabled?: boolean;
  light?: boolean;
  lightoutlined?: boolean;
  darkoutlined?: boolean;
  to?: string;
  type?: "submit" | "button";
  onClick?: () => void;
}

const StyledButton = styled.div<{
  width: string;
  disabled?: boolean;
  "data-light"?: string;
  "light-outlined"?: string;
  "$dark-outlined"?: string;
}>`
  width: ${(props) => props.width};
`;

const Button = styled.button<{
  disabled?: boolean;
  light?: boolean;
  lightoutlined?: boolean;
  darkoutlined?: boolean;
}>`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: white;
  border: 1px solid white;
  background-color: transparent;
  cursor: pointer;

  h4 {
    margin-block-end: 15px;
    margin-block-start: 15px;
  }
  &[disabled="true"] {
    color: ${COLORS.SHUTTLEGRAY[100]};
    border: 1px solid ${COLORS.SHUTTLEGRAY[100]};
  }
  &[data-light="true"] {
    background-color: ${COLORS.MIRAGE[100]};
    color: white;
    border: 1px solid ${COLORS.MIRAGE[100]};

    &:hover {
      background-color: white;
      color: ${COLORS.MIRAGE[100]};
      border: 1px solid ${COLORS.MIRAGE[100]};
    }
  }
  &[light-outlined="true"] {
    color: ${COLORS.SHUTTLEGRAY[100]};
    border: 1px solid ${COLORS.SHUTTLEGRAY[100]};
    background-color: transparent;

    &:hover {
      background-color: ${COLORS.MIRAGE[100]};
      border: 1px solid ${COLORS.MIRAGE[100]};
      color: white;
    }
  }
  &[$dark-outlined="true"] {
    color: white;
    border: 1px solid white;

    &:hover {
      background-color: white;
      border: 1px solid white;
      color: ${COLORS.MIRAGE[100]};
    }
  }
`;

const LinkButton = styled(Link)<{
  disabled?: boolean;
  light?: boolean;
  lightoutlined?: boolean;
  darkoutlined?: boolean;
}>`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: white;
  border: 1px solid white;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.disabled ? "transparent" : "white")};
    color: ${COLORS.MIRAGE[100]} !important;
  }

  h4 {
    margin-block-end: 15px;
    margin-block-start: 15px;
  }
  &[disabled="true"] {
    color: ${COLORS.SHUTTLEGRAY[100]};
    border: 1px solid ${COLORS.SHUTTLEGRAY[100]};
  }
  &[data-light="true"] {
    background-color: ${COLORS.MIRAGE[100]};
    color: white;
    border: 1px solid ${COLORS.MIRAGE[100]};

    &:hover {
      background-color: white;
      color: ${COLORS.MIRAGE[100]};
      border: 1px solid ${COLORS.MIRAGE[100]};
    }
  }
  &[light-outlined="true"] {
    color: ${COLORS.SHUTTLEGRAY[100]};
    border: 1px solid ${COLORS.SHUTTLEGRAY[100]};
    background-color: transparent;

    &:hover {
      background-color: ${COLORS.MIRAGE[100]};
      border: 1px solid ${COLORS.MIRAGE[100]};
      color: white;
    }
  }
  &[$dark-outlined="true"] {
    color: white;
    border: 1px solid white;

    &:hover {
      background-color: white;
      border: 1px solid white;
      color: ${COLORS.MIRAGE[100]};
    }
  }
`;

const BaseButton = ({
  title,
  width,
  disabled,
  light,
  lightoutlined,
  darkoutlined,
  type,
  to,
  onClick,
}: BaseButtonProps): JSX.Element => {
  return (
    <StyledButton
      width={width}
      disabled={disabled}
      data-light={light ? "true" : undefined}
      light-outlined={lightoutlined ? "true" : undefined}
      $dark-outlined={darkoutlined ? "true" : undefined}
    >
      {to ? (
        <LinkButton
          to={to}
          onClick={onClick}
          disabled={disabled}
          data-light={light ? "true" : undefined}
          light-outlined={lightoutlined ? "true" : undefined}
          $dark-outlined={darkoutlined ? "true" : undefined}
        >
          <h4>{title}</h4>
        </LinkButton>
      ) : (
        <Button
          type={type}
          onClick={onClick}
          disabled={disabled}
          data-light={light ? "true" : undefined}
          light-outlined={lightoutlined ? "true" : undefined}
          $dark-outlined={darkoutlined ? "true" : undefined}
        >
          <h4>{title}</h4>
        </Button>
      )}
    </StyledButton>
  );
};

export default BaseButton;
