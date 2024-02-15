import styled from "styled-components";
import { Logo } from "../../starter-code/images/icons/icon";

const StyledFooter = styled.div`
  background: var(--cod-gray-100);
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-left: 11.45%;
  padding-right: 11.45%;
  padding-top: 4%;
  padding-bottom: 4%;

  h4 {
    font-size: 14px;
    font-weight: 400;
    margin-block-end: 5px;
    margin-block-start: 5px;
  }
`;

const LocationContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SchudelsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Logo />
      <LocationContainer>
        <h4>Marthwaite, Sedbergh</h4>
        <h4>Cumbria</h4>
        <h4>+00 44 123 4567</h4>
      </LocationContainer>
      <SchudelsContainer>
        <h4>OPEN TIMES</h4>
        <h4>MON - FRI: 09:00 AM - 10:00 PM</h4>
        <h4>SAT - SUN: 09:00 AM - 11:30 PM</h4>
      </SchudelsContainer>
    </StyledFooter>
  );
};

export default Footer;
