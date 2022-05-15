import { createContext, useState } from "react";

export const HeroContext = createContext(["The Rick and Morty", () => {}]);

export const HeroProvider = ({ children }) => {
  const heroText = useState("The Rick and Morty");
  return (
    <HeroContext.Provider value={heroText}>{children}</HeroContext.Provider>
  );
};
