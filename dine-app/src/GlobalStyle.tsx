import { COLORS } from "./utils/palette";
import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };

const GlobalStyles = styled.createGlobalStyle`
  :root {
    --beaver-100: ${COLORS.BEAVER[100]};
    --cod-gray-100: ${COLORS.CODGRAY[100]};
    --mirage-100: ${COLORS.MIRAGE[100]};
    --shuttle-gray-100: ${COLORS.SHUTTLEGRAY[100]};
    --025-px: -0.016rem;
    --05-px: -0.032rem;
    --1-px: -0.063rem;
    --2-5px: 0.156rem;
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
`;

export default GlobalStyles;
