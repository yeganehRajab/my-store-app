import "../styles/globals.css";

import theme from "../styles/theme/theme";
import { ThemeProvider } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import { prefixer } from "stylis";
import stylisRTLPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";

function MyApp({ Component, pageProps }) {
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, stylisRTLPlugin],
  });

  return (
    <ThemeProvider theme={theme}>
      <CacheProvider value={cacheRtl}>
        <Component {...pageProps} />
      </CacheProvider>
    </ThemeProvider>
  );
}

export default MyApp;
