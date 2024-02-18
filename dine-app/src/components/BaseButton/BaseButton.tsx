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
  to?: string;
  type?: "submit" | "button";
  onClick?: () => void;
}

const StyledButton = styled.div<{
  width: string;
  disabled?: boolean;
  "data-light"?: string;
}>`
  width: ${(props) => props.width};

  &:hover {
    background-color: ${(props) => (props.disabled ? "transparent" : "white")};
  }
`;

const Button = styled.button<{ disabled?: boolean; light?: boolean }>`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: 1px solid white;
  background-color: white;
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
    background-color: transparent;
    color: ${COLORS.MIRAGE[100]};
    border: 1px solid ${COLORS.MIRAGE[100]};

    &:hover {
      background-color: ${COLORS.MIRAGE[100]};
      color: white;
      border: 1px solid ${COLORS.MIRAGE[100]};
    }
  }
`;

const LinkButton = styled(Link)<{ disabled?: boolean; light?: boolean }>`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: 1px solid white;
  color: white;
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
    background-color: transparent;
    color: ${COLORS.MIRAGE[100]};
    border: 1px solid ${COLORS.MIRAGE[100]};

    &:hover {
      background-color: ${COLORS.MIRAGE[100]};
      color: white;
      border: 1px solid ${COLORS.MIRAGE[100]};
    }
  }
`;

const BaseButton = ({
  title,
  width,
  disabled,
  light,
  type,
  to,
  onClick,
}: BaseButtonProps): JSX.Element => {
  return (
    <StyledButton
      width={width}
      disabled={disabled}
      data-light={light ? "true" : undefined}
    >
      {to ? (
        <LinkButton
          to={to}
          onClick={onClick}
          disabled={disabled}
          data-light={light ? "true" : undefined}
        >
          <h4>{title}</h4>
        </LinkButton>
      ) : (
        <Button
          type={type}
          onClick={onClick}
          disabled={disabled}
          data-light={light ? "true" : undefined}
        >
          <h4>{title}</h4>
        </Button>
      )}
    </StyledButton>
  );
};

export default BaseButton;
