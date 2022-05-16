import { useContext } from "react";
import { FavouriteCharactersContext } from "../../providers/FavouriteCharactersProvider";

import Character from "../Character/Character";
import {
  SectionWrapper,
  CharacterWrapper,
} from "../Characters/Characters.styles";

const FavouriteCharacters = () => {
  const [favouriteCharacters, setFavouriteCharacters] = useContext(
    FavouriteCharactersContext
  );

  const handleDeleteFromFavs = (e, character) => {
    if (+e.target.id === character.id) {
      setFavouriteCharacters((prevState) =>
        prevState.filter((item) => item.id !== character.id)
      );
    }
  };
  return (
    <SectionWrapper>
      <CharacterWrapper>
        {favouriteCharacters.map((character) => {
          return (
            <Character
              onClick={(e) => handleDeleteFromFavs(e, character)}
              favourite
              key={character.id}
              character={character}
            />
          );
        })}
      </CharacterWrapper>
    </SectionWrapper>
  );
};

export default FavouriteCharacters;
