import styled from "styled-components";
import readyBg from "../assets/ready-bg-desktop.jpg";
import BaseButton, { MEDIUM } from "../../BaseButton/BaseButton";

const StyledFooterBanner = styled.div`
  padding-left: 9%;
  padding-right: 9%;
  padding-top: 3%;
  padding-bottom: 3%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${readyBg});

  h2 {
    color: white;
    margin-block-end: 0px;
    margin-block-start: 0px;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }
`;

const FooterBanner = () => {
  return (
    <StyledFooterBanner>
      <Container>
        <h2>Ready to make a reservation?</h2>
        <BaseButton to="/booking" title="BOOK A TABLE" width={MEDIUM} />
      </Container>
    </StyledFooterBanner>
  );
};

export default FooterBanner;
