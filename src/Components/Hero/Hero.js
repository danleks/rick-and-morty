import { useContext } from "react";
import { SectionWrapper } from "./Hero.styles";
import HeroContext from "../../Context/HeroContext";

const Hero = () => {
  const [heroText] = useContext(HeroContext);

  return (
    <SectionWrapper>
      <h1>{heroText}</h1>
    </SectionWrapper>
  );
};

export default Hero;
