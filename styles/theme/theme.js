import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#3D6969",
      main: "#2E4F4F",
      dark: "#1F3636",
    },
    secondary: {
      light: "#119BA1",
      dark: "#0B6A6E",
      main: "#0E8388",
    },
    success: {
        light: "#CBF774",
        main: "#B7DF69",
        dark: "#A1C45C",
    },
    error: {
        light: "#FF0000",
        main: "#E50000",
        dark: "#CC0000",
    },
    grey: {
      light: "#E1FCF6",
      main: "#CBE4DE",
      dark: "#B3C9C4",
    },
    common: {
        white: "#fff",
        black: {
            light: "##424D4D",
        main: "##2C3333",
        dark: "#161A1A",
      },
    },
  },

  typography: {
    htmlFontSize: 10,
    fontFamily: "IRANYekanX",
    h3: {
      fontSize: "2rem",
      fontWeight: 800,
    },
    h3Medium: {
      fontSize: "2rem",
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: "1.1rem",
      fontWeight: 300,
      component: "span",
    },
    subtitle2: {
      fontSize: "1.3rem",
      fontWeight: 300,
      component: "span",
    },
    pLgLight: {
      fontSize: "1.6rem",
      fontWeight: 300,
    },
    pSmRegular: {
      fontSize: "1.2rem",
      fontWeight: 400,
    },
    textLgExtraBold: {
      fontSize: "1.8rem",
      fontWeight: 800,
    },
    textMdMedium: {
      fontSize: "1.6rem",
      fontWeight: 500,
      lineHeight: "2.4rem",
    },
    textXsLight: {
      fontSize: "1.2rem",
      fontWeight: 300,
    },
    textLgMedium: {
      fontSize: "1.8rem",
      fontWeight: 500,
    },
    textLgRegular: {
      fontSize: "1.8rem",
      fontWeight: 400,
    },
    textXsMedium: {
      fontSize: "1.2rem",
      fontWeight: 500,
      lineHeight: "2rem",
    },
    textSmMedium: {
      fontSize: "1.4rem",
      fontWeight: 500,
      lineHeight: "2rem",
    },
    label: {
      fontSize: "1.4rem",
      fontWeight: 400,
    },
    errorTitle: {
      fontSize: "5rem",
      fontWeight: 800,
    },

    errorSubTitle: {
      fontSize: "1.8rem",
      fontWeight: 300,
    },
  },
  // Other theme options...
});

export default theme;
