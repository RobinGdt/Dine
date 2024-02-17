import styled from "styled-components";
import { Divider, SimpleBar } from "../../../starter-code/images/icons/icon";
import beefImage from "../assets/beef-desktop-tablet.jpg";
import chocolateImage from "../assets/chocolate-desktop-tablet.jpg";
import salmonImage from "../assets/salmon-desktop-tablet.jpg";
import useSlide from "../../../utils/useParallax";

interface StyledHomeMenuProps {
  subtitle: string;
  text: string;
}

const StyledHomeMenu = styled.div`
  background-color: var(--cod-gray-100);
  color: white;
  gap: 10%;
  padding-top: 10%;
  padding-left: 10%;
  padding-right: 10%;
  padding-bottom: 4%;
`;

const HomeLocationContainer = styled.div<{
  opacity: number;
}>`
  display: flex;
  justify-content: center;
  transition: opacity 1s ease-out;
  opacity: ${(props) => props.opacity};
  gap: 15%;

  @media (max-width: 1001px) {
    flex-wrap: wrap;
    width: 100%;
  }
`;

const HomeLocationText = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  @media (max-width: 1001px) {
    text-align: center;
    align-items: center;
    width: 80%;
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const MenuWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  img {
    width: 128px;
    height: 96px;
  }
`;

const DividerContainer = styled.div`
  margin-right: 30px;
  align-self: start;
`;

const MenuDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  font-weight: bold;
  margin-block-start: 0;
  /* margin-block-end: 0; */
`;

const Description = styled.p`
  font-size: 16px;
  margin-block-start: 0;
  margin-block-end: 0;
`;

const InBetween = styled.div`
  background-color: #ffffff41;
  width: 100%;
  height: 2px;
`;

const HomeMenu = ({ subtitle, text }: StyledHomeMenuProps): JSX.Element => {
  const { containerRef, opacity } = useSlide();

  const titles = [
    {
      title: "Seared Salmon Fillet",
      description:
        "Our locally sourced salmon served with a refreshing buckwheat summer salad.",
      image: salmonImage,
    },
    {
      title: "Rosemary Filet Mignon",
      description:
        "Our prime beef served to your taste with a delicious choice of seasonal sides.",
      image: beefImage,
    },
    {
      title: "Summer Fruit Chocolate Mousse",
      description:
        "Creamy mousse combined with summer fruits and dark chocolate shavings.",
      image: chocolateImage,
    },
  ];
  return (
    <StyledHomeMenu ref={containerRef}>
      <HomeLocationContainer opacity={opacity}>
        <HomeLocationText>
          <Divider />
          <h2>{subtitle}</h2>
          <p>{text}</p>
        </HomeLocationText>
        <Menu>
          {titles.map((item, index) => (
            <>
              <MenuWrapper>
                <img src={item.image} alt="" key={index} />
                <DividerContainer>
                  <SimpleBar />
                </DividerContainer>
                <MenuDescription>
                  <Title>{item.title}</Title>
                  <Description>{item.description}</Description>
                </MenuDescription>
              </MenuWrapper>
              {index < 2 && <InBetween />}
            </>
          ))}
        </Menu>
      </HomeLocationContainer>
    </StyledHomeMenu>
  );
};

export default HomeMenu;
