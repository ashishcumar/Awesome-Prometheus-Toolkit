import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { IAlertObject, IAlertRule } from "../helpers/interface";
import SubRuleCard from "./SubRuleCard";

interface IProps {
  setSelectedRulesObject: React.Dispatch<
    React.SetStateAction<IAlertObject | null>
  >;
  selectedRulesObject: IAlertObject | null;
  rulesList: IAlertRule[] | null;
}
function RulesModel(props: IProps) {
  const { selectedRulesObject, setSelectedRulesObject, rulesList } = props;

  return (
    <Modal
      isOpen={true}
      onClose={() => setSelectedRulesObject(null)}
      isCentered
    //   size={'xl'}
    >
      <ModalOverlay />
      <ModalContent sx={{minWidth:'800px',maxHeight:'600px'}}>
        <ModalHeader
          sx={{
            borderBottom: "1px solid",
            borderColor: "slate.100",
          }}
        >
          <Flex
            sx={{
              alignItems: "center",
              gap: "12px",
            }}
          >
            <img
              src={selectedRulesObject?.icon}
              alt={selectedRulesObject?.title}
              style={{
                height: "24px",
                objectFit: "contain",
              }}
            />
            <Text>
              {selectedRulesObject?.title}
              <Text
                as="span"
                sx={{
                  background: "slate.100",
                  padding: "4px 8px",
                  borderRadius: "8px",
                  fontSize: "10px",
                  margin: "0 8px",
                }}
              >
                {rulesList?.length || selectedRulesObject?.rulesCount} RULES
              </Text>
            </Text>
          </Flex>
        </ModalHeader>
        <ModalCloseButton sx={{
            color:'slate.400'
        }} />
        <ModalBody
          sx={{
            overflow: "scroll",
            padding: "24px ",
          }}
        >
          {rulesList?.length ? (
            rulesList.map((item, i) => {
              return <SubRuleCard card={item} index={i < 9 ? `0${i+1}` : i} />;
            })
          ) : (
            <Skeleton height="300px" borderRadius={"8px"} />
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default RulesModel;
