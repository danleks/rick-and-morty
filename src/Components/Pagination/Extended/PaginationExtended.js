import { PaginationStyles } from "./PaginationExtended.styles";
import { PaginationContext } from "../../../providers/PaginationProvider";
import { FiltersContext } from "../../../providers/FiltersProvider";
import { useContext } from "react";
import { CharactersContext } from "../../../providers/CharactersProvider";

const PaginationExtended = () => {
  const [currentPage, setCurrentPage] = useContext(PaginationContext);
  const [currentFilters] = useContext(FiltersContext);
  const { getCharacters, pageCount } = useContext(CharactersContext);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected + 1);
    getCharacters(Object.assign(currentFilters, { page: currentPage }));
  };
  return (
    <PaginationStyles
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel="< previous"
      renderOnZeroPageCount={null}
      forcePage={currentPage - 1}
    />
  );
};

export default PaginationExtended;
