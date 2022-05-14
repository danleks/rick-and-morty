import axios from "axios";
import { useEffect, useState, useContext } from "react";
import HeroContext from "../../Context/HeroContext";
import Character from "../Character/Character";
import Filters from "../Filters/Filters";
import { SectionWrapper, CharacterWrapper } from "./Characters.styles";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [species, setSpecies] = useState([]);
  const [heroText, setHeroText] = useContext(HeroContext);

  useEffect(() => {
    getCharacters();
    setHeroText("The Rick and Morty");
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function getCharacters() {
    const endpoint = "https://rickandmortyapi.com/graphql";
    const query = {
      query: `{
        characters {
          results {
            id
            name
            status
            species
            gender
            image
            location {
              id
              name
            }
          }
        }
      }`,
    };

    try {
      const {
        data: { data },
      } = await axios({
        method: "post",
        url: endpoint,
        data: query,
      });

      setCharacters(data.characters.results);
      setLoading(false);
      const species = [
        ...new Set(
          data.characters.results.map((character) => character.species)
        ),
      ];
      setSpecies(species);
    } catch (e) {
      setError(true);
    }
  }

  if (loading) {
    return <h2>Loading ...</h2>;
  }

  return (
    <SectionWrapper>
      <Filters species={species} />
      <CharacterWrapper>
        {!error
          ? characters.slice(0, 12).map((character) => {
              return <Character key={character.id} character={character} />;
            })
          : "Cannot load characters"}
      </CharacterWrapper>
    </SectionWrapper>
  );
};

export default Characters;
