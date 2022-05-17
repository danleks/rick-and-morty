import { useEffect, useState, useContext } from "react";
import { FiltersContext } from "../../providers/FiltersProvider";
import { CharactersContext } from "../../providers/CharactersProvider";
import PaginationBasic from "../Pagination/Basic/PaginationBasic";
import { FiltersWrapper } from "./Filters.styles";

const STATUS = ["", "alive", "dead", "unknown"];
const GENDER = ["", "female", "male", "genderless", "unknown"];
const SPECIES = ["", "Human", "Alien"];

const Filters = () => {
  const [character, setCharacter] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [speciesItem, setSpeciesItem] = useState("");
  const [, setCurrentFilters] = useContext(FiltersContext);

  const { getCharacters } = useContext(CharactersContext);

  useEffect(() => {
    const filterData = {
      page: 1,
      name: character,
      status,
      species: speciesItem,
      gender,
    };
    setCurrentFilters(filterData);
    getCharacters(filterData);
  }, [character, status, gender, speciesItem]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <FiltersWrapper>
      <label htmlFor="chatacter">
        Find character
        <input
          id="character"
          placeholder="character name"
          value={character}
          onChange={(e) => setCharacter(e.target.value)}
        />
      </label>
      <label htmlFor="status">
        status
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          onBlur={(e) => setStatus(e.target.value)}
        >
          {STATUS.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="gender">
        gender
        <select
          id="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          onBlur={(e) => setGender(e.target.value)}
        >
          {GENDER.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="species">
        species
        <select
          id="species"
          value={speciesItem}
          onChange={(e) => setSpeciesItem(e.target.value)}
          onBlur={(e) => setSpeciesItem(e.target.value)}
        >
          {SPECIES.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
      <PaginationBasic />
    </FiltersWrapper>
  );
};

export default Filters;
