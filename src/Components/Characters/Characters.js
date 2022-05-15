import { useEffect, useState, useContext } from "react";

import { HeroContext } from "../../providers/HeroProvider";
import Character from "../Character/Character";
import Filters from "../Filters/Filters";
import PaginationBasic from "../Pagination/Basic/PaginationBasic";
import PaginationExtended from "../Pagination/Extended/PaginationExtended";
import { SectionWrapper, CharacterWrapper } from "./Characters.styles";

import PaginationContext from "../../Context/PaginationContext";
import { CharactersContext } from "../../providers/CharactersProvider";

const Characters = () => {
  const [, setHeroText] = useContext(HeroContext);
  const { characters, isLoading, error } = useContext(CharactersContext);

  useEffect(() => {
    setHeroText("The Rick and Morty");
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (isLoading) {
    return <h2>Loading ...</h2>;
  }

  return (
    <SectionWrapper>
      <Filters />
      <PaginationBasic />
      <CharacterWrapper>
        {!error
          ? characters.map((character) => {
              return <Character key={character.id} character={character} />;
            })
          : "Cannot load characters"}
      </CharacterWrapper>
      <PaginationExtended />
    </SectionWrapper>
  );
};

export default Characters;
