import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "../assets/styles/theme";
import { GlobalStyles } from "../assets/styles/GlobalStyles";

import { CharactersProvider } from "./CharactersProvider";
import { HeroProvider } from "./HeroProvider";
import { FiltersProvider } from "./FiltersProvider";
import { PaginationProvider } from "./PaginationProvider";

const AppProviders = ({ children }) => {
  return (
    <BrowserRouter>
      <CharactersProvider>
        <FiltersProvider>
          <PaginationProvider>
            <ThemeProvider theme={theme}>
              <HeroProvider>
                <GlobalStyles />
                {children}
              </HeroProvider>
            </ThemeProvider>
          </PaginationProvider>
        </FiltersProvider>
      </CharactersProvider>
    </BrowserRouter>
  );
};

export default AppProviders;
