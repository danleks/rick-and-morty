import { createContext, useState } from "react";

export const FiltersContext = createContext([{}, () => {}]);

export const FiltersProvider = ({ children }) => {
  const currentFilters = useState({});
  return (
    <FiltersContext.Provider value={currentFilters}>
      {children}
    </FiltersContext.Provider>
  );
};
