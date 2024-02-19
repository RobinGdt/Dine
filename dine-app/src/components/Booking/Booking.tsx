import styled from "styled-components";
import heroDesktop from "./assets/hero-bg-desktop@2x.jpg";
import heroDesktopTablet from "./assets/hero-bg-tablet@2x.jpg";
import heroDesktopMobile from "./assets/hero-bg-mobile@2x.jpg";
import { Grid, Logo } from "../../starter-code/images/icons/icon";
import FormReservation from "../FormReservation/FormReservation";
import { Link } from "react-router-dom";
import BaseButton, { MEDIUM } from "../BaseButton/BaseButton";
import { useWindowSize } from "../../utils/windowSizeUtil";

const StyledBooking = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const LogoContainer = styled(Link)`
  position: absolute;
  top: 7%;
  left: 10%;
  z-index: 1;

  @media (max-width: 550px) {
    left: 40%;
  }
`;

const ReservationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-size: cover;
  background-image: url(${heroDesktop});
  width: 100%;
  height: 600px;
  background-repeat: no-repeat;
  color: white;

  @media (max-width: 768px) {
    width: auto;
    background-image: url(${heroDesktopTablet});
  }

  @media (max-width: 550px) {
    background-image: url(${heroDesktopMobile});
  }
`;

const ReservationContent = styled.div`
  display: flex;
  position: absolute;
  justify-content: space-around;
  align-items: flex-start;
  top: 20%;
  left: 10%;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
    left: 5%;
    top: 15%;
    width: 90%;
    gap: 40px;
  }
`;

const ReservationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 550px) {
    align-items: center;
    margin-bottom: 10%;
  }
`;

const InBetween = styled.div`
  width: 100%;
  height: 320px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: 500px;
  }

  @media (max-width: 550px) {
    height: 620px;
  }
`;

const GridContainer = styled.div``;

const Booking = () => {
  const { isMobile, isTablet, isDesktop } = useWindowSize();
  return (
    <StyledBooking>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <ReservationContainer>
        <ReservationContent>
          <ReservationWrapper>
            <h1>Reservations</h1>
            <p>
              We can’t wait to host you. If you have any special requirements
              please feel free to call on the phone number below. We’ll be happy
              to accommodate you.
            </p>
            {isMobile && !isDesktop && !isTablet && (
              <BaseButton
                width={MEDIUM}
                title="RESERVE PLACE"
                darkoutlined={true}
              />
            )}
          </ReservationWrapper>
          <FormReservation />
        </ReservationContent>
      </ReservationContainer>
      <InBetween>
        <GridContainer>
          <Grid />
        </GridContainer>
      </InBetween>
    </StyledBooking>
  );
};

export default Booking;
