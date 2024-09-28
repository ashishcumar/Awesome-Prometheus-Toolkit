import {
  Box,
  Button,
  Code,
  Flex,
  Grid,
  Text,
  useClipboard,
} from "@chakra-ui/react";
import { IAlertRule } from "../helpers/interface";
import copyPaste from "../assets/copyPaste.svg";

interface IProps {
  card: IAlertRule;
  index: number | string;
}
function SubRuleCard(props: IProps) {
  const { card, index } = props;
  const { hasCopied, onCopy } = useClipboard(JSON.stringify(card));
  return (
    <Grid sx={{ gridTemplateColumns: "1fr 8fr", margin: "24px 0" }}>
      <Box
        sx={{
          background: "slate.100",
          height: "40px",
          width: "40px",
          margin: "4px auto",
          textAlign: "center",
          placeContent: "center",
          borderRadius: "24px",
          fontSize: "12px",
          fontWeight: "700",
          color: "slate.500",
        }}
      >
        {index}
      </Box>
      <Grid>
        <Text
          sx={{
            fontSize: "14px",
            fontWeight: "500",
            fontFamily: "primary",
            color: "slate.600",
            // marginBottom: "8px",
          }}
        >
          {card.alert.replace(/([A-Z])/g, ' $1').trim()}
        </Text>
        <Text
          noOfLines={1}
          sx={{
            fontSize: "12px",
            fontWeight: "500",
            textWrap: "balance",
            color: "slate.500",
            marginBottom: "8px",
          }}
        >
          {card.annotations.description}
        </Text>
        <Box
          sx={{
            position: "relative",
            maxWidth: "600px",
          }}
        >
          <Button
            onClick={onCopy}
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              background: "slate.200",
              fontSize: "10px",
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            <img
              src={copyPaste}
              alt={"copyPaste"}
              style={{ height: "20px", width: "20px", marginRight: "8px" }}
            />
            {hasCopied ? "Copied!" : "Copy"}
          </Button>
          <Code
            sx={{
              maxWidth: "600px",
              overflow: "scroll",
              paddingTop: "24px",
              fontFamily: "secondary",
              fontSize: "12px",
            }}
          >
            <Box sx={{ padding: "24px" }}>
              <Flex sx={{ gap: "12px" }}>
                <Text sx={{ color: "green" }}>
                  <span style={{ color: "black", marginRight: "8px" }}>-</span>
                  alert <span style={{ color: "black" }}>:</span>
                </Text>
                <Text> {card.alert} </Text>
              </Flex>
              <Flex sx={{ gap: "12px" }}>
                <Text sx={{ color: "green", marginLeft: "16px" }}>
                  expr
                  <span style={{ color: "black" }}>:</span>
                </Text>
                <Text> {card.expr} </Text>
              </Flex>
              <Flex sx={{ gap: "12px" }}>
                <Text sx={{ color: "green", marginLeft: "16px" }}>
                  for
                  <span style={{ color: "black" }}>:</span>
                </Text>
                <Text> {card.for} </Text>
              </Flex>
              <Box sx={{ gap: "12px" }}>
                <Text sx={{ color: "green", marginLeft: "16px" }}>
                  labels
                  <span style={{ color: "black" }}>:</span>
                </Text>
                <Flex sx={{ gap: "12px", marginLeft: "20px" }}>
                  <Text sx={{ color: "green", marginLeft: "16px" }}>
                    severity
                    <span style={{ color: "black" }}>:</span>
                  </Text>
                  <Text> {card.labels.severity} </Text>
                </Flex>
              </Box>
              <Box sx={{ gap: "12px" }}>
                <Text sx={{ color: "green", marginLeft: "16px" }}>
                  annotations
                  <span style={{ color: "black" }}>:</span>
                </Text>
                <Flex sx={{ gap: "12px", marginLeft: "20px" }}>
                  <Text sx={{ color: "green", marginLeft: "16px" }}>
                    summary
                    <span style={{ color: "black" }}>:</span>
                  </Text>
                  <Text> {card.annotations.summary} </Text>
                </Flex>
                <Flex sx={{ gap: "12px", marginLeft: "20px" }}>
                  <Text sx={{ color: "green", marginLeft: "16px" }}>
                    description
                    <span style={{ color: "black" }}>:</span>
                  </Text>
                  <Text sx={{ wordWrap: "no-wrap", textWrap: "nowrap" }}>
                    {" "}
                    {card.annotations.description}{" "}
                  </Text>
                </Flex>
              </Box>
            </Box>
          </Code>
        </Box>
      </Grid>
    </Grid>
  );
}

export default SubRuleCard;
