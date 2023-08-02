import "../styles/globals.css";

import theme from "../styles/theme/theme";
import { ThemeProvider } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import { prefixer } from "stylis";
import stylisRTLPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, stylisRTLPlugin],
  });

  return (
    <>
      <Head>
        <title>shopping</title>
      </Head>

      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={true}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          limit={10}
        />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
