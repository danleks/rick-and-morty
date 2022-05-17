import { useEffect, useState, useContext } from "react";

import { HeroContext } from "../../providers/HeroProvider";
import Character from "../Character/Character";
import Filters from "../Filters/Filters";
import PaginationBasic from "../Pagination/Basic/PaginationBasic";
import PaginationExtended from "../Pagination/Extended/PaginationExtended";
import { SectionWrapper, CharacterWrapper } from "./Characters.styles";
import { CharactersContext } from "../../providers/CharactersProvider";
import { FavouriteCharactersContext } from "../../providers/FavouriteCharactersProvider";

const Characters = () => {
  const [, setHeroText] = useContext(HeroContext);
  const { characters, isLoading, error } = useContext(CharactersContext);
  const [currentCharacters, setcurrentCharacters] = useState([]);

  const [favouriteCharacters, setFavouriteCharacters] = useContext(
    FavouriteCharactersContext
  );

  const handleClick = (e, character) => {
    console.log("click");
    if (+e.target.id === character.id) {
      character.disabled = true;
      setFavouriteCharacters((prevState) => [character, ...prevState]);
    }
  };

  useEffect(() => {
    setcurrentCharacters(characters);
    characters.forEach((character) => {
      favouriteCharacters.find((favouriteCharacter) => {
        if (favouriteCharacter.id === character.id) {
          character.disabled = true;
        }
      });
    });
    setHeroText("The Rick and Morty");
  }, [characters]); // eslint-disable-line react-hooks/exhaustive-deps

  if (isLoading) {
    return <h2>Loading ...</h2>;
  }

  return (
    <SectionWrapper>
      <Filters />
      <CharacterWrapper>
        {!error
          ? currentCharacters.map((character) => {
              return (
                <Character
                  onClick={(e) => handleClick(e, character)}
                  key={character.id}
                  character={character}
                />
              );
            })
          : "Cannot load characters"}
      </CharacterWrapper>
      <PaginationExtended />
    </SectionWrapper>
  );
};

export default Characters;
