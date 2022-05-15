import { render } from "react-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import Characters from "./Components/Characters/Characters";
import CharacterDetails from "./Components/CharacterDetails/CharacterDetails";
import MainTemplate from "./Components/Templates/MainTemplate";
import { StrictMode } from "react";

import AppProviders from "./providers/AppProviders";

const App = () => {
  return (
    <AppProviders>
      <MainTemplate>
        <Routes>
          <Route path="/" element={<Navigate to="/characters" />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/character/:id" element={<CharacterDetails />} />
        </Routes>
      </MainTemplate>
    </AppProviders>
  );
};

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
