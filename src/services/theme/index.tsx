import { ReactElement } from "react";
import { ThemeProvider } from "styled-components";

type Props = {
  children: ReactElement<any>;
};

export const Theme = ({ children }: Props) => {
  const default_config = {
    bg: {
      first: "#fc9918",
      second: "#f14a16",
      third: "#35589a",
      fourth: "#370665",
    },
  };

  return <ThemeProvider theme={default_config}>{children}</ThemeProvider>;
};
