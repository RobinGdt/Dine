import styled from "styled-components";
import heroDesktop from "./assets/hero-bg-desktop@2x.jpg";
import { Grid, Logo } from "../../starter-code/images/icons/icon";
import FormReservation from "../FormReservation/FormReservation";
import { Link } from "react-router-dom";

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
`;

const InBetween = styled.div`
  width: 100%;
  height: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GridContainer = styled.div``;

const Booking = () => {
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
