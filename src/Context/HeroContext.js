import { createContext } from "react";

const HeroContext = createContext(["The Rick and Morty", () => {}]);

export default HeroContext;
