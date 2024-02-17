import styled from "styled-components";
import { Logo } from "../../starter-code/images/icons/icon";

const StyledFooter = styled.div`
  background: var(--cod-gray-100);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 4%;
  padding-bottom: 4%;

  h4 {
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    margin-block-end: 5px;
    margin-block-start: 5px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 60%;
    justify-content: space-between;
    gap: 50px;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Logo />
      <Wrapper>
        <Container>
          <h4>MARTWAITE, SEDBERG</h4>
          <h4>CUMBRIA</h4>
          <h4>+00 44 123 4567</h4>
        </Container>
        <Container>
          <h4>OPEN TIMES</h4>
          <h4>MON - FRI: 09:00 AM - 10:00 PM</h4>
          <h4>SAT - SUN: 09:00 AM - 11:30 PM</h4>
        </Container>
      </Wrapper>
    </StyledFooter>
  );
};

export default Footer;
