import styled from "styled-components";
import readyBg from "../assets/ready-bg-desktop.jpg";
import BaseButton from "../../BaseButton/BaseButton";

const StyledFooterBanner = styled.div`
  padding-left: 11.45%;
  padding-right: 11.45%;
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
`;

const FooterBanner = () => {
  return (
    <StyledFooterBanner>
      <Container>
        <h2>Ready to make a reservation?</h2>
        <BaseButton width="30%" title="BOOK A TABLE" />
      </Container>
    </StyledFooterBanner>
  );
};

export default FooterBanner;