import { useEffect, useState } from "react";
import "./App.css";
import * as yaml from "js-yaml";
import Navbar from "./components/Navbar";
import {
  Flex,
  Grid,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Text,
} from "@chakra-ui/react";
import Footer from "./components/Footer";
import searchIcon from "./assets/searchIcon.svg";
import slashIcon from "./assets/slashIcon.svg";
import { browserLibrary } from "./data/browserLibrary";
import RuleCard from "./components/RuleCard";
import RulesModel from "./components/RulesModel";
import { Configuration, IAlertObject, IAlertRule } from "./helpers/interface";

function App() {
  const [val, setVal] = useState<string>("");
  const [selectedRulesObject, setSelectedRulesObject] =
    useState<IAlertObject | null>(null);
  const [rulesList, setRulesList] = useState<IAlertRule[] | null>(null);
  const getData = async () => {
    if (!selectedRulesObject?.fetchUrl) return null;
    const res = await fetch(selectedRulesObject?.fetchUrl as string);
    const data = await res.text();
    const json = (await yaml.load(data)) as Configuration;
    if (json.groups.length && json.groups[0].rules.length) {
      setRulesList(json.groups[0].rules);
    }
  };

  useEffect(() => {
    if (selectedRulesObject?.fetchUrl) {
      getData();
    }
  }, [selectedRulesObject]);

  return (
    <>
      {selectedRulesObject?.fetchUrl ? (
        <RulesModel
          selectedRulesObject={selectedRulesObject}
          setSelectedRulesObject={setSelectedRulesObject}
          rulesList={rulesList}
        />
      ) : null}
      <Grid sx={{ padding: "88px 0 60px 0", position: "relative" }}>
        <Navbar />
        <Grid
          sx={{
            paddingTop: "40px",
            width: "70%",
            margin: "auto",
          }}
        >
          <Text
            sx={{
              fontSize: "20px",
              fontWeight: "500",
              margin: "16px 0 0 0",
              fontFamily: "primary",
              color: "slate.600",
            }}
          >
            Browse Library
          </Text>
          <InputGroup
            style={{
              margin: "12px 0",
              zIndex: 1,
            }}
          >
            <InputLeftAddon
              sx={{
                background: "white",
              }}
            >
              <img
                src={searchIcon}
                alt={searchIcon}
                style={{ height: "16px", width: "16px" }}
              />
            </InputLeftAddon>
            <Input
              placeholder="Seach for a component"
              sx={{
                borderRight: "none",
                borderLeft: "none",
                fontSize: "12px",
                fontWeight: "500",
                "&:focus": {
                  border: "1px solid slate.200",
                  outline: "1px solid slate.200",
                },
                "&:hover": {
                  border: "1px solid slate.200",
                  outline: "1px solid slate.200",
                },
              }}
              value={val}
              onChange={(e) => setVal(e.target.value)}
            />
            <InputRightAddon
              sx={{
                background: "white",
                borderLeft: "none",
              }}
            >
              <img
                src={slashIcon}
                alt={slashIcon}
                style={{ height: "20px", width: "20px" }}
              />
            </InputRightAddon>
          </InputGroup>
          <Grid>
            {browserLibrary.map((ruleObj) => {
              return (
                <Grid key={ruleObj.title} sx={{marginBottom:'24px'}}>
                  <Text
                    sx={{
                      fontSize: "10px",
                      fontWeight: "700",
                      margin: "16px 0 8px 0",
                      color: "slate.400",
                      fontFamily: "primary",
                    }}
                  >
                    {ruleObj.title}
                  </Text>
                  <Flex
                    sx={{
                      // gridTemplateColumns: "1fr 1fr 1fr",
                      gap: "24px",
                      flexWrap:'wrap',
                      // justifyContent:'space-between'
                    }}
                  >
                    {ruleObj.rules
                      .filter((item) =>
                        val ? item.title.toLowerCase().includes(val) : item
                      )
                      .map((item) => {
                        return (
                          <RuleCard
                            ruleObj={item}
                            key={item.title}
                            setSelectedRulesObject={setSelectedRulesObject}
                          />
                        );
                      })}
                  </Flex>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Footer />
      </Grid>
    </>
  );
}

export default App;
