import { useEffect, useState, createContext } from "react";

export const CharactersContext = createContext({
  characters: [],
  isLoading: true,
  chatactersCount: 0,
  pageCount: 0,
  error: false,
  getCharacters: () => {},
});

export const CharactersProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [chatactersCount, setCharactersCount] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [error, setError] = useState(false);

  useEffect(() => {
    getCharacters();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function getCharacters({
    page = "",
    name = "",
    status = "",
    species = "",
    gender = "",
  } = {}) {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${page}&name=${name}&status=${status}&species=${species}&gender=${gender}`
      );
      if (!response.ok) {
        throw response.json();
      }
      let data = await response.json();
      setCharacters(data.results);
      setPageCount(data.info.pages);
      setCharactersCount(data.info.count);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setError(true);
    }
  }

  return (
    <CharactersContext.Provider
      value={{
        characters,
        isLoading,
        chatactersCount,
        pageCount,
        error,
        getCharacters,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};
