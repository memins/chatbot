/* eslint-disable import/no-extraneous-dependencies */
import axios from "axios";
import { observer } from "mobx-react-lite";
import React from "react";
import styled from "styled-components";

import { useStore } from "../app/root-store";
import { H1, H2, Screen, Button } from "../components";

export const HomeScreen = observer(() => {
  // eslint-disable-next-line unused-imports/no-unused-vars
  const store = useStore();
  const styles = {
    actions: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    conditionButton: {
      position: "absolute",
      top: "755px",
      left: "810px",
      width: "300px",
    },
    activeConditionButton: {
      position: "absolute",
      top: "362px",
      left: "960px",
      borderRadius: "20px",
    },
    secondConditionButton: {
      position: "absolute",
      top: "755px",
      left: "810px",
    },
    activeSecondConditionButton: {
      position: "absolute",
      top: "480px",
      left: "1115px",
      borderRadius: "20px",
    },
  } as const;

  const HowLongQuestionText = styled.p`
    position: absolute;
    top: 442px;
    left: 660px;
  `;

  const DrugsContainer = styled.div`
    position: absolute;
    top: 579px;
    left: 660px;
  `;

  const Drugs = styled.div`
    top: 60px;
    left: 0px;
    margin-left: 23px;
  `;

  const DrugsBox = styled.div`
    display: flex;
    align-items: center;
    margin-top: 23px;
  `;

  React.useEffect(() => {
    const { subCondition } = store;
    if (subCondition) {
      if (subCondition === "lt3day") {
        axios.get("http://localhost:3000/drugs?duration=SHORT").then((res) => {
          store.setDrugs(res.data[0]);
        });
      }
      if (subCondition === "toolong") {
        axios.get("http://localhost:3000/drugs?duration=LONG").then((res) => {
          store.setDrugs(res.data[0]);
        });
      }
    }
  }, [store.subCondition]);

  return (
    <Screen style={{ position: "relative" }}>
      {store.condition && (
        <HowLongQuestionText>
          {" "}
          How long has this been going on for?{" "}
        </HowLongQuestionText>
      )}
      <div style={{ position: "absolute", top: "206px", left: "660px" }}>
        <H1 tx="Hello," style={{ color: "black" }} />
        <H2
          tx="How can I help you today ?"
          style={{ color: "black", fontWeight: 300 }}
        />
      </div>
      <div className="actions">
        <div className="conditions" style={styles.actions}>
          {(store.condition === "ache" || !store.condition) && (
            <Button
              style={{
                ...(store.condition === "ache"
                  ? styles.activeConditionButton
                  : styles.conditionButton),
              }}
              color="blue"
              onClick={() => {
                store.setCondition("ache");
              }}
            >
              I have a stomach ache
            </Button>
          )}
          {(store.condition === "cold" || !store.condition) && (
            <Button
              style={{
                ...(store.condition === "cold"
                  ? styles.activeConditionButton
                  : { ...styles.conditionButton, top: "815px" }),
              }}
              color="blue"
              onClick={() => {
                store.setCondition("cold");
              }}
            >
              I have a cold
            </Button>
          )}
        </div>
        <div style={{ ...styles.actions, flexDirection: "row" }}>
          {store.condition && (
            <Button
              style={{
                ...((store.condition && !store.subCondition) ||
                store.subCondition !== "lt3day"
                  ? styles.secondConditionButton
                  : styles.activeSecondConditionButton),
                ...(store.subCondition === "toolong" && { display: "none" }),
              }}
              color="blue"
              onClick={() => {
                store.setSubCondition("lt3day");
              }}
            >
              &lt; 3 days
            </Button>
          )}
          {store.condition && (
            <Button
              style={{
                ...((store.condition && !store.subCondition) ||
                store.subCondition !== "toolong"
                  ? { ...styles.secondConditionButton, left: "955px" }
                  : { ...styles.activeSecondConditionButton }),
                ...(store.subCondition === "lt3day" && { display: "none" }),
              }}
              color="blue"
              onClick={() => {
                store.setSubCondition("toolong");
              }}
            >
              Too long
            </Button>
          )}
          {store.drugs && (
            <Button
              style={{
                position: "absolute",
                top: "815px",
                left: "887px",
              }}
              color="blue"
              onClick={() => {
                store.setCondition("");
                store.setSubCondition("");
                store.setDrugs(null);
              }}
            >
              RESET
            </Button>
          )}
        </div>
      </div>
      {store.drugs && (
        <DrugsContainer>
          <h1>I´ve found something:</h1>
          <DrugsBox>
            <div
              style={{
                width: "10px",
                height: "142px",
                backgroundColor: "#004FC1",
                borderRadius: "10px",
                top: "40px",
              }}
            >
              &nbsp;
            </div>

            <Drugs>
              <h2
                style={{
                  fontWeight: "bold",
                }}
              >
                {" "}
                {store.drugs?.title}{" "}
              </h2>
              <p
                style={{
                  fontSize: "20px",
                }}
              >
                {store.drugs?.manufacturer}
              </p>
              <p
                style={{
                  fontSize: "14px",
                }}
              >
                {store.drugs?.description}
              </p>
            </Drugs>
          </DrugsBox>
        </DrugsContainer>
      )}
    </Screen>
  );
});

export default HomeScreen;
