import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import footer9 from "../assets/footer9.svg";

function Footer() {
  return (
    <Grid
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        background: "white",
        borderTop:'1px solid',
        borderColor:'slate.100'
      }}
    >
      <Flex
        sx={{
          justifyContent: "space-between",
          width: "70%",
          margin: "auto",
          alignItems: "end",
          padding: "8px",
          color:'slate.400',
        }}
      >
        <Text sx={{ fontSize: "12px", fontWeight: "500",
          fontFamily:'primary',

         }}>
         
          Contribute on GitHub{" "}
        </Text>
        <Flex
          sx={{
            gap: "4px",
            alignItems: "center",
          }}
        >
          <Text sx={{ fontSize: "12px", fontWeight: "500" }}>
            Maintained by Last9
          </Text>
          <img
            src={footer9}
            alt="footer9"
            style={{ height: "20px", objectFit: "contain" }}
          />
        </Flex>
      </Flex>
    </Grid>
  );
}

export default Footer;
