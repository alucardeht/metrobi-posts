import React, { ReactNode } from "react";
import { Container } from "./styles";

interface Props {
  children: ReactNode;
}

const GradientContainer = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default GradientContainer;
