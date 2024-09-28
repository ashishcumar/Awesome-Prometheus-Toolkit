// src/theme.js
import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  fonts: {
    primary: "Inter",
    secondary: "JetBrains Mono",
  },
  colors: {
    slate: {
      100: "#F1F5F9",
      200: "#E2E8F0",
      400: "#94A3B8",
      500: "#64748B",
      600: "#475569",
    },
    green: "#22863A",
    modalOVerlay: "#27374780",
  },
  components: {
    Button: {
      baseStyle: {
        bg: "white",
        _hover: {
          bg: "white",
        },
        _focus: {
          boxShadow: "none",
        },
      },
    },
    Input: {
      baseStyle: {
        _focus: {
          outline: "none", 
          boxShadow: "none", 
        },
        _hover: {
          outline: "none",
        },
      },
    },
    InputGroup: {
      baseStyle: {
        _focus: {
          outline: "none", 
          boxShadow: "none", 
        },
        _hover: {
          outline: "none",
        },
      },
    },
  },
});

export default customTheme;
