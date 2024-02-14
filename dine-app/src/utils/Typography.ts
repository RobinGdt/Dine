import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };

const Typography = styled.createGlobalStyle`
  h1 {
    font-family: "League Spartan";
    font-size: var(--80px);
    line-height: var(--80px);
    letter-spacing: var(--1-px);
    font-weight: 300;
  }

  h2 {
    font-family: "League Spartan";
    font-size: var(--48px);
    line-height: var(--48px);
    letter-spacing: var(--05-px);
    font-weight: 700;
  }

  h3 {
    font-family: "League Spartan";
    font-size: var(--20px);
    line-height: var(--24px);
    letter-spacing: var(--025-px);
    font-weight: 700;
  }

  h4 {
    font-family: "League Spartan";
    font-size: var(--17px);
    line-height: var(--28px);
    letter-spacing: var(--2-5px);
    font-weight: 600;
  }

  p {
    font-family: "League Spartan";
    font-size: var(--20px);
    line-height: var(--24px);
    font-weight: 400;
  }
`;

export default Typography;
