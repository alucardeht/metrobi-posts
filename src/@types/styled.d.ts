import "styled-components";

type ThemeConfiguration = {
  bg: {
    first: string;
    second: string;
    third: string;
    fourth: string;
  };
};

declare module "styled-components" {
  export interface DefaultTheme extends ThemeConfiguration {}
}
