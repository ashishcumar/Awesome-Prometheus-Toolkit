import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "./helpers/customTheme.ts";

createRoot(document.getElementById("root")!).render(
  <ChakraProvider theme={customTheme}>
    <StrictMode>
      <App />
    </StrictMode>
  </ChakraProvider>
);
