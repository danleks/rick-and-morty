import { useEffect, useState, useContext } from "react";

import { StatusIndicator } from "../StatusIndicator/StatusIndicator";

import {
  CharacterWrapper,
  ImageWrapper,
  ContentWrapper,
  InnerContent,
  StatusWrapper,
  LinkStyles,
  ButtonStyles,
} from "./Character.styles";

const Character = ({
  character: {
    id,
    status,
    name,
    species,
    gender,
    image,
    disabled,
    location: { name: locationName },
  },
  favourite,
  ...rest
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
      <ButtonStyles disabled={disabled && !favourite} id={id} {...rest}>
        {favourite ? "delete" : "add to favs"}
      </ButtonStyles>
    </CharacterWrapper>
  );
};

export default Character;
