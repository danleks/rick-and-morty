import axios from "axios";
import { useEffect, useState } from "react";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false);

  useEffect(() => {
    getCharacters();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function getCharacters() {
    const endpoint = "https://rickandmortyapi.com/graphql";
    const query = {
      query: `{
        characters {
          info {
            count
          }
          results {
            id
            name
            status
            species
            gender
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
      setCount(data.characters.info.count);
      setCharacters(data.characters.results);
    } catch (e) {
      setError(true);
    }
  }

  return (
    <div>
      <span>{count}</span>
      <ul>
        {characters.length > 0
          ? characters.map((character) => {
              return (
                <li key={character.id}>
                  <span>{character.status}</span>
                  <h2>{character.name}</h2>
                  <span>
                    {character.species} | {character.gender}
                  </span>
                </li>
              );
            })
          : error
          ? "Cannot load characters"
          : "Loading..."}
      </ul>
    </div>
  );
};

export default Characters;
