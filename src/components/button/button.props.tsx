import React from "react";

export type ButtonProps = {
  color:
    | "red"
    | "blue"
    | "green"
    | "yellow"
    | "purple"
    | "orange"
    | "gray"
    | "black"
    | "white";
  // eslint-disable-next-line @typescript-eslint/ban-types
  onClick: () => void;
  children: React.ReactNode;
  style?: React.CSSProperties;
};
