import { render } from "react-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./assets/styles/theme";
import { GlobalStyles } from "./assets/styles/GlobalStyles";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <h1>Rick and Morty</h1>
    </ThemeProvider>
  );
};

render(<App />, document.getElementById("root"));
