import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "../assets/styles/theme";
import { GlobalStyles } from "../assets/styles/GlobalStyles";

import { CharactersProvider } from "./CharactersProvider";
import { HeroProvider } from "./HeroProvider";
import { FiltersProvider } from "./FiltersProvider";
import { PaginationProvider } from "./PaginationProvider";
import { FavouriteCharactersProvider } from "./FavouriteCharactersProvider";

const AppProviders = ({ children }) => {
  return (
    <BrowserRouter>
      <CharactersProvider>
        <FavouriteCharactersProvider>
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
        </FavouriteCharactersProvider>
      </CharactersProvider>
    </BrowserRouter>
  );
};

export default AppProviders;
