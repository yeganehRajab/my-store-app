import { Component } from "react";
import "../styles/globals.css";

import theme from "../styles/theme/theme";
import { ThemeProvider } from "@mui/material";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
