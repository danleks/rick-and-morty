import { useEffect, useState, useContext } from "react";

const STATUS = ["", "alive", "dead", "unknown"];
const GENDER = ["", "female", "male", "genderless", "unknown"];

const Filters = ({ species }) => {
  const [character, setCharacter] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [speciesItem, setSpeciesItem] = useState("");

  return (
    <form>
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
        status
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
          {species.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
      <button>Find characters</button>
    </form>
  );
};

export default Filters;
