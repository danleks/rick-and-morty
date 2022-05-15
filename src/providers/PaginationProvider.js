import { createContext, useState } from "react";

export const PaginationContext = createContext(["1", () => {}]);

export const PaginationProvider = ({ children }) => {
  const currentPage = useState(1);
  return (
    <PaginationContext.Provider value={currentPage}>
      {children}
    </PaginationContext.Provider>
  );
};
