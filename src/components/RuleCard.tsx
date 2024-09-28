import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

interface IAlertObject {
  title: string;
  fetchUrl: string;
  icon: any;
  rulesCount: string;
  description?: string | undefined;
}
interface IProps {
  ruleObj: IAlertObject;
  setSelectedRulesObject: React.Dispatch<
    React.SetStateAction<IAlertObject | null>
  >;
}

function RuleCard(props: IProps) {
  const { ruleObj, setSelectedRulesObject } = props;

  return (
    <Box
      sx={{
        width: "300px",
        border: "1px solid",
        borderColor:'slate.100',
        padding: "24px",
        borderRadius: "4px",
      }}
    >
      <Flex sx={{ gap: "8px", alignItems: "center",marginBottom:'8px' }}>
        <img
          src={ruleObj.icon}
          alt={ruleObj.icon}
          style={{ height: "24px", objectFit: "contain" }}
        />
        <Text
          sx={{
            fontSize: "14px",
            fontWeight: "700",
            fontFamily:'primary',
            color:'slate.600'
          }}
        >
          
          {ruleObj.title}
        </Text>
      </Flex>

      <Text
        noOfLines={3}
        sx={{
          fontSize: "12px",
          margin: "12px 0",
          color: "slate.400",
          fontWeight: "700",
          fontFamily:'primary',
        }}
      >
        <Text
          as="span"
          sx={{
            background: "slate.100",
            padding: "4px 8px",
            borderRadius: "8px",
            fontSize: "10px",
            marginRight: "8px",
          }}
        >
          {ruleObj.rulesCount}
        </Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo laudantium
        consequuntur veniam perspiciatis rem, dicta molestias facere deleniti a
        voluptas qui earum dolor labore maiores fuga vel quos quasi corporis
        deserunt? Id adipisci dignissimos quaerat sequi distinctio, aspernatur
        necessitatibus est.{" "}
      </Text>

      <Button
        sx={{
          border: "1px solid",
          borderColor:'slate.200',
          background: "white",
          width: "100%",
          fontSize: "12px",
          fontWeight: "600",
          borderRadius: "4px",
          color:'slate.600',
          '&:hover':{
            background:'white'
          }
        }}
        onClick={() => setSelectedRulesObject(ruleObj)}
      >
        View Alert Rules
      </Button>
    </Box>
  );
}

export default RuleCard;
