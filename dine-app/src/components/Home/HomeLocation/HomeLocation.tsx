import styled from "styled-components";
import { Divider, Grid } from "../../../starter-code/images/icons/icon";
import { useState, useEffect } from "react";
import { shadow } from "../../../GlobalStyle";

interface HomeLocationProps {
  image: any;
  subtitle: string;
  text: string;
  reversed?: boolean;
}

const StyledHomeLocation = styled.div`
  width: 80%;
`;

const HomeLocationContainer = styled.div<{
  reversed?: boolean;
  translateY: number;
}>`
  position: relative;
  left: 10%;
  right: 10%;
  bottom: ${(props) => (props.reversed ? "-80px" : "40px")};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${(props) => (props.reversed ? "row-reverse" : "row")};
  transform: translateY(${(props) => props.translateY}px);
  transition: transform 0.3s ease-out;

  @media (max-width: 1001px) {
    flex-wrap: wrap;
  }
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

const GridContainer = styled.div`
  position: absolute;
  right: -10%;
`;

const Image = styled.img`
  box-shadow: ${shadow};
  width: auto;
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
        {reversed && (
          <GridContainer>
            <Grid />
          </GridContainer>
        )}
        <Image src={image} />
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
