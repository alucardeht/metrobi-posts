import "styled-components";

type ThemeConfiguration = {
  bg: {
    first: string;
    second: string;
    third: string;
    fourth: string;
  };
  primary: {
    white: string;
    black: string;
  };
};

declare module "styled-components" {
  export interface DefaultTheme extends ThemeConfiguration {}
}
