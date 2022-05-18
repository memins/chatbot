import type { StyledComponentProps } from "styled-components";

/* eslint-disable @typescript-eslint/no-explicit-any */
export type StyledComponentPropsWithAs<
  C extends string | React.ComponentType<any>,
  T extends object,
  O extends object,
  A extends keyof any,
  AsC extends string | React.ComponentType<any> = C,
  FAsC extends string | React.ComponentType<any> = C,
> = StyledComponentProps<C, T, O, A, FAsC> & {
  as?: AsC | undefined;
  forwardedAs?: FAsC | undefined;
};
/* eslint-enable */

/** Additional data, passed to the translation function. */
export interface I18nData {
  context?: string;
  count?: number;
  date?: Date;
  [key: string]: unknown;
}

export type I18nComponents =
  | React.ReactNode[]
  | {
      [tagName: string]: React.ReactNode;
    };

export interface I18nProps {
  /** The raw text (is preceeded by `tx`, preceedes `children`). */
  text?: React.ReactNode;

  /** The key for i18n translation (preceeds `text` & `children`). */
  tx?: string;

  /**
   * Optional components to be used to style the translated text when `tx`
   * is being used.
   */
  txComponents?: I18nComponents;

  /**
   * Additional data, passed to the translation function when `tx` is being
   * used.
   */
  txData?: I18nData;
}

/** Props that every (major) UI component should support. */
export interface UIStateProps {
  isDisabled?: boolean;
}
