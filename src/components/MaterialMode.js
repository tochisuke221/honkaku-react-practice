import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";

import { amber, grey } from "@mui/material/colors";
import { CssBaseline, Button } from "@mui/material";

const MaterialMode = () => {
  const [mode, setMode] = useState("light");
  const toggleMode = () => setMode((prev) => (prev === "light" ? "dark" : "light"));

  const theme = createTheme({
    mode,
    ...(mode === "light"
      ? {
          palette: {
            primary: amber,
          },
        }
      : {
          palette: {
            primary: {
              main: grey[500],
              contrastText: "#fff",
            },
            background: {
              default: grey[900],
              paper: grey[900],
            },
          },
        }),
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Button variant="contained" onClick={toggleMode}>
        Mode: {mode}
      </Button>
    </ThemeProvider>
  );
};

export default MaterialMode;
