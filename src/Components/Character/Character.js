import { StatusIndicator } from "../StatusIndicator/StatusIndicator";
import {
  CharacterWrapper,
  ImageWrapper,
  ContentWrapper,
  InnerContent,
  StatusWrapper,
  LinkStyles,
} from "./Character.styles";

const Character = ({
  character: {
    id,
    status,
    name,
    species,
    gender,
    image,
    location: { name: locationName },
  },
}) => {
  return (
    <CharacterWrapper>
      <ImageWrapper>
        <img src={image} alt={name} />
      </ImageWrapper>
      <ContentWrapper>
        <InnerContent>
          <LinkStyles to={`/character/${id}`}>
            <h2>{name}</h2>
          </LinkStyles>
          <StatusWrapper>
            <StatusIndicator status={status} />
            <span>
              {status} - {species}
            </span>
          </StatusWrapper>
        </InnerContent>
        <InnerContent>
          <span>Last known location:</span>
          <span>{locationName}</span>
        </InnerContent>
        <InnerContent>
          <span>Gender:</span>
          <span>{gender}</span>
        </InnerContent>
      </ContentWrapper>
      <button>add to fav</button>
    </CharacterWrapper>
  );
};

export default Character;
