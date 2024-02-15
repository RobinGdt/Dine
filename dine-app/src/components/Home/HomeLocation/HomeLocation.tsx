import styled from "styled-components";
import { Divider, Grid } from "../../../starter-code/images/icons/icon";
import { useState, useEffect } from "react";

interface HomeLocationProps {
  image: any;
  subtitle: string;
  text: string;
  reversed?: boolean;
}

const StyledHomeLocation = styled.div`
  width: 80%;
  z-index: 1000;
`;

const HomeLocationContainer = styled.div<{
  reversed?: boolean;
  translateY: number;
}>`
  position: relative;
  left: 11.45%;
  bottom: ${(props) => (props.reversed ? "-40px" : "40px")};
  display: flex;
  align-items: center;
  flex-direction: ${(props) => (props.reversed ? "row-reverse" : "row")};
  transform: translateY(${(props) => props.translateY}px);
  transition: transform 0.3s ease-out;
`;

const HomeLocationText = styled.div<{ reversed?: boolean }>`
  display: flex;
  flex-direction: column;
  margin-left: ${(props) => (props.reversed ? "0" : "15%")};
  margin-right: ${(props) => (props.reversed ? "15%" : "0")};
`;

const SubtitleContainer = styled.div`
  width: 85%;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
`;

const GridContainer = styled.div`
  position: absolute;
  right: -10%;
`;

const Image = styled.img`
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  width: 100%;
`;

const HomeLocation = ({
  image,
  subtitle,
  text,
  reversed,
}: HomeLocationProps): JSX.Element => {
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setTranslateY(scrollY * -0.05);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <StyledHomeLocation>
      <HomeLocationContainer reversed={reversed} translateY={translateY}>
        <ImageContainer>
          {reversed && (
            <GridContainer>
              <Grid />
            </GridContainer>
          )}
          <Image src={image} />
        </ImageContainer>
        <HomeLocationText reversed={reversed}>
          <SubtitleContainer>
            <Divider />
            <h2>{subtitle}</h2>
          </SubtitleContainer>
          <p>{text}</p>
        </HomeLocationText>
      </HomeLocationContainer>
    </StyledHomeLocation>
  );
};

export default HomeLocation;
