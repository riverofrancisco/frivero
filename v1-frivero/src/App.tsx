import * as React from "react";
import "./App.css";
import { AppRouter } from "./router";
import { BrowserRouter } from "react-router-dom";

import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import { useAppSelector } from "./hooks/hooksRedux";

import { getDesignTokens } from "./Theme/theme";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  const currentMode = useAppSelector((state) => state.global.mode);

  const theme = React.useMemo(
    () => createTheme(getDesignTokens(currentMode)),
    [currentMode]
  );

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRouter />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
