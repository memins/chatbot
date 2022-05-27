import styled from "styled-components";

import { ButtonProps } from "./button.props";

const defaultProps: ButtonProps = {
  color: "red",
  onClick: () => console.log("Button clicked"),
  children: "Button",
  style: {},
};
const buttonTheme = styled.button`
  background: #004fc1;
  border-radius: 3px;
  border: none;
  color: white;
  font-size: 14px;
  font-weight: 600;
  padding: 13px 40px;
  border-radius: 6px;
  transition: all 0.4s ease;
`;

const TomatoButton = styled(buttonTheme)`
  color: white;
`;

export const Button = (props: ButtonProps) => (
  // eslint-disable-next-line react/button-has-type
  <TomatoButton {...props}>
    {
      // eslint-disable-next-line react/destructuring-assignment
      props.children
    }
  </TomatoButton>
);
Button.defaultProps = defaultProps;
