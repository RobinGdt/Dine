import styled from "styled-components";
import { Logo } from "../../starter-code/images/icons/icon";
import HomePresentation from "./HomePresentation/HomePresentation";
import HomeLocation from "./HomeLocation/HomeLocation";
import enjoyablePlace from "./assets/enjoyable-place-desktop.jpg";
import enjoyablePlaceTablet from "./assets/enjoyable-place-tablet.jpg";
import locallySourced from "./assets/locally-sourced-desktop.jpg";
import locallySourcedTablet from "./assets/locally-sourced-tablet.jpg";
import HomeMenu from "./HomeMenu/HomeMenu";
import HomeGathering from "./HomeGathering/HomeGathering";
import FooterBanner from "./FooterBanner/FooterBanner";
import { useWindowSize } from "../../utils/windowSizeUtil";
import { Link } from "react-router-dom";

const StyledHome = styled.div`
  /* padding: 10%; */
`;

const LogoContainer = styled(Link)`
  position: absolute;
  top: 7%;
  left: 10%;
`;

const Home = (): JSX.Element => {
  const isTablet = useWindowSize();

  return (
    <StyledHome>
      {!isTablet && (
        <LogoContainer to="/">
          <Logo />
        </LogoContainer>
      )}
      <HomePresentation />
      <HomeLocation
        image={isTablet ? enjoyablePlaceTablet : enjoyablePlace}
        subtitle="Enjoyable place for all the family"
        text="Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal."
      />
      <HomeLocation
        image={isTablet ? locallySourcedTablet : locallySourced}
        subtitle="The most locally sourced food"
        text="All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food."
        reversed={true}
      />
      <HomeMenu
        subtitle="A few highlights from our menu"
        text="We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is revamped every season."
      />
      <HomeGathering />
      <FooterBanner />
    </StyledHome>
  );
};

export default Home;
