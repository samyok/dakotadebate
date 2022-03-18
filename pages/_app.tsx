import "../styles/globals.sass";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
const theme = extendTheme({
  components: {
    Heading: {
      baseStyle: {
        fontFamily: "Spectral, serif",
        fontWeight: "500",
      },
    },
  },
});
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
