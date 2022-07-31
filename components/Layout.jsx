import Head from "next/head";
import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Layout = ({ children }) => (
  <>
    <Head>
      <title>Real Estate</title>
    </Head>
    <Box maxWidth="100%" bg="#62c47d">
      <header>
        <Navbar />
      </header>
      <Box maxWidth="1280px" m="auto">
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </Box>
    </Box>
  </>
);

export default Layout;
