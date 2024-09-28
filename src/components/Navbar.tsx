import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import github from "../assets/github.svg";
import navLogo from "../assets/navLogo.svg";

function Navbar() {
  return (
    <Grid
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        background: "white",
        zIndex: 2,
        borderBottom:'1px solid',
        borderColor:'slate.100'
      }}
    >
      <Flex
        sx={{
          justifyContent: "space-between",
          width: "70%",
          margin: "auto",
          alignItems: "end",
          padding: "8px 0",
        }}
      >
        <img
          src={navLogo}
          alt="navLogo"
          style={{ height: "72px", objectFit: "contain" }}
        />
        <Flex
          sx={{
            alignItems: "end",
            gap: "4px",
          }}
        >
          <img
            src={github}
            alt="github"
            style={{ height: "24px", objectFit: "contain" }}
          />
          <Text
            sx={{
              fontSize: "12px",
              fontWeight: "500",
              fontFamily: "primary",
              color: "slate.500",
            }}
          >
            125 stars
          </Text>
        </Flex>
      </Flex>
    </Grid>
  );
}

export default Navbar;
