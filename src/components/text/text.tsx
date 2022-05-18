import styled from "styled-components";

import { Trans, useTranslation } from "../../i18n";
import { color, font, fontSize, fontWeight, Theme } from "../../theme";
import type { StyledComponentPropsWithAs } from "../types";
import { LinkProps, TextProps } from "./text.props";

const StyledSpan = styled.span<Pick<TextProps, "isDisabled">>`
  color: ${(props) => color(props.isDisabled ? "border" : "text")};
  font-family: ${font("default")};
  font-size: ${fontSize("default")};
  font-weight: ${fontWeight("default")};
  white-space: pre-line;
`;

export const defaultTxComponents = {
  b: <b />,
  i: <i />,
  p: <p />,
  ul: <ul />,
  ol: <ol />,
  li: <li />,
};

export const Text: React.FC<
  StyledComponentPropsWithAs<
    "span",
    Theme,
    TextProps,
    never,
    "span" | "a" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  >
> = ({ children, txData, text, tx, txComponents, ...rest }) => {
  const { t } = useTranslation();

  return (
    <StyledSpan {...rest}>
      {tx ? (
        txComponents ? (
          <Trans i18nKey={tx} components={txComponents} values={txData} />
        ) : (
          t(tx, txData)
        )
      ) : (
        text || children
      )}
    </StyledSpan>
  );
};

export const SmallText = styled(Text)`
  font-size: ${fontSize("small")};
`;

export const Link = styled(({ ...rest }: LinkProps) => (
  <Text as="a" target="_blank" rel="noreferrer" {...rest} />
))`
  color: ${(props) => color(props.isDisabled ? "primaryDisabled" : "primary")};
  text-decoration: none;
`;

export const H1 = styled(({ ...rest }: TextProps) => (
  <Text as="h1" {...rest} />
))`
  font-size: ${fontSize("h1")};
  font-weight: ${fontWeight("bold")};
  color: ${(props) => color(props.isDisabled ? "primaryDisabled" : "primary")};
`;

export const H2 = styled(({ ...rest }: TextProps) => (
  <Text as="h2" {...rest} />
))`
  font-size: ${fontSize("h2")};
  font-weight: ${fontWeight("bold")};
  color: ${(props) => color(props.isDisabled ? "primaryDisabled" : "primary")};
`;

export const H3 = styled(({ ...rest }: TextProps) => (
  <Text as="h3" {...rest} />
))`
  font-size: ${fontSize("h3")};
  font-weight: ${fontWeight("bold")};
  color: ${(props) => color(props.isDisabled ? "primaryDisabled" : "primary")};
`;

export const H4 = styled(({ ...rest }: TextProps) => (
  <Text as="h4" {...rest} />
))`
  font-size: ${fontSize("h4")};
  font-weight: ${fontWeight("bold")};
  color: ${(props) => color(props.isDisabled ? "primaryDisabled" : "primary")};
`;

export const H5 = styled(({ ...rest }: TextProps) => (
  <Text as="h5" {...rest} />
))`
  font-size: ${fontSize("h5")};
  font-weight: ${fontWeight("bold")};
  color: ${(props) => color(props.isDisabled ? "primaryDisabled" : "primary")};
`;

export const H6 = styled(({ ...rest }: TextProps) => (
  <Text as="h6" {...rest} />
))`
  font-size: ${fontSize("h6")};
  font-weight: ${fontWeight("bold")};
  color: ${(props) => color(props.isDisabled ? "primaryDisabled" : "primary")};
`;

export const InputLabel = styled(Text)`
  font-size: ${fontSize("small")};
  font-weight: ${fontWeight("bold")};
  color: ${(props) => color(props.isDisabled ? "primaryDisabled" : "primary")};
  margin-bottom: 4px;
`;

export default Text;
