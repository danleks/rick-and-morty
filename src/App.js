import { render } from "react-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./assets/styles/theme";
import { GlobalStyles } from "./assets/styles/GlobalStyles";
import Characters from "./Characters/Characters";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Characters />
    </ThemeProvider>
  );
};

render(<App />, document.getElementById("root"));
