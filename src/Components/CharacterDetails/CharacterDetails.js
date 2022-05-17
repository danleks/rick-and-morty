import axios from "axios";
import { HeroContext } from "../../providers/HeroProvider";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { StatusIndicator } from "../StatusIndicator/StatusIndicator";
import { useNavigate } from "react-router-dom";

import {
  DetailsWrapper,
  ImageWrapper,
  ContentWrapper,
  StatusWrapper,
  InnerWrapper,
  BackButtonStyles,
} from "./CharacterDetails.styles";

const CharacterDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState("");
  const [, setHeroText] = useContext(HeroContext);
  const navigate = useNavigate();

  useEffect(() => {
    getCharacter();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function getCharacter() {
    const endpoint = `https://rickandmortyapi.com/api/character/${id}`;
    const { data } = await axios({
      method: "get",
      url: endpoint,
    });
    setHeroText(data.name);
    setCharacter(data);
    setLoading(false);
  }

  if (loading) {
    return <h2>Loading ...</h2>;
  }

  return (
    <DetailsWrapper>
      <BackButtonStyles
        onClick={() => navigate(-1)}
        title="go back to characters"
      >
        ←
      </BackButtonStyles>
      <ImageWrapper>
        <img src={character.image} alt={character.name} />
      </ImageWrapper>
      <ContentWrapper>
        <StatusWrapper>
          <StatusIndicator status={character.status} />
          <span>{character.status}</span>
        </StatusWrapper>
        <InnerWrapper>
          <div>
            <span>Gender</span>
            <span>{character.gender}</span>
          </div>
          <div>
            <span>race</span>
            <span>{character.species}</span>
          </div>
          <div>
            <span>Location</span>
            <span>{character.origin.name}</span>
          </div>
        </InnerWrapper>
      </ContentWrapper>
    </DetailsWrapper>
  );
};

export default CharacterDetails;
