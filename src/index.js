import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      100: "#2f3120 ", //black
      200: "#d9ded8", //light grey blue
      300: "#e6d8cf", //light pink/white
      400: "#937067", //drk beige
      500: "",
      600: "",
      700: "",
      800: "",
      900: "",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>
);
