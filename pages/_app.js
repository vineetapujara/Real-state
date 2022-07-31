import "../styles/globals.css";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Layout from "../components/Layout";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
  breakpoints: {
    sm: "40em",
    md: "52em",
    lg: "64em",
    xl: "80em",
  },
};

const theme = extendTheme({ colors });
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head></Head>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}
export default MyApp;
