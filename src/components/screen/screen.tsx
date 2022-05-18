import React, { useEffect } from "react";
import styled from "styled-components";

import { ScreenProps } from "./screen.props";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  max-height: 100%;
  max-width: 100%;
  min-width: 100%;
  position: relative;
  width: 100%;
`;

export const Screen: React.FC<ScreenProps> = ({
  title,
  ...rest
}: ScreenProps) => {
  useEffect(() => {
    if (title) document.title = title;
  }, [title]);

  return <StyledDiv {...rest} />;
};

export default Screen;
