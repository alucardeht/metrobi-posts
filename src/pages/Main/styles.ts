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
  overflow: scroll;
`;

export const PostsContainer = styled.div`
  height: 100%;
  width: 25rem;

  @media (max-width: 600px) {
    width: 20rem;
  }
`;

export const PostCard = styled.div`
  height: 30rem;
  width: 100%;
`;

export const PostCardContainer = styled.div`
  padding: 1.25rem 2rem;
  border-radius: 4px;
  background-color: ${(props) => props.theme.primary.white};
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  margin-top: 2rem;
`;

export const PostCardTitle = styled.div`
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-size: 1.25rem;
  line-height: 2rem;
  font-weight: bold;
  letter-spacing: 0.0125em;
  text-decoration: inherit;
  text-transform: capitalize;
`;

export const PostCardText = styled.div`
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 400;
  letter-spacing: 0.0178571429em;
  text-decoration: inherit;
  text-transform: inherit;
  opacity: 0.6;
`;
