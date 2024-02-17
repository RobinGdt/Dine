import { COLORS } from "./utils/palette";
import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };

const GlobalStyles = styled.createGlobalStyle`
  :root {
    --beaver-100: ${COLORS.BEAVER[100]};
    --cod-gray-100: ${COLORS.CODGRAY[100]};
    --mirage-100: ${COLORS.MIRAGE[100]};
    --shuttle-gray-100: ${COLORS.SHUTTLEGRAY[100]};
    --gaspacho-100: ${COLORS.GASPACHO[100]};
    --gaspacho-50: ${COLORS.GASPACHO[50]};
    --gaspacho-25: ${COLORS.GASPACHO[25]};
    --gaspacho-10: ${COLORS.GASPACHO[10]};
    --025-px: -0.016rem;
    --05-px: -0.032rem;
    --1-px: -0.063rem;
    --2-5px: 0.156rem;
    --10px: 0.63rem;
    --12px: 0.75rem;
    --14px: 0.875rem;
    --17px: 1.063rem;
    --20px: 1.25rem;
    --24px: 1.5rem;
    --28px: 1.75rem;
    --30px: 1.875rem;
    --48px: 3rem;
    --80px: 5rem;
  }

  input {
    outline: none;
    font-family: "League Spartan";
    font-size: var(--20px);
    height: var(--48px);

    &::placeholder {
      font-family: "League Spartan";
      font-size: var(--20px);
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    display: none;
  }

  select {
    font-family: "League Spartan";
    font-size: 20px;
    height: var(--48px);
    outline: none;
  }
`;
export const shadow = `rgba(0, 0, 0, 0.25) 0px 54px 55px,
                rgba(0, 0, 0, 0.12) 0px -12px 30px,
                rgba(0, 0, 0, 0.12) 0px 4px 6px,
                rgba(0, 0, 0, 0.17) 0px 12px 13px,
                rgba(0, 0, 0, 0.09) 0px -3px 5px;`;

export default GlobalStyles;
