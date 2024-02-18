import styled from "styled-components";
import { Divider, Grid } from "../../../starter-code/images/icons/icon";
import { useState, useEffect } from "react";
import { shadow } from "../../../GlobalStyle";

interface HomeLocationProps {
  image: string;
  subtitle: string;
  text: string;
  reversed?: boolean;
}

const StyledHomeLocation = styled.div`
  width: 80%;
`;

const HomeLocationContainer = styled.div<{
  reversed?: boolean;
  translate: number;
}>`
  position: relative;
  left: 10%;
  right: 10%;
  bottom: ${(props) => (props.reversed ? "-80px" : "40px")};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${(props) => (props.reversed ? "row-reverse" : "row")};
  transform: translateY(${(props) => props.translate}px);
  transition: transform 0.3s ease-out;

  @media (max-width: 1001px) {
    flex-wrap: wrap;
    gap: 20px;
  }
`;

const HomeLocationText = styled.div<{ reversed?: boolean }>`
  display: flex;
  flex-direction: column;
  margin-left: ${(props) => (props.reversed ? "0" : "15%")};
  margin-right: ${(props) => (props.reversed ? "15%" : "0")};

  @media (max-width: 1001px) {
    text-align: center;
    align-items: center;
    margin-left: 0;
    margin-right: 0;
    width: 80%;
  }

  @media (max-width: 550px) {
    width: 90%;
  }
`;

const SubtitleContainer = styled.div`
  width: 80%;

  @media (max-width: 1001px) {
    align-items: center;
  }
`;

const GridContainer = styled.div`
  position: absolute;
  right: -10%;

  @media (max-width: 550px) {
    display: none;
  }
`;

const Image = styled.img`
  box-shadow: ${shadow};
`;

const HomeLocation = ({
  image,
  subtitle,
  text,
  reversed,
}: HomeLocationProps): JSX.Element => {
  const [translate, setTranslate] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setTranslate(scrollY * -0.05);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <StyledHomeLocation>
      <HomeLocationContainer reversed={reversed} translate={translate}>
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
