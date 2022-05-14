import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./assets/styles/theme";
import { GlobalStyles } from "./assets/styles/GlobalStyles";
import Characters from "./Components/Characters/Characters";
import CharacterDetails from "./Components/CharacterDetails/CharacterDetails";
import MainTemplate from "./Components/Templates/MainTemplate";
import { useState } from "react";
import HeroContext from "./Context/HeroContext";

const App = () => {
  const heroText = useState("The Rick and Morty");
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <HeroContext.Provider value={heroText}>
          <GlobalStyles />
          <MainTemplate>
            <Routes>
              <Route path="/" element={<Navigate to="/characters" />} />
              <Route path="/characters" element={<Characters />} />
              <Route path="/character/:id" element={<CharacterDetails />} />
            </Routes>
          </MainTemplate>
        </HeroContext.Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

render(<App />, document.getElementById("root"));
