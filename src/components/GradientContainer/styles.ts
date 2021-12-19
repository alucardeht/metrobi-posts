import styled, { keyframes } from "styled-components";

const gradient = keyframes`
0% {
    background-position: 0% 50%;
}
50% {
    background-position: 100% 50%;
}
100% {
    background-position: 0% 50%;
}
`;

export const Container = styled.div`
  background: linear-gradient(
    -45deg,
    ${(props) => props.theme.bg.first},
    ${(props) => props.theme.bg.second},
    ${(props) => props.theme.bg.third},
    ${(props) => props.theme.bg.fourth}
  );
  background-size: 400% 400%;
  animation: ${gradient} 15s ease infinite;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: scroll;
`;
