import { useEffect, useContext } from "react";
import { PaginationStyles } from "./PaginationBasic.styles";
import { PaginationContext } from "../../../providers/PaginationProvider";
import { FiltersContext } from "../../../providers/FiltersProvider";
import { CharactersContext } from "../../../providers/CharactersProvider";

const PaginationBasic = () => {
  const [currentPage, setCurrentPage] = useContext(PaginationContext);
  const [currentFilters] = useContext(FiltersContext);
  const { getCharacters, pageCount } = useContext(CharactersContext);

  useEffect(() => {
    getCharacters(Object.assign(currentFilters, { page: currentPage }));
  }, [currentPage]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleInputField = (e) => {
    +e.target.value >= 0 && +e.target.value <= pageCount
      ? setCurrentPage(
          e.target.value.replace(/[^0-9.]/g, "").replace(/(\..*)\./g, "$1")
        )
      : null;
  };

  return (
    <PaginationStyles>
      <input min="1" max="42" value={currentPage} onChange={handleInputField} />
      <span>z {pageCount}</span>
    </PaginationStyles>
  );
};

export default PaginationBasic;
